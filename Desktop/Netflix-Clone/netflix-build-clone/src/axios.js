import axios from 'axios'
//promise based libararyy making request to server 

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default instance;