import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup, getFirestore } from 'firebase/firestore';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {loadStripe} from "@stripe/stripe-js";




const PlanScreen = () => {

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)

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
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts()

    },[db])

    console.log(products)

    const loadCheckout = async(priceId) => {
        // console.log('My Price ID: ', priceId)
        const docRef = await db.collection('customers')
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            })

        docRef.onSnapshot(async(snap) => {
            const {error, sessionId} = snap.data();

            if(error) {
                alert('An error occurred: ', error.message)
            }

            if(sessionId) {
                const stripe = await loadStripe()
            }

        })

    }

    return (
        <div className="planScreen">
            {Object.entries(products).map(([productId, productData]) => {

                return (
                    <div key={productId} className="planScreen_plan">
                        <div className="planScreen_info">
                           <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                )

            })}
        </div>
    );
};

export default PlanScreen;
