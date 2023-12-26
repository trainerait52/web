import React, { useState } from 'react';
import './Addtocart.css';

function Addtocart() {
  const [subtotal, setSubtotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const calculateTax = (subtotal) => {
    const tax = subtotal * 0.13;
    return tax.toFixed(2);
  };

  const calculateTotal = (subtotal) => {
    const tax = calculateTax(subtotal);
    const total = parseFloat(subtotal) + parseFloat(tax);
    return total.toFixed(2);
  };

  const getImgLink = (title) => {
    switch (title) {
      case "French Fries with Ketchup":
        return "https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=450,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/fstve2058aw23nvy_1.jpg";
      case "Salmon and Vegetables":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60PCqfVpN3kpDasyF2B3IarlF_Of0FKhvgA&usqp=CAU";
      case "Spaghetti with Sauce":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2iMGzfC9BY3jX_o0GV0Saz_XKA9hCzt3Ug&usqp=CAU";
      case "Tortellini":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4DfZYYMLIpsG675iRtGd05TIi9q6niZJDA&usqp=CAU";
      case "Chicken Salad":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizj9IH5ZCgE0Go2pa5VnpgT4pri0LP-Ky2w&usqp=CAU";
      default:
        return "https://assets.ajio.com/medias/sys_master/root/20230620/W9ss/6491acc742f9e729d7513c91/-473Wx593H-461485279-blue-MODEL.jpg";
    }
  };

  const handleAddToCart = (title, price) => {
    const imgLink = getImgLink(title);
    const newItem = {
      title,
      price,
      imgLink,
    };

    setCartItems([...cartItems, newItem]);
    setSubtotal(subtotal + price);
  };

  return (
    <div className="container" style={{width:"1000px"}}>
      <div className="screen-togo">
        <h2>To Go Menu</h2>
        <ul className="menu-items">
          <li className="menu-item">
            <img style={{width:"200px"}} src={getImgLink("French Fries with Ketchup")} alt="French Fries with Ketchup" className="menu-image" />
            <div className="menu-item-dets">
              <p className="menu-item-heading">French Fries with Ketchup</p>
              <p className="g-price">$2.23</p>
            </div>
            <button
              className="add-button"
              onClick={() => handleAddToCart("French Fries with Ketchup", 2.23)}
            >
              Add to Cart
            </button>
          </li>
          <li className="menu-item">
            <img src={getImgLink("Salmon and Vegetables")} alt="Salmon and Vegetables" className="menu-image" />
            <div className="menu-item-dets">
              <p className="menu-item-heading">Salmon and Vegetables</p>
              <p className="g-price">$8.99</p>
            </div>
            <button
              className="add-button"
              onClick={() => handleAddToCart("Salmon and Vegetables", 8.99)}
            >
              Add to Cart
            </button>
          </li>
          <li className="menu-item">
            <img src={getImgLink("Spaghetti with Sauce")} alt="Salmon and Vegetables" className="menu-image" />
            <div className="menu-item-dets">
              <p className="menu-item-heading">Salmon and Vegetables</p>
              <p className="g-price">$8.99</p>
            </div>
            <button
              className="add-button"
              onClick={() => handleAddToCart("Spaghetti with Sauce", 8.99)}
            >
              Add to Cart
            </button>
          </li>
          <li className="menu-item">
            <img src={getImgLink("Tortellini")} alt="Salmon and Vegetables" className="menu-image" />
            <div className="menu-item-dets">
              <p className="menu-item-heading">Salmon and Vegetables</p>
              <p className="g-price">$8.99</p>
            </div>
            <button
              className="add-button"
              onClick={() => handleAddToCart("Tortellini", 8.99)}
            >
              Add to Cart
            </button>
          </li>
          <li className="menu-item">
            <img src={getImgLink("Chicken Salad")} alt="Salmon and Vegetables" className="menu-image" />
            <div className="menu-item-dets">
              <p className="menu-item-heading">Salmon and Vegetables</p>
              <p className="g-price">$8.99</p>
            </div>
            <button
              className="add-button"
              onClick={() => handleAddToCart("Chicken Salad", 8.99)}
            >
              Add to Cart
            </button>
          </li>
          {/* Add more menu items similarly */}
        </ul>
      </div>
      <div className="screen-cart">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imgLink} alt={item.title} className="menu-image" />
              <div className="menu-item-dets">
                <p className="menu-item-heading">{item.title}</p>
                <p className="g-price">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-math">
          <p className="cart-math-item">
            <span className="cart-math-header">Subtotal:</span>
            <span className="g-price">${subtotal.toFixed(2)}</span>
          </p>
          <p className="cart-math-item">
            <span className="cart-math-header">Tax:</span>
            <span className="g-price">${calculateTax(subtotal)}</span>
          </p>
          <p className="cart-math-item">
            <span className="cart-math-header">Total:</span>
            <span className="g-price">${calculateTotal(subtotal)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Addtocart;
