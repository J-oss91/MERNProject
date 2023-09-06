import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';

// Define backendServerUrl based on the environment variable
const backendServerUrl = process.env.REACT_APP_BACKEND_URL;

export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

// Check user auth 
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

// Get server data
export async function getServerData(callback) {
    try {
        const response = await axios.get(`${backendServerUrl}/api/questions`);
        const data = response.data;
        if (callback && typeof callback === 'function') {return callback(data);} else {return data;}
       
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Post server data
export async function postServerData(result, callback) {
    try {
        const response = await axios.post(`${backendServerUrl}/api/result`, result);
        const data = response.data;
        if (callback && typeof callback === 'function') {return callback(data);} else {return data;}
        // return callback ? callback(data) : data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}
