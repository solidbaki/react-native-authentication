import axios from 'axios';
import API_KEY from '../ApiKey';

export const createUser = async (email, password) => {
    console.log("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" + API_KEY);
    const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    console.log(response);
}