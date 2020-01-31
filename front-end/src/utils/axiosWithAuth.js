import axios from 'axios';

// module that creates a new instance of the axios object
// baseURL
// headers object -> authorization header with the token

    const axiosWithAuth = () => {

    const token = localStorage.getItem('token');
    
    return axios.create({


        baseURL: 'https://localhost:5000/',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;