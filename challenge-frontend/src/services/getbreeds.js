
export default async function getbreeds() {
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    const breeds =  await fetch(apiUrl,{headers:{
        "x-api-key": "e6e9d8f7-5c2f-4d5a-8c74-bf8b0a20ef1f"
      }})
    const razas = await breeds.json();
    return razas.map(breed => {
        return{
            name:breed.name,
            id: breed.id
        }
    })
}
