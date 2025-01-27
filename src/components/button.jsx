const button = ({ className, href, children, px }) => {
  const classes = `relative inline-flex items-center justify-center h-[3rem] bg-white text-black font-medium ${
    px || "px-7"
  } ${className || ""} hover:h-[3.5rem] hover:px-7 transition-all duration-300`;
  const spanClass = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClass}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href}>
      <button className={classes}>
        <span className={spanClass}>{children}</span>
      </button>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default button;
