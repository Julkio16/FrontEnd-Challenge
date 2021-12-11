export default async  function getavatares(breedid) {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?breed_id='+breedid+'&format=json&limit=1&order=RANDOM&size=full'
    
        const query =  await fetch(apiUrl,{headers:{
            "x-api-key": "e6e9d8f7-5c2f-4d5a-8c74-bf8b0a20ef1f"
          }})
          const imagen = await query.json()
          return imagen.map(res =>{
              return {
                  url: res.url,
                  name: res.breeds[0].name,
                  data: res
              }
          })  
}
