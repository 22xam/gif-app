function Login() {
  return (
    <>
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered  is-primary">
              <div className="column is-6">
                <form className="box">
                  <div className="field">
                    <label className="label">Email</label>
                    <input
                      className="is-danger"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button is-success">login</button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
