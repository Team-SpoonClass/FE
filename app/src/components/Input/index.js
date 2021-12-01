import "./index.css";

export function AuthInput({ type, inputHook, placeHolder }) {
  const { value, onChange } = inputHook;
  return (
    <div className="authInput">
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function ClassInput({ type, inputHook }) {
  const { value, onChange } = inputHook;
  return (
    <div className="classInput">
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export function ClassTextarea({ inputHook }) {
  const { value, onChange } = inputHook;
  return (
    <div className="classTextarea">
      <textarea value={value} onChange={onChange} />
    </div>
  );
}
