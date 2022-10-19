import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Dress = ({ dress }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(dress, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div
        style={{ margin: "50px" }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <div onClick={handleShow}>
          <h1>{dress.name}</h1>
          <img
            src={dress.image}
            alt=""
            className="img-fluid !important"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="flex-container">
          <div className="w-100 m-1">
            <p>Varients</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {dress.varients.map((varient) => (
                <option key={varient}>{varient}</option>
              ))}
            </select>
          </div>
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="m-1">
              Price: ₹{dress.prices[0][varient] * quantity}{" "}
            </h3>
          </div>
          <div className="m-1 w-100">
            <button className="btn btn-danger" onClick={addToCartHandler}>
              Add to cart
            </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{dress.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={dress.image}
              alt=""
              className="img-fluid"
              style={{ height: "400px !important" }}
            />
            <p>{dress.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Dress;
