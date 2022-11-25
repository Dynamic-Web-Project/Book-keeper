import React from "react";
import Loader from "../components/Loader";
export function SignupScreen(props) {
  return (
    <>
      <h1 className='fs-4'>Sign Up</h1>
      <span style={{ color: "red" }}>{props.errorMessage}</span>
      {props.loading && <Loader />}
      <form onSubmit={props.handleSubmit}>
        <p><label>Email</label></p>
        <p><input
          value={props.email}
          onChange={(event) => props.setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
        /></p>

        <p><label>Password</label></p>
        <p><input
          value={props.password}
          onChange={(event) => props.setPassword(event.target.value)}
          type="password"
          placeholder="Password"
        /></p>

        <p><label>Confirm Password</label></p>
        <p><input
          value={props.confirmPassword}
          onChange={(event) => props.setConfirmPassword(event.target.value)}
          type="Confirm password"
          placeholder="Confirm Password"
        /></p>

        <button class="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}