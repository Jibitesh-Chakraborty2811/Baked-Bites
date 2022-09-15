import React from 'react'
import {useState} from 'react'
import data from './data'
import pic1 from "./Images/pic1.jpg";
import pic2 from "./Images/pic2.jpg";
import pic3 from "./Images/pic3.jpg";
import pic6 from "./Images/pic6.jpg";
import pic7 from "./Images/pic7.jpg";
import pic8 from "./Images/pic8.jpg";
import pic4 from "./Images/pic4.jpg";
import pic10 from "./Images/pic10.jpg";
import pic14 from "./Images/pic14.jpg";
import pic17 from "./Images/pic17.jpg";
import pic18 from "./Images/pic18.jpg";
import pic5 from "./Images/pic5.jpg";
import pic9 from "./Images/pic9.jpg";
import pic11 from "./Images/pic11.jpg";
import pic12 from "./Images/pic12.jpg";
import pic13 from "./Images/pic13.jpg";
import pic15 from "./Images/pic15.jpg";
import pic20 from "./Images/pic20.jpg";
import pic21 from "./Images/pic21.jpg";
import pic22 from "./Images/pic22.jpg";
import pic23 from "./Images/pic23.jpg";
import pic24 from "./Images/pic24.jpg";

import { getAuth, onAuthStateChanged } from "firebase/auth"
import {addDoc,collection} from 'firebase/firestore'
import {auth, db} from './firebase-config'

function Item() {

     let [cartlist, setcartlist] = useState([]);
     let price = 0;

     const addtocart1 = () => {

        cartlist.push(data.products[0]);
        
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[0].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
     }

     const addtocart2 = () => {
      cartlist.push(data.products[1]);
      document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
      price = price + data.products[1].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
     }

     const addtocart3 = () => {
      cartlist.push(data.products[2]);
      document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
      price = price + data.products[2].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
     }

     const addtocart4 = () => {

      cartlist.push(data.products[3]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[3].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
   }

   const addtocart5 = () => {

    cartlist.push(data.products[4]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[4].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
      }

 const addtocart6 = () => {

  cartlist.push(data.products[5]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[5].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart7 = () => {

  cartlist.push(data.products[6]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[6].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart8 = () => {

  cartlist.push(data.products[7]);
  document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
  price = price + data.products[7].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart9 = () => {

  cartlist.push(data.products[8]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[8].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
      }

const addtocart10 = () => {

  cartlist.push(data.products[9]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[9].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart11 = () => {

  cartlist.push(data.products[10]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[10].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart12 = () => {

  cartlist.push(data.products[11]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[11].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart13 = () => {

  cartlist.push(data.products[12]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[12].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart14 = () => {

  cartlist.push(data.products[13]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[13].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart15 = () => {

  cartlist.push(data.products[14]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[14].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart16 = () => {

  cartlist.push(data.products[15]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[15].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart17 = () => {

  cartlist.push(data.products[16]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[16].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart18 = () => {

  cartlist.push(data.products[17]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[17].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart19 = () => {

  cartlist.push(data.products[18]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[18].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
      }

const addtocart20 = () => {

  cartlist.push(data.products[19]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[19].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}

const addtocart21 = () => {

  cartlist.push(data.products[20]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[20].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
      }

const addtocart22 = () => {

  cartlist.push(data.products[21]);
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = price + data.products[21].price;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;
}
const postsCollectionRef = collection(db,"orders");

const order = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.email);
      let name = user.email;
      const d = new Date();
      let time = d.getTime();
      let day = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();
      month = month + 1;
      await addDoc(postsCollectionRef,{
        name,
        cartlist,
        price,
        day,
        month,
        year,
        });
        cartlist = [];
        document.getElementById("item").innerText = cartlist.map((item) => '\n' + 'Item:' + '\t' + item.name + '\n' + 'Price:' + '\t' + item.price );
        price = 0;
        document.getElementById("totalprice").innerText = 'Total price:' + '\t' + price;

  
}
  return (

    <div>
    
    <div className="mt-40 md:mt-40 relative">
      <section className="px-4 flex items-center justify-center">
        <p className="text-xl md:text-2xl font-semibold bg-yellow-200 inline border-solid border-4 border-red-600 rounded-lg hover:border-dotted px-4 py-2 font-serif">
          Our Items
        </p>
      </section>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Cakes
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-3 md:gap-20 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic1} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Strawberry Special Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart1}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic2} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Chocolate Truffle Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1000
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart2}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic3} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Strawberry Floral Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 900
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart3}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic6} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-strawberry Fussion Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1000
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart4}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic7} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Orange Chocolate Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 980
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart5}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic8} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Fruit 'N' Nut Chocolate Cake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 1300
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart6}>
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Pastries
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-3 md:gap-20 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic4} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Delight Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart7}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic10} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Coffee Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart8}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic14} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Black Current Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 300
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart9}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic17} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Red Velvet Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart10}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic18} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Brownie Sundae
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 350
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart11}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic5} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco Wrap Pastry
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart12}>
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Cupcakes
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-3 md:gap-20 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic9} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Cherry-topped Vanilla Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart13}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic11} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Floral Strawberry Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart14}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic12} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-vanilla Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart15}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic13} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Fruit 'N' Nut Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart16}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic15} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Sweet Strawberry Cupcake
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart17}>
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-10 relative ml-7">
        <p className="inline text-xl md:text-2xl font-semibold bg-[#ea580c] hover:bg-[#fdba74] rounded-xl font-mono p-3 ml-5 md:ml-40">
          Donuts
        </p>
      </div>
      <div className="mt-10 ml-1 md:ml-7 flex flex-col md:flex-row flex-wrap gap-3 md:gap-20 items-center justify-center">
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic20} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Blueberry Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart18}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic21} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Dark Chocolate Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 200
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart19}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic22} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Choco-coco Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart20}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic23} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Creamy Fussion Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 150
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart21}>
            Add To Cart
          </button>
        </div>
        <div className="w-80 h-80 bg-[#fed7aa] hover:bg-[#fef3c7] rounded-lg border-solid border-2 border-black">
          <img src={pic24} alt="error" className="w-60 h-60 overflow-hidden m-auto py-2" />
          <p className="text-m font-semibold font-serif ml-4">
            Combo Donut
          </p>
          <p className="inline-block text-m font-serif ml-4 bg-[#fb923c] p-1 mt-3">
            Rs. 250
          </p>
          <button className="ml-20 rounded-xl font-semibold text-m bg-[#fdba74] p-2 hover:bg-white font-mono" onClick={addtocart22}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>

    <div className="py-40">
        {/*<p className="text-xl md:text-2xl font-semibold px-10 font-mono text-[#dc2626]">
          No orders yet!
        </p>*/}
        <div className="flex items-center justify-center">
            <p className="inline text-2xl font-bold font-mono bg-[#f87171] rounded-xl m-auto p-4 ">
                See your orders
            </p>
        </div>
        <div className="mt-10 flex flex-col gap-10 bg-[#fef2f2] font-serif">
            <div className="flex flex-col gap-20 px-20">
                <section className="flex gap-20">
                    <p className="text-m md:text-xl font-bold" id="item">
                       
                    </p>
                    
                </section>
                
                
            </div>
           
           
            <div>
                <section className="flex gap-5 items-center justify-center">
                    <p className="text-m md:text-2xl font-semibold" id="totalprice">
                        Total price:
                    </p>
                    
                </section>
            </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
            <button className="inline text-lg bg-[#e87979] hover:bg-[#f0abfc] rounded-lg items-center font-mono p-4" onClick={order}>
                    Proceed To Buy
            </button>
        </div>
    </div>
    </div>
  )
}

export default Item;
