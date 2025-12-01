



const Panier = ({ panier, removeFromCart, updateQuantity }) => {
  const totalPrice = panier.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container panier-gradient py-5">
      <h2 className="fw-bold mb-4 text-center">🛒 Your Cart Items</h2>

      {panier.length === 0 ? (
        <h5 className="text-center text-muted">Your cart is empty</h5>
      ) : (
        <div className="row g-4">
          {panier.map((e) => (
            <div key={e.id}>
              <div className="cart-item p-3 d-flex align-items-center justify-content-between flex-wrap">
                
                {/* Image */}
                <div className="text-center me-3">
                  <img
                    src={e.image}
                    className="cart-img img-fluid"
                    alt={e.name}
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                </div>

                {/* Info */}
                <div className="flex-grow-1 ms-3">
                  <p className="fw-bold m-0">{e.name}</p>
                  <p className="text-muted m-0">{e.categorie}</p>
                  <p className="m-0">SIZE: <strong>{e.size}</strong></p>
                  <p className="text-success fw-bold m-0">
                    {e.price * e.quantity} MAD
                  </p>

                  {/* Quantité */}
                  <div className="d-flex align-items-center mt-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(e.id, e.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{e.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(e.id, e.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Delete */}
                <div className="ms-3 mt-3 mt-md-0">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-end">
        <h5 className="fw-bold">
          Total: <span className="text-success">{totalPrice.toFixed(2)} MAD</span>
        </h5>
      </div>

      
      
    </div>
  );
};

export default Panier;
