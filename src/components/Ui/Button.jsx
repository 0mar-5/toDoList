function Button({
  children,
  styleType,
  onDelete,
  onEdite,
  id,
  type,
  value,
  disabled,
}) {
  return (
    <button
      id={id}
      value={value}
      disabled={disabled}
      onClick={type === "deleting" ? onDelete : onEdite}
      className={`btn ${
        styleType === "primery" ? "btn-primery" : "btn-secondry"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
