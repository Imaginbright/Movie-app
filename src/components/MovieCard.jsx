const MovieCard = ({ movie }) => {
  return (
    <div>
      <p className="text-white">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
