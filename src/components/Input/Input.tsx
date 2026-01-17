import type { ChangeEvent } from "react";
import "./Input.css";

type inputProps = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
  type = "text",
  name,
  value,
  onChange,
}: inputProps) => {
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
};

export default Input;
