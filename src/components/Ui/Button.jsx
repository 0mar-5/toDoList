import React from "react";
function Button({ children, type }) {
  return (
    <button
      className={`btn ${type === "primery" ? "btn-primery" : "btn-secondry"}`}
    >
      {children}
    </button>
  );
}

export default Button;
