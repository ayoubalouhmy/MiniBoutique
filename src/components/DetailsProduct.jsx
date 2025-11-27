import { useParams } from "react-router-dom";
import { useState } from "react";

const DetailsProduct = ({ products, addtocard }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [size, setSize] = useState("");

  const handleAddToCart = () => {
    if (!size) {
      alert("Please choose a size!");
      return;
    }

    addtocard({ ...product, size }); // send size to cart
  };

  return (
    <div className="container details-page">
      <section style={{ marginTop: "80px" }}>
        <div className="row">

          {/* Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"

             style={{width:"80%"}} />
          </div>

          {/* Information */}
          <div className="col-lg-6 mt-4 ">
            <span className="badge bg-dark mb-2">{product.categorie}</span>
            <h2 className="fw-bold">{product.name}</h2>
            <h4 className="text-success fw-bold mb-4">
              {product.price} MAD
            </h4>
            {/* SIZE SELECT */}
            <div className="mb-4">
              <h6 className="fw-bold">Select Size</h6>
              <div className="d-flex gap-2">
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    className ="btn btn-outline-dark size-btn" onClick={() => setSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* ADD TO CART */}
            <button
              className="btn btn-success w-100 py-2 fw-bold"
              onClick={handleAddToCart}
            >
              Add To Cart 🛒
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsProduct;
