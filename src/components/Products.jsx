


import {Link} from "react-router-dom"
const Products=({filterProduct,search,setsearch})=>{

    return(
        <div className="container">
           <section style={{marginTop:"80px"}}>
                    <div className="d-flex justify-content-between">
                        <h3 className="fw-bold p-0 m-0" >Products</h3>                        
                        <input type="text" placeholder="Search by categorie" value={search} onChange={(e)=> setsearch(e.target.value)} />                        
                    </div>
                    <hr className="hr" />
                <div className="row g-4 justify-content-between text-center">
                    {filterProduct.map(e => 
                        <div className="col-lg-3 col-md-4 col-6 p-1">
                            <div className="Card">
                                <img src={e.image} alt="" />
                                <small className="text-muted">{e.categorie}</small>
                                <h6 className="fw-bold mb-1">{e.name}</h6>
                                  <p className="text-danger mb-1 fw-bold">{e.price} MAD</p>
                                <Link to={`/DetailsProduct/${e.id}`} style={{textDecoration:'none'}}> <button className="d-block ">Add To Card</button></Link>
                            </div>                            
                        </div>
                    )}


                     
                </div>
               
           </section>
        </div>
    )

}
export default Products;