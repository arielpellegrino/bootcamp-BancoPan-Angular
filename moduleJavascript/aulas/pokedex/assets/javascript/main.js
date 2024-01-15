const offset = 0;
const limit =  10; 

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url).then(function(response){
   response.json().then()
}).catch(function (err) {
    console.log(err)
}).finally(function() {
    console.log('Request completed')
})