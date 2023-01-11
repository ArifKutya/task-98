import "./LoginForm.css"
export default function LoginForm() {
return (
  <div className="form">
    <form>
      <label className="label">
        <input className="input" type="text" placeholder="username"/>
        <input className="input" type="password" placeholder="password"/>
        <button className="submit" type="submit">Submit</button>
      </label>
    </form>

  </div>
)
}
