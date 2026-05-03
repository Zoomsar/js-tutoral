const movies = {
    details: {
        title: "The Matrix",
        director: "The Wachowskis",
        releaseYear: 1999,
    }
}

// Accessing nested properties
console.log(movies.details.title);

// Adding a new nested property
movies.details.genre = "Science Fiction";
console.log(movies.details.genre);

// Modifying an existing nested property
movies.details.releaseYear = 2000;
console.log(movies.details.releaseYear);
console.log();

for (const property in movies.details) {
    console.log(movies.details[property]);
}