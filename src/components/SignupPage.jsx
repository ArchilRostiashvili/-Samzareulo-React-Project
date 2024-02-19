import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="signup-page">
      <form className="signup-container">
        <h1>Sign-Up</h1>
        <hr />
        <label>Name</label>
        <input type="text" />
        <hr />
        <label>Email</label>
        <input type="text" />
        <hr />
        <label>Password</label>
        <input type="text" />
        <hr />
        <label>Please Repeat Your Password</label>
        <input type="text" />
        <hr />
        <button>Create Account</button>
        <div className="already-have-an-account">
          <h3>Already have an account?</h3>
          <Link to="/signin">
            <h3>SignIn</h3>
          </Link>
        </div>
      </form>
    </div>
  );
}
