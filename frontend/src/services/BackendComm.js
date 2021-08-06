import axios from 'axios'

// create-react-app and multi-stage Docker builds don't behave during
// development, so this has to be adjusted manually
//	DEVELOPMENT
const baseURL = "http://localhost:5000/api"
//	PRODUCTION
//const baseURL = "/api"

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const exportedObject = {
    getAll,
}

export default exportedObject;
