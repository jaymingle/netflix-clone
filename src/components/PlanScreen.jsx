import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db, {empty_db} from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup } from 'firebase/firestore';



const PlanScreen = () => {

    const [products, setProducts] = useState([])

    console.log("My DB",db)
    console.log("EMPTY DB",empty_db)


    useEffect(() => {
        //
        // const fetchProducts = async () => {
        //     try {
        //         const q = query(collection(db, 'products'), where('active', '==', true));
        //         const querySnapshot = await getDocs(q);
        //
        //         const products = {};
        //
        //         querySnapshot.forEach(async (productDoc) => {
        //             products[productDoc.id] = productDoc.data();
        //             const priceQuerySnapshot = await getDocs(collection(productDoc.ref, 'prices'));
        //
        //             priceQuerySnapshot.forEach((price) => {
        //                 products[productDoc.id].prices = {
        //                     priceId: price.id,
        //                     priceData: price.data(),
        //                 };
        //             });
        //         });
        //         setProducts(products)
        //         return products;
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //         throw error;
        //     }
        // };
        //
        // fetchProducts()

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


        // const fetchProducts = async () => {
        //     console.log("Fetching products")
        //     try {
        //         const q = query(collection(db, 'products'), where('active', '==', true));
        //         const querySnapshot = await getDocs(q);
        //
        //         console.log('Query snapshot:', querySnapshot.docs.length);
        //
        //         const productsData = {};
        //
        //         querySnapshot.forEach(async (productDoc) => {
        //             productsData[productDoc.id] = productDoc.data();
        //             const priceQuerySnapshot = await getDocs(collection(productDoc.ref, 'prices'));
        //
        //             priceQuerySnapshot.forEach((price) => {
        //                 productsData[productDoc.id].prices = {
        //                     priceId: price.id,
        //                     priceData: price.data(),
        //                 };
        //             });
        //         });
        //
        //         setProducts(productsData);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //     }
        // };
        //
        // fetchProducts();

        // const fetchProducts = async () => {
        //     console.log('Fetching products...');
        //     try {
        //         // const q = query(collection(db, 'products'), where('active', '==', true));
        //         // const querySnapshot = await getDocs(q);
        //         console.log('Hollaaaa')
        //
        //         // const querySnapshot = await query(collection(db, 'products'), where('active', '==', true))
        //         // const querySnapshot = await getDocs(q);
        //
        //         const q = query(collection(db, 'products'), where('active', '==', true));
        //         const querySnapshot = await getDocs(q)
        //
        //         console.log('getData')
        //
        //         console.log('Query snapshot:', querySnapshot.docs.length);
        //
        //         const productsData = {};
        //         querySnapshot.forEach((productDoc) => {
        //             productsData[productDoc.id] = productDoc.data();
        //         });
        //
        //         console.log('Products data:', productsData);
        //
        //         // Update state with products data
        //         setProducts(productsData);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //     }
        // };
        //
        // fetchProducts()

//         const q = query(
//             collection(db, 'products'),
//             where('active', '==', true)
//         );
//
//         const querySnapshot = await getDocs(q);
//
// // for each product, get the product price info
//         const productsPromises = querySnapshot.docs.map(async (productDoc) => {
//             let productInfo = productDoc.data();
//
//             // fetch prices subcollection per product
//             const pricesCollection = collection(productDoc.ref, 'prices');
//             const priceQuerySnapshot = await getDocs(pricesCollection);
//
//             // assume there is only one price per product
//             const priceDoc = priceQuerySnapshot.docs[0];
//             productInfo['priceId'] = priceDoc.id;
//             productInfo['priceInfo'] = priceDoc.data();
//             return productInfo;
//         });
//
// // 'products' is an array of products (including price info)
//         const products = await Promise.all(productsPromises);
//
//         const q = query(
//             collection(db, 'products'),
//             where('active', '==', true)
//         );
//
//         const querySnapshot = await getDocs(q);
//
//         const products = [];
//
//         for (const productDoc of querySnapshot.docs) {
//             let productInfo = productDoc.data();
//
//             // fetch prices subcollection per product
//             const pricesCollection = collection(productDoc.ref, 'prices');
//             const priceQuerySnapshot = await getDocs(pricesCollection);
//
//             // assume there is only one price per product
//             const priceDoc = priceQuerySnapshot.docs[0];
//             productInfo['priceId'] = priceDoc.id;
//             productInfo['priceInfo'] = priceDoc.data();
//             products.push(productInfo);
//         }
//
//         console.log('Products:', products);

        const fetchProducts = async() => {
            const q = query(
                collection(db, 'products'),
                where('active', '==', true)
            );

            const querySnapshot = await getDocs(q);

// for each product, get the product price info
            const productsPromises = querySnapshot.docs.map(async (productDoc) => {
                let productInfo = productDoc.data();

                // fetch prices subcollection per product
                const pricesCollection = collection(productDoc.ref, 'prices');
                const priceQuerySnapshot = await getDocs(pricesCollection);

                // assume there is only one price per product
                const priceDoc = priceQuerySnapshot.docs[0];
                productInfo['priceId'] = priceDoc.id;
                productInfo['priceInfo'] = priceDoc.data();
                return productInfo;
            });

// 'products' is an array of products (including price info)
            const products = await Promise.all(productsPromises);
            console.log(products)
            setProducts(products);
        }

        fetchProducts()

    },[db])

    console.log(products)

    return (
        <div className="planScreen">

        </div>
    );
};

export default PlanScreen;
