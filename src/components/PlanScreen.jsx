import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db, {empty_db} from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup, getFirestore } from 'firebase/firestore';




const PlanScreen = () => {

    const [products, setProducts] = useState([])

    console.log("My DB",db)
    console.log("EMPTY DB",empty_db)


    useEffect(() => {

        const fetchProducts = async () => {
            console.log('Fetching products...');
            try {
                console.log('Hollaaaa')
                const q = query(collection(db, 'products'), where('active', '==', true));
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


    },[db])

    console.log(products)

    return (
        <div className="planScreen">

        </div>
    );
};

export default PlanScreen;
