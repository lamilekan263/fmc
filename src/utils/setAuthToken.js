import Axios from 'axios'


const setAuthToken = (token) => {
    if (token) {
        // apply to every request
        Axios.defaults.headers.common['Authorization'] = token
    } else {
        // delete authorization
        delete Axios.defaults.headers.common["Authorization"];
    }
}

export default setAuthToken