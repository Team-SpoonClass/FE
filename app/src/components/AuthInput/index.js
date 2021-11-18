import "./index.css";

function AuthInput({ type, inputHook, placeHolder }) {
  return (
    <div className="authInput">
      <input type={type} placeholder={placeHolder} {...inputHook} />
    </div>
  );
}

export default AuthInput;
