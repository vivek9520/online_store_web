import axios from "axios";



export function isAuthenticated( userData) {
    return function(dispatch) {

        let url =  'http://localhost:5000/api/auth'

    }

}




export async function doLogin(email6, password6) {




    if(email6!=="" && password6!=='') {


        let url =  'http://localhost:5000/api/auth';

        let obj={
            email6:email6,
            password6:password6
        }


        axios.post(url, obj)
            .then((response) => {
                // localStorage.removeItem( "token" )

                localStorage.setItem( "token", response.data.token );

                if(isAuthenticated = true){



                    alert("ur logged in")















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







