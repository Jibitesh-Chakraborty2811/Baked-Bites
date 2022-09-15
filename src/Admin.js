import React from 'react'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import {db} from './firebase-config'
import {useEffect,useState} from 'react'

function Admin() {

    const [orders,setorder] = useState([]);
    const ordercollection = collection(db,"orders");
    useEffect( () => {
        const getorders = async () => {
            const data = await getDocs(ordercollection);
            setorder(data.docs.map((doc) => ({...doc.data(),id : doc.id})))
        }
        getorders();
    },[]);
    
    const displayorders = () => {
        console.log(orders);
        document.getElementById("orderlist").innerText = orders.map((order) => '\n' + order.name  + '\t' + order.price + '\t' + order.day + '\t' + order.month + '\t' + order.year/*+'\t' +displaylists(order.cartlist)*/ );
    }
  return (
    <div className="mt-40 md:mt-40 relative">
        
        <button onClick={displayorders}>get accounts</button>
        <h1>Accounts</h1>
        <p id="orderlist"></p>
    </div>
  )
}

export default Admin;
