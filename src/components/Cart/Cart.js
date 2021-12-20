import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.199 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onCancel}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23.33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.button} onClick={props.onOrder}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
