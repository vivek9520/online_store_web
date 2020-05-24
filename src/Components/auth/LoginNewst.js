import axios from "axios";
import admin from "./AdminPage"


export function isAuthenticated( stockData) {
    return function(dispatch) {

        let url =  'http://localhost:5000/api/authst'

    }

}




export async function doLogin(emailst6, passwordst6) {

    if(emailst6!=="" && passwordst6!=='') {


        let url =  'http://localhost:5000/api/authst';

        let obj={
            emailst6:emailst6,
            passwordst6:passwordst6
        }


        axios.post(url, obj)
            .then((response) => {
                // localStorage.removeItem( "token" )

                localStorage.setItem( "token", response.data.token );

                if(isAuthenticated = true){
                    alert("You are logged in")

                }

            })
            .catch((err) => {
                alert("please login again")
            })

    }
    else{
        alert(" provide the correct username and password")
    }
    return {
        type: "LOGIN_EMPTY",
        payload: {
            message : "Empty username or password.",
        }
    }



}







