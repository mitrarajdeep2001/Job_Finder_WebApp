import React, { forwardRef } from "react";

const TextInput = forwardRef(
  ({ type, placeholder, styles, label, register, name, error }, ref) => {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-white mt-2 ">{label}</p>
        <input type={type} name={name} placeholder={placeholder} className={styles} ref={ref}/>
      </div>
    );
  }
);

export default TextInput;
