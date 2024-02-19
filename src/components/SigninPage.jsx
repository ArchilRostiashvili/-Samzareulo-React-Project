import { Link } from "react-router-dom";

export default function SigninPage() {
  return (
    <div className="signup-page">
      <form className="signup-container">
        <h1>Sign-In</h1>
        <hr />
        <label>Email</label>
        <input type="text" />
        <hr />
        <label>Password</label>
        <input type="text" />
        <hr />
        <button>Create Account</button>
        <div className="already-have-an-account">
          <h3>Don't have an account yet?</h3>
          <Link to="/signup">
            <h3>SignUp</h3>
          </Link>
        </div>
      </form>
    </div>
  );
}
