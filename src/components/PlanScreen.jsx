import React, {useState, useEffect} from 'react';
import './PlanScreen.css'
import db from "../../firebase.js";


const PlanScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products')
            .where('active', '==', true)
            .get()
            .then((querySnapshot) => {
                const products = {}
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data()
                    const priceSnap = await productDoc.ref.collection("prices").get()
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        }
                    })

                })
                setProducts(products)
        })
    },[])

    console.log(products)

    return (
        <div className="planScreen">

        </div>
    );
};

export default PlanScreen;
