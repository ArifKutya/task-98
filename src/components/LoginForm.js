import "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div><label className="label">
      <form className="form">
        <input className="input" type="text" placeholder="username" />
        <input className="input" type="password" placeholder="password" />
        <button className="submit" type="submit">Submit</button>
      </form>
    </label>
    </div>
  );
}
