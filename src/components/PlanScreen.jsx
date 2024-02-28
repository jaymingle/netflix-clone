import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db, {empty_db} from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup, getFirestore, onSnapshot, addDoc } from 'firebase/firestore';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {loadStripe} from "@stripe/stripe-js";




const PlanScreen = () => {

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {

        const fetchSubscriptions = async () => {

            try {
                const subscriptionsCollectionRef = collection(doc(db, 'customers', user.uid), 'subscriptions');
                const subscriptionsSnapshot = await getDocs(subscriptionsCollectionRef);

                subscriptionsSnapshot.forEach(async (subscriptionDoc) => {
                    const subscriptionData = subscriptionDoc.data();
                    setSubscription({
                        role: subscriptionData.role,
                        current_period_start: subscriptionData.current_period_start.seconds,
                        current_period_end: subscriptionData.current_period_end.seconds
                    })
                    // // Fetch the subscription data including cancel_at_period_end field
                    console.log('Subscription:', subscriptionData);
                });
            } catch (error) {
                console.error('Error fetching subscriptions:', error);
            }

            // try {
            //     const subscriptionsCollectionRef = collection(doc(db, 'customers', user.uid), 'subscriptions');
            //     const subscriptionsSnapshot = await getDocs(subscriptionsCollectionRef);
            //
            //     subscriptionsSnapshot.forEach((subscriptionDoc) => {
            //         // setSubscription({
            //         //     role: subscriptionDoc.role,
            //         //     current_period_end: subscriptionDoc.canceled_at
            //         // })
            //         console.log('Subscription:', subscriptionDoc.data());
            //
            //         // console.log('Subscription Details', subscription.role)
            //         // console.log('Subscription', subscriptionDoc.id, subscriptionDoc.data());
            //         // You can set the subscription state or perform any other actions here
            //     });
            // } catch (error) {
            //     console.error('Error fetching subscriptions:', error);
            // }
        };

        fetchSubscriptions()

        // db.collection('customers')
        //     .doc(user.uid)
        //     .collection('subscriptions')
        //     .get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(async subscription => {
        //             console.log('Subscription', subscription)
        //             // setSubscription({
        //             //
        //             // })
        //         })
        //     })
    }, [])

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const q = query(collection(db, 'products'), where('active', '==', true));
                const querySnapshot = await getDocs(q);
                const productsData = {};

                await Promise.all(querySnapshot.docs.map(async (productDoc) => {
                    const productId = productDoc.id;
                    const productData = productDoc.data();

                    // Fetch prices subcollection for the current product
                    const pricesCollectionRef = collection(productDoc.ref, 'prices');
                    const pricesQuerySnapshot = await getDocs(pricesCollectionRef);
                    const pricesData = {};

                    // Loop through price documents and store them in an object
                    pricesQuerySnapshot.forEach((priceDoc) => {
                        pricesData[priceDoc.id] = {
                            priceId: priceDoc.id,
                            ...priceDoc.data()
                        };
                    });

                    // Add prices data to the product's data
                    productData.prices = pricesData;

                    // Store the product data in the productsData object
                    productsData[productId] = productData;
                }));

                // Set the products state with the fetched data
                setProducts(productsData);

                // const priceId = Object.keys(productsData.prices)[0]; // Get the first key from the prices object
                // console.log("Price ID:", priceId);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };


        fetchProducts()

    },[db])


    console.log(products)

    const loadCheckout = async (priceId) => {
        try {
            if (priceId) { // Ensure priceId is defined
                const docRef = await addDoc(collection(doc(db, 'customers', user.uid), 'checkout_sessions'), {
                    price: priceId,
                    success_url: window.location.origin,
                    cancel_url: window.location.origin,
                });

                onSnapshot(docRef, async (snap) => {
                    const { error, sessionId } = snap.data();

                    if (error) {
                        alert('An error occurred: ' + error.message);
                    }

                    if (sessionId) {
                        const stripe = await loadStripe('pk_test_51HwohvG5U8HFtRgC2HpETspfFOUrL2hnwlFvV1scwwgOQDFNkrkNjltrwNS9ED0BfaoOs1tw8nJEU7cUbNKV5Ipa00RrnGPc8t');
                        stripe.redirectToCheckout({ sessionId });
                    }
                });
            } else {
                console.error('Price ID is undefined');
            }
        } catch (error) {
            console.error('Error adding checkout session: ', error);
        }
    };


    return (
        <div className="planScreen">
            {Object.entries(products).map(([productId, productData]) => {

                return (
                    <div key={productId} className="planScreen_plan">
                        <div className="planScreen_info">
                           <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices[Object.keys(productData.prices)[0]].priceId)}>Subscribe</button>
                    </div>
                )

            })}
        </div>
    );
};

export default PlanScreen;
