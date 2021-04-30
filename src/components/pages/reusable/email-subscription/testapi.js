
   
//    export default post = (email) => {
   
//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0");
//         myHeaders.append("Timestamp", "1619765391");
//         myHeaders.append("Content-Type", "application/json");
        
//         var raw = JSON.stringify({
//           "data": {
//             "email": email
//           }
//         });
        
//         var requestOptions = {
//           method: 'POST',
//           headers: myHeaders,
//           body: raw,
//           redirect: 'follow'
//         };
        
//         fetch("https://api.sproutsend.com/contacts?", requestOptions)
//           .then(response => response.json())
//           .then(result => console.log(result))
//           .catch(error => console.log('error', error));

//     }


// // curl -X POST https://{api url}/oauth/token \
// //      -d "client_id={client_id}" \
// //      -d "client_secret={client_secret}" \
// //      -d "grant_type=authorization_code" \
// //      -d "code={code}" \ 
// //      -d "redirect_uri={redirect_uri}"

