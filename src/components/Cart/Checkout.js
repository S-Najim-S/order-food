import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("|Helkfjafd");
  };
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email"></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="Address">Your Address</label>
        <input type="text" id="Address"></input>
      </div>

      <div className={classes.control}>
        <label htmlFor="postalcode"> Postal Code</label>
        <input type="text" id="postalcode"></input>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.button} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
