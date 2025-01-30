import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useEffect, useState } from "react";

const App = () => {
  const API_BASE_URL = "https://api.themoviedb.org/3";

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, []);

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
