import axios from "axios";
import Cookies from "js-cookie";

 const SetCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

// Method to get data from cookies
 const GetCookie = (cookieName: string) => {
  return Cookies.get(cookieName);
};

// // Method to remove data from cookies
//  const RemoveCookie = (cookieName: string) => {
//   Cookies.remove(cookieName);
// };

export const CSRFToken = async () => {
  let token = GetCookie("X-XSRF-TOKEN");
 let response;
  if (token === undefined) {
    //   response = await fetch( "https://fooddelivery-production.up.railway.app/api/csrf", {
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type" : "application/json",
    //     },
    //     credentials: "same-origin",
    //   })
      response = await axios({
        method: 'get',
        url:  "https://fooddelivery-production.up.railway.app/api/csrf",
        withCredentials: false,
      });
      console.log("response cookie", response.headers.getSetCookie());

   
    
    if (token !== undefined) {
    //   SetCookie("X-XSRF-TOKEN", token);
      console.log("firswwwwwwwt", JSON.parse(token))
    }
  }
  return token;
};
