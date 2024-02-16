import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db, {empty_db} from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup, getFirestore } from 'firebase/firestore';




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



        const fetchProducts = async () => {
            console.log('Fetching products...');
            try {
                console.log('Hollaaaa')
                const q = query(collectionGroup(db, 'products'), where('active', '==', true));
                const querySnapshot = await getDocs(q)
                console.log('getData')
                console.log('Query snapshot:', querySnapshot.docs.length);
                const productsData = {};
                querySnapshot.forEach((productDoc) => {
                    productsData[productDoc.id] = productDoc.data();
                });
                console.log('Products data:', productsData);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts()


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


//
//         const fetchProducts = async() => {
//             const q = query(
//                 collection(db, 'products'),
//                 where('active', '==', true)
//             );
//
//             const querySnapshot = await getDocs(q);
//
// // for each product, get the product price info
//             const productsPromises = querySnapshot.docs.map(async (productDoc) => {
//                 let productInfo = productDoc.data();
//
//                 // fetch prices subcollection per product
//                 const pricesCollection = collection(productDoc.ref, 'prices');
//                 const priceQuerySnapshot = await getDocs(pricesCollection);
//
//                 // assume there is only one price per product
//                 const priceDoc = priceQuerySnapshot.docs[0];
//                 productInfo['priceId'] = priceDoc.id;
//                 productInfo['priceInfo'] = priceDoc.data();
//                 return productInfo;
//             });
//
// // 'products' is an array of products (including price info)
//             const products = await Promise.all(productsPromises);
//             console.log(products)
//             setProducts(products);
//         }
//
//         fetchProducts()

// // Initialize Firestore
//         const firestore = getFirestore();
//
// // Query for active products
//         const activeProductsQuery = query(
//             collectionGroup(firestore, 'products'),
//             where('active', '==', true)
//         );
//
// // Retrieve products and handle prices
//         getDocs(activeProductsQuery)
//             .then((querySnapshot) => {
//                 const products = {};
//
//                 querySnapshot.forEach((productDoc) => {
//                     const productId = productDoc.id;
//                     const productData = productDoc.data();
//
//                     // Handle nested collection (prices) based on your requirements:
//                     // Option 1: Retrieve first price only:
//                     const priceCollectionRef = collection(productDoc.ref, 'prices');
//                     getDocs(priceCollectionRef)
//                         .then((priceSnapshot) => {
//                             if (priceSnapshot.size > 0) {
//                                 const priceDoc = priceSnapshot.docs[0];
//                                 productData.price = {
//                                     priceId: priceDoc.id,
//                                     ...priceDoc.data(),
//                                 };
//                             } else {
//                                 // Handle no prices case
//                             }
//                             products[productId] = productData;
//                         })
//                         .catch((error) => {
//                             console.error('Error retrieving price:', error);
//                             // Handle errors gracefully
//                         });
//
//                     // Option 2: Retrieve all prices as an array:
//                     // Use getDocs(priceCollectionRef) and iterate over priceSnapshot.docs
//                     // Add each price as an object to productData.prices = [] array
//
//                     // Update your state or display products as needed:
//                     setProducts(products);
//                 });
//             })
//             .catch((error) => {
//                 console.error('Error retrieving active products:', error);
//                 // Handle errors gracefully
//             });



    },[db])

    console.log(products)

    return (
        <div className="planScreen">

        </div>
    );
};

export default PlanScreen;
