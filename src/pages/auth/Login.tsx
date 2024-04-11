import './Login.scss'
export default function Login() {
  return (
    <div className="auth__background">
      <div className="auth__form">
          <h2>Adminstrator</h2>
          <form action="">
            <label htmlFor="">Account </label>
            <input type="text" /><br />
            <label htmlFor="">Password </label>
            <input type="text" /><br />
            <button>Log in</button>
          </form>
      </div>
    </div>
  )
}
