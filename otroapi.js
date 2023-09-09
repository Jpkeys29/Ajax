// fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(respuesta =>{
//                     // console.log(respuesta);
//                     return respuesta.json();
//                 })
//                 .then(data =>{
//                     console.log(data);
//                     data.forEach(user =>{
//                         const nombre = `<li>${user.name}</li>`;
//                         const email = `Email: ${user.email}`
//                         document.querySelector('ul').insertAdjacentHTML('beforeend',nombre);
//                         document.querySelector('ul').insertAdjacentHTML('beforeend',email);
//                     });
//                 });


// fetch('https://api.weather.gov/gridpoints/OKX/40,34/forecast')
//     .then(respuesta =>{
    //         console.log(respuesta);
    //         return respuesta.json();
    //     })               
    //     .then(data =>{
        //         const weatherForecast = `<li>${data.properties.periods[5].detailedForecast}</li>`
        //         document.querySelector('ul').insertAdjacentHTML('beforebegin',weatherForecast)
        //         const weatherTemperature = `Temperature :${data.properties.periods[5].temperature}`
        //         document.querySelector('ul').insertAdjacentHTML('beforebegin',weatherTemperature)
        
        //     })

        // fetch('https://www.boredapi.com/api/activity/')
        //     .then(respuesta =>{
            //         console.log(respuesta)
            //         return respuesta.json()
            //     })
            //     .then(data => {
                //         console.log(data)
                //         // const boredData = `<li>${data.activity}</li>`
                //         // document.querySelector('ul').insertAdjacentHTML('beforeend',boredData)
                //     })
                
        document.getElementById('fetchButton').addEventListener('click',fetchBored);

        function fetchBored(){
            fetch('https://www.boredapi.com/api/activity/')

                .then(respuesta =>{
                    console.log(respuesta)
                    return respuesta.json()
                })
                .then(data => {
                    console.log(data)
                    const boredData = `<li>${data.activity}</li>`
                    document.querySelector('ul').insertAdjacentHTML('beforeend',boredData)
                });
        }

        import('node-fetch').then((module) =>{
                    const fetch = module.default;
                    function bored(){
                        const boredData = fetch('https://www.boredapi.com/api/activity')
                        const resultado = boredData.json()
                        console.log(resultado)
                    }
                    bored()
                })