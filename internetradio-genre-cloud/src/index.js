import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Panel = () => (
  <div className="container">
    <h1 style={{ marginTop: "10px" }}>Music from 33,726 radio stations</h1>
    <p className="lead">
      Tune in to thousands of internet radio stations live right now!
    </p>
    <div className="panel panel-default">
      <div className="panel-heading">
        <i className="glyphicon glyphicon-fire"> </i> Popular Genres
      </div>
      <div className="panel-body">
        <Buttons genres={sortedGenres} />
      </div>
    </div>
  </div>
);

const size = popularity => {
  let bootstrapSize = "";
  switch (popularity) {
    case 4:
      bootstrapSize = "lg";
      break;
    case 3:
      bootstrapSize = "md";
      break;
    case 2:
      bootstrapSize = "sm";
      break;
    case 1:
      bootstrapSize = "xs";
      break;
    default:
      bootstrapSize = "md";
  }
  return bootstrapSize;
};

const Buttons = ({ genres }) => (
  <div>
    {genres.map(genre => (
      <Button
        key={genre.genre}
        genre={genre.genre}
        popularity={genre.popularity}
      />
    ))}
  </div>
);

const Button = ({ genre, popularity }) => {
  return (
    <button
      style={{ margin: "4px" }}
      className={`btn btn-default text-capitalize btn-${size(popularity)}`}
    >
      {genre}
    </button>
  );
};

const genres = [
  { genre: "rock", popularity: 4 },
  { genre: "folk", popularity: 2 },
  { genre: "pop", popularity: 4 },
  { genre: "lounge", popularity: 2 },
  { genre: "polka", popularity: 1 },
  { genre: "piano", popularity: 3 },
  { genre: "guitar", popularity: 3 },
  { genre: "salsa", popularity: 3 },
  { genre: "movies", popularity: 4 },
  { genre: "metal", popularity: 4 },
  { genre: "techno", popularity: 1 },
  { genre: "blues", popularity: 2 },
  { genre: "disco-polo", popularity: 1 },
  { genre: "goth", popularity: 1 },
  { genre: "jazz", popularity: 2 },
  { genre: "classic", popularity: 3 },
  { genre: "hip-hop", popularity: 4 },
  { genre: "chillout", popularity: 2 },
  { genre: "oldies", popularity: 4 },
  { genre: "soul", popularity: 2 },
  { genre: "romantic", popularity: 1 },
  { genre: "trance", popularity: 3 },
  { genre: "hardcore", popularity: 3 },
  { genre: "reggae", popularity: 3 },
  { genre: "funk", popularity: 4 },
  { genre: "90s", popularity: 4 },
  { genre: "dubstep", popularity: 1 },
  { genre: "numetal", popularity: 2 },
  { genre: "ambient", popularity: 1 },
  { genre: "house", popularity: 1 },
  { genre: "progressive", popularity: 2 },
  { genre: "meditation", popularity: 3 },
  { genre: "country", popularity: 4 }
];

const sortedGenres = [...genres];
sortedGenres.sort((a, b)=> b.popularity - a.popularity);

ReactDOM.render(<Panel />, document.getElementById("root"));
