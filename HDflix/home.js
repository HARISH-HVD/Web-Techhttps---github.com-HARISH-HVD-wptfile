// const api = "f614a1776b314790f4148ca63b8badb5";

// const base_url = "https://api.themoviedb.org/3";

// const banner_url = "https://image.tmdb.org/t/p/original";
// const img_url = "https://image.tmdb.org/t/p/w300";

// //for requesting  movie data
// const requests = {
//     fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
//     fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
//     fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
//     fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
//     fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
//     fetchRomanticMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
//     fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
// };
// //used to truncate the string
// function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
// }
// //banner
// fetch(requests.fetchNetflixOriginals)
//     .then((res) => res.json())

//     .then((data) => {

//         const setMovie =
//             data.results[Math.floor(Math.random() * data.results.length - 1)];

//         var banner = document.getElementById("banner")
//         var banner_title = document.getElementById("banner_title");
//         var banner_desc = document.getElementById("banner_description");

//         banner.style.backgroundImage =
//             "url(" + banner_url + setMovie.backdrop_path + ")";
//         banner_desc.innerText = truncate(setMovie.overview, 150);
//         banner_title.innerText = setMovie.name;

//     });

const apiKey = "f614a1776b314790f4148ca63b8badb5";

const baseUrl = "https://api.themoviedb.org/3";

const bannerUrl = "https://image.tmdb.org/t/p/original";

const imgUrl = "https://image.tmdb.org/t/p/w300";

// Endpoints for requesting movie data
const requests = {
    fetchTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchActionMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanticMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`,
};

// Utility function to truncate long text
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Function to fetch and set the banner content
function loadBanner() {
    fetch(requests.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((data) => {
            if (!data.results || data.results.length === 0) {
                console.error("No Netflix Originals found.");
                return;
            }

            // Select a random Netflix Original
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const selectedMovie = data.results[randomIndex];

            // Get elements
            const banner = document.getElementById("banner");
            const bannerTitle = document.getElementById("banner_title");
            const bannerDescription = document.getElementById("banner_description");

            // Set banner content
            banner.style.backgroundImage = `url(${bannerUrl}${selectedMovie.backdrop_path})`;
            bannerTitle.innerText = selectedMovie.name || selectedMovie.title || "Title not available";
            bannerDescription.innerText = truncate(selectedMovie.overview, 150);
        })
        .catch((error) => {
            console.error("Error fetching Netflix Originals:", error);
        });
}

// Load the banner when the page loads
document.addEventListener("DOMContentLoaded", loadBanner);


function getstarted(event) {
    event.preventDefault()
    const email = document.getElementById("email").value


    console.log(email)

    event.target.submit()

}

// Database
function openNewPage(url) {
    window.open(url, '_blank');  // Opens the URL in a new tab
  }
  
  
//movies row
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "HDFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = imgUrl + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Trending    
fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "TOP RATED";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//Action    
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "ACTION MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//comedy    
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "COMEDY MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//HORROR    
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "HORROR MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

ROMANTIC    
fetch(requests.fetchRomanticMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "ROMANTIC MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//documentaries    
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        //    row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "DOCUMENTARIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });


    
      




