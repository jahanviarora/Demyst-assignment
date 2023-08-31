const API_KEY ='f81980ff410e46f422d64ddf3a56dddd';

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNEtflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovie :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests;