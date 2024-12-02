import axios from "axios";

export const sendNotification = async ( id, title, desc, accessToken ) => {
    let data = {
        userId: id,
        title: title,
        desc: desc,
        image: "https://wasim-app.com/assets/logo-69226fa3.svg"
    }
    try {
        const res = await axios.post( "https://dashboard.wasim-app.com/api/v2/" + "fcm/sendnotification", data,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            } );
        console.log( res, "res in notifciation" )
    } catch ( error ) {
        console.log( error, "error hy koi" )
    }
}