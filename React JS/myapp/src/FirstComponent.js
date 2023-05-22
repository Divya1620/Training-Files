import React from "react";
import './FirstComponent.css';

const FirstComponent = () => {
    return (
        <form>
            <h2>Sign-Up Form</h2>
            <label>Enter Your Name:</label> <br/>
            <input type="text" required></input> <br/>
            <label>Enter Your Age:</label> <br/>
            <input type="text" required></input> <br/>
            <label>Enter Your Email ID:</label> <br/>
            <input type="email" required></input> <br/>
            <label>Enter Your Password:</label> <br/>
            <input type="password" required></input> <br/>
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}
export default FirstComponent;     