const productsPerPageOptions = [
    { value: 12, label: 12 },
    { value: 24, label: 24 },
    { value: 36, label: 36 },
];

const checkboxFilters = [ 'active', 'promo' ];

const maximumRating = 5;

const url = "https://join-tsh-api-staging.herokuapp.com";

export default {
    productsPerPageOptions,
    checkboxFilters,
    maximumRating,
    url,
}