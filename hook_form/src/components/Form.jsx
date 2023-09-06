import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");


  const createUser = (e) => {

    e.preventDefault();
    
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setErrorFirstName("First Name must be at least 2 characters");
    } else {
      setErrorFirstName("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setErrorLastName("Last Name must be at least 2 characters");
    } else {
      setErrorLastName("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setErrorEmail("Email must be at least 5 characters");
    } else {
      setErrorEmail("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setErrorPassword("Password must be at least 8 characters");
    } else {
      setErrorPassword("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setErrorConfirmPassword("Passwords must match");
    } else {
      setErrorConfirmPassword("");
    }
  };


  return (
    <>
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' onChange={handleFirstName} />
        {errorFirstName ? <p>{errorFirstName}</p> : null}
        <br />
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' onChange={handleLastName} />
        {errorLastName ? <p>{errorLastName}</p> : null}
        <br />
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' onChange={handleEmail} />
        {errorEmail ? <p>{errorEmail}</p> : null}
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' onChange={handlePassword} />
        {errorPassword ? <p>{errorPassword}</p> : null}
        <br />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' name='confirmPassword' onChange={handleConfirmPassword} />
        {errorConfirmPassword ? <p>{errorConfirmPassword}</p> : null}
        <br />
        <h3>Your Form Data</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        <input type='submit' value='Create User' onClick={createUser} />
    </form>
    </>
  );
};

export default Form;
