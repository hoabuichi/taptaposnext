import { LANGUAGES } from "./constants";

// eslint-disable-next-line
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const checkValidPhoneNumber = (phone) => {
    return phoneRegex.test(phone)
}

export const getCurrentLanguage = () => {
    // return localStorage.getItem("lang") || LANGUAGES[0].code
    return LANGUAGES[0].code
}