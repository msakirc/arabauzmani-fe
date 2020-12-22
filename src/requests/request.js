const axios = require('axios');

export const API_URL = 'https://arabauzmani.ue.r.appspot.com'

export default async function get(url, params) {
    console.log(url, params);
    
    // Make a request for a user with a given ID
    return axios.get(
        API_URL + url, { params: params })
        .then(function (response) {
            return response.data.data
        })
        .catch(function (error) {
            // handle error
            console.log("error", error);
        })
    // .then(function () {
    //     // always executed
    // });

}