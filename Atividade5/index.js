const axios = require('axios');

const _fetch = (url) => {
    return axios(url);
};

const validateDomain = async (url) => {
    try {
        await _fetch('https://' + url);
        console.log("Dominio Existente");
    } catch (er) {
        console.log("Dominio inválido ou nao existe");
    }
}

validateDomain("gmail.com");