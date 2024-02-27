import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db from "../../firebase.js";
import { collection, query, where, doc, getDocs, getDoc, collectionGroup, getFirestore } from 'firebase/firestore';




const PlanScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const q = query(collection(db, 'products'), where('active', '==', true));
                const querySnapshot = await getDocs(q)
                const productsData = {};
                querySnapshot.forEach((productDoc) => {
                    productsData[productDoc.id] = productDoc.data();
                });
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
