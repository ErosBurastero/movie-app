import axios from './instance'

export default () => {
    return {
        getMovies: async(movie, pageNumber, year) => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.OMBD_API}&page=${pageNumber}&y=${year}`);
                return response.data;
            } catch (error) {
                console.log(error)
            }
        },
    }
}