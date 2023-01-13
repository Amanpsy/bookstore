import axios from 'axios'




const headerConfig = {
    headers: {Authorization:localStorage.getItem('token')}

}

export const getBookList  =() => {
     
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig)
    return response
}