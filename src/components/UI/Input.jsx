import "./Input.css";

export default function Input(props) {
  return (
    <div className="input-container">
      <input
        key={props.Key}
        placeholder={props.placeholder}
        className="input-field"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor="input-field" className="input-label">
        {props.label}
      </label>
      <span className={`input-highlight`}></span>
    </div>
  );
}
