import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [formInputValidation, setFormInputValidation] = useState({
    name: true,
    email: true,
    address: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const adressInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredadress = adressInputRef.current.value;
    const enteredpostalCode = postalCodeInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const emailIsValid = validateEmail(enteredemail);
    const addressIsValid = !isEmpty(enteredadress);
    const postalCodeIsValid = isFiveChars(enteredpostalCode);

    setFormInputValidation({
      name: nameIsValid,
      email: emailIsValid,
      address: addressIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && emailIsValid && addressIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit form
    props.onConfirm({
      name: enteredName,
      emali: enteredemail,
      address: enteredadress,
      postalCode: enteredpostalCode,
    });
  };
  return (
    <form className={classes.form}>
      <div
        className={`${classes.control} ${
          formInputValidation.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputValidation.name && <p>Please enter a valid name...</p>}
      </div>

      <div
        className={`${classes.control} ${
          formInputValidation.email ? "" : classes.invalid
        }`}
      >
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" ref={emailInputRef}></input>
        {!formInputValidation.email && <p>Please enter a valid email...</p>}
      </div>

      <div
        className={`${classes.control} ${
          formInputValidation.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="Address">Your Address</label>
        <input type="text" id="Address" ref={adressInputRef}></input>
        {!formInputValidation.address && <p>Please enter a valid address...</p>}
      </div>

      <div
        className={`${classes.control} ${
          formInputValidation.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postalcode"> Postal Code</label>
        <input type="text" id="postalcode" ref={postalCodeInputRef}></input>
        {!formInputValidation.postalCode && (
          <p>Please enter a valid postalCode...</p>
        )}
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
