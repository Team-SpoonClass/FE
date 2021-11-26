import "./index.css";

export function AuthInput({ type, inputHook, placeHolder }) {
  return (
    <div className="authInput">
      <input type={type} placeholder={placeHolder} {...inputHook} />
    </div>
  );
}
