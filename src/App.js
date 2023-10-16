import { useState } from 'react';
import './App.css';
import Header from './comp/Header';
import Productlist from './comp/Productlist';
import Cartlist from './comp/Cartlist';

function App() {

  const [product, setproduct] = useState([
    {
      url: "6-2202-6-xtoon-white-original-imagefct8fcmpdkd.webp",
      name: "TRQ White shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999
    },
    {
      url: "download.jpeg",
      name: "Black & Gold Black Dial Stainless Steel Strap Watch",
      category: "watch",
      seller: "AMZ seller Ghz",
      price: 8045
    },


  ])

  const [cart, setcart] = useState([])
  const [showcart, setshowcart] = useState(false)

  const addtocart = (data) => {
    setcart([...cart, { ...data, quantity: 1 }])
  }

  const handaleshow = (value) => {
    setshowcart(value)
  }

  return (
    <>
      <Header count={cart.length} handaleshow={handaleshow} />
      {
        showcart ?
          <Cartlist cart={cart} /> :

          <Productlist product={product} addtocart={addtocart} />
      }
    </>
  );
}

export default App;
