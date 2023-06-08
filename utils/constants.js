const HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT"
}

const MERCHANT_TYPE = {
    RETAIL: {
        value: 0,
        label: "Retails"
    },
    FOOD_BEVERAGE: {
        value: 1,
        label: "Food & Beverage"
    }
}

const LANGUAGES = [
    { label: "English", code: "en", flag: "images/en_flag.svg" },
    { label: "Vietnam", code: "vi", flag: "/images/vi_flag.svg" },
];

export {
    HTTP_METHOD,
    MERCHANT_TYPE,
    LANGUAGES
}