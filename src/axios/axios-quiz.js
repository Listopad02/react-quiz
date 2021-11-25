import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-9c4e1-default-rtdb.firebaseio.com'
})