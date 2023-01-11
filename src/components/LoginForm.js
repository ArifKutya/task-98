import "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div>
      <form className="form">
        <label className="label">Username</label>
        <input className="input" type="text" placeholder="username" />
        <label className="label">Password</label>
        <input className="input" type="password" placeholder="password" />
        <button className="submit" type="submit">Submit</button>
      </form>

    </div>
  );
}
