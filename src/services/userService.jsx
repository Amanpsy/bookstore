import axios from 'axios'

export const loginApi = (loginObj) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login',loginObj)
    return response
}


export const signupApi = (signUp) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',signUp)
    console.log("registered sucessfully")
    return response
}
