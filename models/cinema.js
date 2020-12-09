const Film = require("./film.js");

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function (){
    const filmTitles = this.films.map((film) => {
      return film.title;
    });
    return filmTitles;
};

Cinema.prototype.getFilmByTitle = function (films, title) {
    // const titleList = this.getTitles();
    const filmByTitle = this.films.find((element => element === title));
    return filmByTitle;
};

Cinema.prototype.getFilmByGenre = function (films, genre) {
  const filmByGenre = this.films.filter(film => film.genre === genre);
  return filmByGenre;
}

module.exports = Cinema;
