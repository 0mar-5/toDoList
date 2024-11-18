import React from "react";
function Button({ children, type, onClick, id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${type === "primery" ? "btn-primery" : "btn-secondry"}`}
    >
      {children}
    </button>
  );
}

export default Button;
