import "./SignupPage.css";

function SignupPage() {
  return (
    <form>
      <h3>Sign up to Mahjong Kias!</h3>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ur fking name"
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ur fking name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="This will be your user name"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="choose password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
}

export default SignupPage;
