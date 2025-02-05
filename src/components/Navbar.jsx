import Button from "../components/button";

const Navbar = () => {
  return (
    <nav className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex justify-between relative z-10 items-center">
      <a href="#">
        <img src="./icons/logo.svg" alt="logo" width={50} />
      </a>
      <Button
        href="https://www.imaginbright.com/"
        className="rounded-full border border-black"
      >
        Portfolio
      </Button>
    </nav>
  );
};

export default Navbar;
