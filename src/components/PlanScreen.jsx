import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup } from 'firebase/firestore';



const PlanScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const q = query(collection(db, 'products'), where('active', '==', true));
                const querySnapshot = await getDocs(q);

                const products = {};

                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceQuerySnapshot = await getDocs(collection(productDoc.ref, 'prices'));

                    priceQuerySnapshot.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                    });
                });
                setProducts(products)
                return products;
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        };

        fetchProducts()

        // const  theProducts = query(collection(db, 'products'), where("active", "==", true))
      //   const querySnapshot = getDocs(theProducts)
      //   querySnapshot.forEach(productDoc => {
      //       const products = {}
      //       querySnapshot.forEach(async productDoc => {
      //           products[productDoc.id] = productDoc.data()
      //           const priceSnap = await productDoc.ref.collection("prices").get()
      //           priceSnap.docs.forEach(price => {
      //               products[productDoc.id].prices = {
      //                   priceId: price.id,
      //                   priceData: price.data(),
      //               }
      //           })
      //
      //       })
      //       setProducts(products)
      //       // console.log(productDoc.id, "=>", productDoc.data)
      //   })


        // db.collection('products')
        //     .where('active', '==', true)
        //     .get()
        //     .then((querySnapshot) => {
        //         const products = {}
        //         querySnapshot.forEach(async productDoc => {
        //             products[productDoc.id] = productDoc.data()
        //             const priceSnap = await productDoc.ref.collection("prices").get()
        //             priceSnap.docs.forEach(price => {
        //                 products[productDoc.id].prices = {
        //                     priceId: price.id,
        //                     priceData: price.data(),
        //                 }
        //             })
        //
        //         })
        //         setProducts(products)
        // })
    },[])

    console.log(products)

    return (
        <div className="planScreen">

        </div>
    );
};

export default PlanScreen;
