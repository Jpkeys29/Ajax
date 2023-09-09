// import('node-fetch').then((module) =>{
//     const fetch = module.default;

// const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9'
// const url = 'https://api.spotify.com/v1/artists/3GQboECxDT1xqPPWC30p7v?'
// async function getArtist(){
//     const response = await fetch(url, {
//         headers: {
//             'Authorization': 'Bearer BQAEOwZYyfa0yofdSjt5EvhwuKDv2rNPVQ_2IpHCVzM4lpnCDFD7jTQzkoH3KPc37arWQAApIL5SHfj1tr-C6do-gfQsBo-8yhDR-lQ_KB12n8C5LFQ'
//         }
//     })
//     const data = await response.json()
//     const bandName = data.name 
//     var bandimages = data.images[0].url
 
//     const bandFollower = data.followers.total
//     // console.log(data)
//     // console.log(bandImages)
//     console.log(bandName)
//     console.log(bandFollower)
//     console.log(bandimages)
    
// }
// getArtist();
// })



//To request a token:

// const axios = require('axios');

// var client_id = '88570c902e664a23a20f104e22e58098'
// var client_secret = '27077298afa14623b4ac821940e1a760'

// var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//       'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
//     },
//     data: 'grant_type=client_credentials'

//   };
  
//   axios.post(authOptions.url, authOptions.data, {headers: authOptions.headers})
//     .then(response => {
//         if(response.status === 200){
//             var token = response.data.access_token;
//             console.log(token);
//         }
//     })
//     .catch(error =>{
//         console.error(error);
//     });


const url = 'https://api.spotify.com/v1/artists/3GQboECxDT1xqPPWC30p7v?'
async function getArtist(){
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer BQAEOwZYyfa0yofdSjt5EvhwuKDv2rNPVQ_2IpHCVzM4lpnCDFD7jTQzkoH3KPc37arWQAApIL5SHfj1tr-C6do-gfQsBo-8yhDR-lQ_KB12n8C5LFQ'
        }
    })
    const data = await response.json()
    const bandName = data.name 
    var bandimages = data.images[0].url
 
    const bandFollower = data.followers.total
    console.log(data)
    console.log(bandName)
    console.log(bandFollower)
    console.log(bandimages)
    
}
getArtist();
