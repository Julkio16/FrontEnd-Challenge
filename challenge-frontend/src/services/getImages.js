export default async function getImages(breedid) {
    if(breedid){
        const apiURL1 = 'https://api.thecatapi.com/v1/images/search?breed_id='+breedid+'&format=json&limit=27&order=RANDOM&size=full'
        const images = await fetch(apiURL1,{headers:{
            "x-api-key": "e6e9d8f7-5c2f-4d5a-8c74-bf8b0a20ef1f"
          }})
        const imagesdata = await images.json();
        return imagesdata;
    }
    else{
        const apiURL = 'https://api.thecatapi.com/v1/images/search?format=json&limit=27&order=RANDOM&size=full'
        const images = await fetch(apiURL,{headers:{
            "x-api-key": "e6e9d8f7-5c2f-4d5a-8c74-bf8b0a20ef1f"
          }})
        const imagesdata = await images.json();
        return imagesdata;
    }
}
