import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="relative">
      <img
        src="./images/radial.svg"
        className="absolute max-sm:mt-[-.1rem] mt-[-2.5rem] w-full"
        alt="glow"
      />
      <Navbar />

      <div className="wrapper">
        <header>
          <img className="mb-3.5" src="./images/hero.png" alt="movies" />
          <h1>
            Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy
            Without The Hassles
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
