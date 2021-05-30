import "./ForgotPage.css";
import { useState } from "react";

function ForgotPage() {
  return (
    <form>
      <h3>Why you forgot Password??</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ur user name (email)"
        />
      </div>

      <div className="form-group">
        <label>New Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter new Password"
        />
      </div>

      <div className="form-group">
        <label>Confirm password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Re-type the password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
}

export default ForgotPage;
