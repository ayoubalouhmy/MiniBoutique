
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./components/Products.jsx";
import Home from "./components/Home.jsx";
import Navbar from './components/navbar.jsx';
import Panier from './components/panier.jsx';
import DetailsProduct from './components/DetailsProduct.jsx';


function App() {
  const products = [
  { id: 1, name: "Red Sweet", price: 99.99, image: "/images/1763363533023.jpg", categorie: "Sweet" },
  { id: 2, name: "Classic Pants", price: 299.99, image: "/images/1763363557614.jpg", categorie: "Pants" },
  { id: 3, name: "Blue Sweet", price: 299.99, image: "/images/1763363305974.jpg", categorie: "Sweet" },
  { id: 4, name: "Sport Pants", price: 299.99, image: "/images/1763363587478.jpg", categorie: "Pants" },
  { id: 5, name: "Orange Hoodie", price: 299.99, image: "/images/1762882170048.jpg", categorie: "Hoodie" },
  { id: 6, name: "Street Hoodie", price: 299.99, image: "/images/1762882320357.jpg", categorie: "Hoodie" },
  { id: 7, name: "Winter Hoodie", price: 299.99, image: "/images/1762882380854.jpg", categorie: "Hoodie" },
  { id: 8, name: "Casual Hoodie", price: 299.99, image: "/images/1763296884769.jpg", categorie: "Hoodie" },
  { id: 9, name: "Black Sweet", price: 49.99, image: "/images/1763363393568.jpg", categorie: "Sweet" },
  { id: 10, name: "White Sweet", price: 299.99, image: "/images/1763363424344.jpg", categorie: "Sweet" },
  { id: 11, name: "Jogger Pants", price: 299.99, image: "/images/1763363614285.jpg", categorie: "Pants" },
  { id: 12, name: "Dark Hoodie", price: 89.99, image: "/images/1762882147072.jpg", categorie: "Hoodie" },
  { id: 13, name: "Smart Sweet", price: 149.99, image: "/images/1763363503932.jpg", categorie: "Sweet" }
];


  const [panier,setPanier]=useState([])
  const [search,setsearch]=useState("")

  const addtocard = (product) => {
  const exist = panier.find((item) => item.id === product.id);
  if (exist) {
    setPanier(
      panier.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setPanier([...panier, { ...product, quantity: 1 }]);
  }
};

const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return;
  setPanier(
    panier.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};

  const removeFromCart = (id) => {
  setPanier(panier.filter(item => item.id !== id));
};



  const filterProduct=products.filter(element =>
    element.categorie.toLocaleLowerCase().includes(search.toLocaleLowerCase())
   )

  
  return (
      <Router>
         <div className='container'>
        <Navbar panier={panier}/>

      </div>
      <Routes>
        <Route path="/" element={<Home products={products}  />} />
        <Route path="/products" element={<Products filterProduct={filterProduct} search={search} setsearch={setsearch}  />} />
        <Route path="/Panier" element={<Panier panier={panier} removeFromCart={removeFromCart}  updateQuantity={updateQuantity} addtocard={addtocard} products={products}/>}/>

        <Route path="/DetailsProduct/:id" element={<DetailsProduct products={products} addtocard={addtocard} />} />


      </Routes>

      </Router>
    


   
    
  );

}

export default App;
