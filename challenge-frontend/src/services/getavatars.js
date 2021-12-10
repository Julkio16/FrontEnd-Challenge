export default  function getavatares(breedid) {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?breed_id='+breedid+'&format=json&limit=1&order=RANDOM&size=full'
    
        return  fetch(apiUrl,{headers:{
            "x-api-key": "e6e9d8f7-5c2f-4d5a-8c74-bf8b0a20ef1f"
          }}).then(res => res.json())
          .then(resposnse => {
              const images = resposnse
              const url = images.map(urls => urls.url)
              console.log(url,breedid);
              return url;
          })    
}
