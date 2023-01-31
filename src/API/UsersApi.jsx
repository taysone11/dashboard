import axios from "axios"

    

export default class UsersApi {

    static async getUsers() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response
    }
    static async getIdUser(id) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
        return response
    }
    static async getUserReviews(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/comments?_limit=10&_page=${id}`)
        return response
    }
 
        
    
    

    }

