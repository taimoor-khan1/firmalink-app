import axios from 'axios';
import { CONSTANTS } from '../../constants';

const Login = async (data) => {
    
    const onSuccess = ({ data }) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post(CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.LOGIN, data)
        .then(onSuccess)
        .catch(onFailure);
};

const SignUp = async (data) => {

    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    return await axios
        .post(CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.SIGNUP, data)
        .then(onSuccess)
        .catch(onFailure);
};

const Forgot = async (data) => {

    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    return await axios
        .post(CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.FORGOTPASSWORD, data)
        .then(onSuccess)
        .catch(onFailure);
};

const ReCode = async (data) => {
    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    return await axios
        .post(CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.ResendCode, data)
        .then(onSuccess)
        .catch(onFailure);
};

const ResetPass = async (data) => {
    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    return await axios
        .post(CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.NewPass, data)
        .then(onSuccess)
        .catch(onFailure);
};

const authService = {
    Login,
    SignUp,
    Forgot,
    ReCode,
    ResetPass,
};

export default authService;