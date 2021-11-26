import "./index.css";

export function AuthInput({ type, inputHook, placeHolder }) {
  return (
    <div className="authInput">
      <input type={type} placeholder={placeHolder} {...inputHook} />
    </div>
  );
}

export function ClassInput({ type, inputHook }) {
  return (
    <div className="classInput">
      <input type={type} {...inputHook} />
    </div>
  );
}

export function ClassTextarea({ inputHook }) {
  return (
    <div className="classTextarea">
      <textarea {...inputHook} />
    </div>
  );
}
