import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signup } from "../../auth/validToken";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(username, password, walletAddress);

      setUsername("");
      setPassword("");
      setWalletAddress("");
      toast.success("Successfully signed up!", { autoClose: 1500 });
      navigate("/signin");
    } catch (error) {
      toast.error("An error occurred", { autoClose: 1500 });
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <label>
       
          <input
            type="text"
            placeholder="create username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
       
          <input
            type="password"
            placeholder="create password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
       
          <input
            type="text"
            placeholder="Enter your MetaMask wallet address"
            value={walletAddress}
            onChange={(event) => setWalletAddress(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <span className="goTo">
        Already have an account? Click{" "}
        <Link className="link" to="/login">
          here
        </Link>{" "}
        to sign in instead.
      </span>
      <ToastContainer />
    </div>
  );
}
