
import {Link} from "react-router-dom"
const Home=({products})=>{


    return(
      <div >
        <div className="container ">
            <section className="mt-5">
                <div className='row '>
                    <div className='content col-lg-6 mt-5'>
                        <h1 className="fw-bold mb-3">Discover Premium Quality Products</h1>
                        <p className="lead">
                           Curated collection of exceptional items for those who appreciate the finer things in life
                        </p>
                        <a href="#product" className="btn btn-primary mt-3">Voir nos produits</a>
                        
                    </div>
                    <div className='image col-lg-6'>
                        <img src="images/1763241700201.jpg" alt="" srcset="" />
                    </div>
            
                </div>
          
            </section>
          {/* About */}
          <section style={{marginTop:"50px"}}>
           
              <div className="row">
                <div className=" col-lg-6">
                  <h3 className='fw-bold p-0 m-0'>About Us</h3>
                  <hr className="hr" />
                  <p>  We are dedicated to bringing you the finest selection of premium products. 
                Our commitment to quality and customer satisfaction sets us apart in the industry.
                  </p>
                  <div className="row mt-5 justify-content-between">
                    <div className="col-6">
          <div className="about-content pt-2 ps-1  ">
            <h6 className="fw-bold ">Quality Products</h6>
            <p >Carefully curated items</p>
          </div>
        </div>

        <div className="col-6">
          <div className="about-content pt-2 ps-1 ">
            <h6 className="fw-bold ">Free Shipping</h6>
            <p >On orders over $100</p>
          </div>
        </div>

        <div className="col-6">
          <div className="about-content pt-2 ps-1 ">
            <h6 className="fw-bold ">Secure Payment</h6>
            <p >Protected transactions</p>
          </div>
        </div>

        <div className="col-6">
          <div className="about-content pt-2 ps-1 ">
            <h6 className="fw-bold ">Easy Returns</h6>
            <p>30-day return policy</p>
          </div>
        </div>
                  </div>

                  

                </div>
                <div className="image-about col-lg-6 text-center">
                    <img src="images/1763241908051.jpg" alt="" srcset="" />
                </div>
              </div>
              
            
          </section>

        {/* feature product strt*/}

        <section id='product' style={{marginTop:"70px"}}>
            <div className="d-flex justify-content-between align-items-center ">
                <h3 className="fw-bold p-0 m-0" >Feature Product</h3>
                <Link to="Products" style={{textDecoration:'none'}} >View All</Link>
            </div>
            <hr className="hr"/>
          <div className='row g-4 justify-content-between '>
            

            
           
                {products.slice(0,5).map(e=>
                 <div className="col-lg-2 col-md-4 col-6 p-1">
                <div key={e.id}  className='Card '>
                  <img src={e.image} alt="" />
                  <small>{e.categorie}</small>
                  <p>{e.name}</p>
                  <small>{e.price}</small>
                  <Link className="d-block  " to={`DetailsProduct/${e.id}`} style={{textDecoration:'none'}}><button className="d-block ">Add to card</button></Link>
                </div>
                </div> 
              )}    
                </div>            
                        
                     
        </section>
        {/* feature product end*/}

        {/* hoddies */}
       <section style={{ marginTop: "70px" }}>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold p-0 m-0 " > Hoddies </h3>
            <Link to="Products" style={{textDecoration:'none'}} >View All</Link>
        </div>
            
            <hr className="hr" />

        <div className="row g-4 justify-content-between">
            {products.slice(0,13).filter((e) => e.categorie === "hoddie").map((e) => (
                <div key={e.id} className=" col-lg-2 col-md-4 col-6 p-1">
                <div className="Card ">
                    <img src={e.image} alt={e.name} className="img-fluid "/>
                    <small>{e.categorie}</small>
                    <p>{e.name}</p>
                    <small>{e.price} MAD</small>
                    <Link to={`DetailsProduct/${e.id}`} style={{textDecoration:'none'}}> <button className="d-block ">Add to card</button></Link>
                </div>
                </div>
            ))}
        </div>
        </section>
    </div>
    <footer className="pt-5  text-dark">
      
        

        {/* Bottom text */}
        <div className=" container text-center  border-top border-secondary pt-3">
          <p className="mb-3">© 2025 Relume. All rights reserved.</p>
        </div>

      
    </footer>

      </div>
        
    
    )

}
export default Home;



