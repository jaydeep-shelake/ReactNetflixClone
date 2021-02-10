export const AIP_KEY = `0bfe400ced3e852e4fa60a1ece2d4e40`;

const request ={
    fetchTrending:`/trending/all/week?api_key=${AIP_KEY}&language=en-US`,
    fetchNetflixOriginlas:`/discover/tv?api_key=${AIP_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${AIP_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${AIP_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${AIP_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${AIP_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${AIP_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${AIP_KEY}&with_genres=99`,

}
export default request;