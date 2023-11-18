import React from "react";

const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = () => {};

  return (
    <div>
      <div className="card mt-3" style={{ width: "19rem", maxHeight: "420px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title.
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
            <hr></hr>
            <button
              className={"btn btn-success justify-content-center ms-2"} // Added mt-2 for margin-top
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
