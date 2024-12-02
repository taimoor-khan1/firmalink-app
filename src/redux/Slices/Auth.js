import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CONSTANTS, SCREENS } from '../../constants';
import utils from '../../Utils/Utils';
import authService from '../Services/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserType } from './UserType';

const initialState = {
    accessToken: null,
    user: null,
    store: null
};
const setStore = async ( data ) => {
    try {
        const serializedData = JSON.stringify( data );
        await AsyncStorage.setItem( "store", serializedData );
        console.log( "Data successfully stored" );
    } catch ( error ) {
        console.error( "Error storing data:", error.message );
        // Handle the error appropriately
    }
};
export const LoginAPI = createAsyncThunk(
    CONSTANTS.API_URLS.LOGIN,
    async ( { email, password, userType }, thunk ) => {
        try {
            const data = {
                email: email,
                password: password,
                login_by: "email",
                user_type: userType
            };
            const response = await authService.Login( data );

            if ( response?.message == 'User login successfully' ) {
                thunk.dispatch( saveAccessToken( response.users.original?.access_token ) );
                thunk.dispatch( userData( response?.user ) );
                thunk.dispatch( setUserType( response?.user?.user_type ) )
                utils.successAlert( response?.message );
                console.log( "response?.user?.?.access_token", response.user )
            } else {
                utils.errorAlert( response?.message )
            };
            return thunk.fulfillWithValue( response );
        } catch ( error ) {
            let err = utils.showResponseError( error );
            console.log( "login error", error );
            console.log( "login error", error.response.data.message );
            utils.errorAlert( "The selected email is invalid" );
            return thunk.rejectWithValue( err );
        };
    },
);

export const Registration = createAsyncThunk(
    CONSTANTS.API_URLS.SIGNUP,
    async ( data, thunk ) => {
        try {
            const response = await authService.SignUp( data );
            console.log( response, "response" )
            if ( response.status == 200 ) {
                thunk.dispatch( saveAccessToken( response.users.original?.access_token ) );
                thunk.dispatch( userData( response?.user ) );
                thunk.dispatch( setUserType( response?.user?.user?.type ) )
                utils.successAlert( response?.message );
                console.log( "response?.user?.?.access_token", response.user )
                utils.successAlert( response?.message )
            } else {
                utils.errorAlert( response?.message[0] );
            };
        } catch ( error ) {
            let err = utils.showResponseError( error );
            utils.errorAlert( error.response.data?.message[0] )
            console.log( "err", error.response.data?.message )
            return error;
        };
    },
);

export const ForgetPasswordThunk = createAsyncThunk(
    CONSTANTS.API_URLS.FORGOTPASSWORD,
    async ( { email, navigation }, thunk ) => {
        try {
            const response = await authService.Forgot( email );
            if ( response.result ) {
                navigation.navigate( SCREENS.Otp, { email: email } );
            };
            return thunk.fulfillWithValue( response );
        } catch ( error ) {
            console.log( 'ForgetPasswordThunk err', error );
            let err = utils.showResponseError( error );
            return thunk.rejectWithValue( err );
        };
    },
);

export const ResendCodeThunk = createAsyncThunk(
    CONSTANTS.API_URLS.ResendCode,
    async ( { data, navigation }, thunk ) => {
        try {
            const response = await authService.ReCode( data );
            if ( response.result ) {
                utils.successAlert( response?.message );
                navigation.navigate( SCREENS.login );
            } else {
                utils.errorAlert( response?.message )
            };
            return thunk.fulfillWithValue( response );
        } catch ( error ) {
            let err = utils.showResponseError( error );
            console.log( "error====>", error.response.data?.message )
            utils.errorAlert( error.response.data?.message )
            return thunk.rejectWithValue( err );
        };
    },
);

export const NewPassword = createAsyncThunk(
    CONSTANTS.API_URLS.NewPass,
    async ( data, thunk ) => {
        try {
            const response = await authService.ResetPass( data );
            if ( response.result ) {
                utils.successAlert( response?.message )
            } else {
                utils.errorAlert( response?.message )
            };
            return thunk.fulfillWithValue( response );
        } catch ( error ) {
            let err = utils.showResponseError( error );
            console.log( "error====>", error.response.data?.message )
            utils.errorAlert( error.response.data?.message )
            return thunk.rejectWithValue( err );
        };
    },
);

const AuthSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        saveAccessToken: ( state, action ) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: ( state, action ) => {
            state.accessToken = null;
        },
        userData: ( state, action ) => {
            state.user = action.payload
        },
        userStore: () => {
            state.store = action.payload
        }
    },

} );

export const { saveAccessToken, userData, removeAccessToken, userStore } = AuthSlice.actions;

export default AuthSlice.reducer;