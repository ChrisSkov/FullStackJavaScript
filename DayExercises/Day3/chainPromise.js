const fetch = require("node-fetch");


const getPlanetforFirstSpeciesInFirstMovieForPerson = id =>
{
    fetch("https://swapi.co/api/people/" + id)
        .then(res => res.json())
        .then(data =>
        {
            console.log("Name: ", data.name);
            fetch(data.films[0])
                .then(res => res.json())
                .then(firstFilm =>
                {
                    console.log("First film: ", firstFilm.title);
                    fetch(firstFilm.species[0])
                        .then(res => res.json())
                        .then(species =>
                        {
                            console.log("First species: ", species.name);
                            fetch(species.homeworld)
                                .then(res => res.json())
                                .then(homeworld => console.log("Homeworld for specie: ", homeworld.name)
                                )
                                .catch(err => console.log("Error: ", err))
                                .finally(() => console.log("Done 4"));
                        })
                        .catch(err => console.log("Error: ", err))
                        .finally(() => console.log("Done 4"));
                })
                .catch(err => console.log("Error: ", err))
                .finally(() => console.log("Done 4"));
        })
        .catch(err => console.log("Error: ", err))
        .finally(() => console.log("Done 4"));
};