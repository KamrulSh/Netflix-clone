const API_KEY = 'd607f71a38979db174f4fa740dfcc432';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
}

export default requests;