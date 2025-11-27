


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
                <div className="row g-4 justify-content-between">
                    {filterProduct.map(e => 
                        <div className="col-lg-3 col-md-4 col-6 p-1">
                            <div className="Card">
                                <img src={e.image} alt="" />
                                <small>{e.categorie}</small>
                                <p>{e.name}</p>
                                <small>{e.price}</small>
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