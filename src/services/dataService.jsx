import axios from 'axios'



const headerConfig = {
    headers:{ "x-access-token": localStorage.getItem("token")}
}


export const getBookList  =() => {
     
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig,)
    return response
}
export const addTocart =(cartobj) => {
     
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${cartobj} `,cartobj,headerConfig)
    return response
}

export const addToWishlist  =(data) => {
     
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data}`, data,headerConfig)
    return response
}

export const cartApi  =(data) => {
     
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${data}`, data,headerConfig)
    return response
}





export const addAddress = (addressObj) => {

    let response = axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user',addressObj,headerConfig)
    console.log(response)
    return response
}