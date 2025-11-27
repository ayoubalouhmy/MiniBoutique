
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./components/Products.jsx";
import Home from "./components/Home.jsx";
import Navbar from './components/navbar.jsx';
import Panier from './components/panier.jsx';
import DetailsProduct from './components/DetailsProduct.jsx';


function App() {
  const products = [{id: 1,name: "Black hoddie",price: 99.99,image: "/images/1763363533023.jpg",categorie: "Sweet"},
                    {id: 2,name: "4K Monitor",price: 299.99,image: "/images/1763363557614.jpg",categorie: "Pants"},
                    {id: 3,name: "4K Monitor",price: 299.99,image: "/images/1763363305974.jpg",categorie: "Sweet"},
                    {id: 4,name: "4K Monitor",price: 299.99,image: "/images/1763363587478.jpg",categorie: "Pants"},
                    {id: 5,name: "4K Monitor",price: 299.99,image: "/images/1762882170048.jpg",categorie: "hoddie"},
                    {id: 6,name: "4K Monitor",price: 299.99,image: "/images/1762882320357.jpg",categorie: "hoddie"},
                    {id: 7,name: "4K Monitor",price: 299.99,image: "/images/1762882380854.jpg",categorie: "hoddie"},
                    {id: 8,name: "4K Monitor",price: 299.99,image: "/images/1763296884769.jpg",categorie: "hoddie"},
                    {id: 9,name: "Gaming Mouse",price: 49.99,image: "/images/1763363393568.jpg",categorie: "Sweet"},
                    {id: 10,name: "4K Monitor",price: 299.99,image: "/images/1763363424344.jpg",categorie: "Sweet"},
                    {id: 11,name: "4K Monitor",price: 299.99,image: "/images/1763363614285.jpg",categorie: "Pants"},
                    {id: 12,name: "Mechanical Keyboard",price: 89.99,image: "/images/1762882147072.jpg",categorie: "hoddie"},
                    {id: 13,name: "Smart Watch",price: 149.99,image: "/images/1763363503932.jpg",categorie: "Sweet"},
                    
                    ];

  const [panier,setPanier]=useState([])
  const [search,setsearch]=useState("")

  const addtocard=(product)=>{
  setPanier([...panier,product])
  }
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
        <Route path="/Panier" element={<Panier panier={panier} removeFromCart={removeFromCart}/>} />
        <Route path="/DetailsProduct/:id" element={<DetailsProduct products={products} addtocard={addtocard} />} />


      </Routes>

      </Router>
    


   
    
  );

}

export default App;
