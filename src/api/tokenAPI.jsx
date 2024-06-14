import axios from "axios";


export const makeTokes = async (mid, mpw) => {

    const response = await axios.post('http://localhost:8080/api/v1/token/make', {mid,mpw})

    return response.data

}