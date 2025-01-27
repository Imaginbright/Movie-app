const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./icons/search.svg" alt="search icon" />

        <input
          type="text"
          className="ml-[.75rem] max-sm:ml-[.2rem]"
          placeholder="Search through thousand of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
