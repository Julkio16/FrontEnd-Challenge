import React, {useState,useEffect} from 'react'
import getImages from '../../services/getImages'
import Images from '../Images/Images';

export default function ListOfImages(props) {
    const [images,setImages] = useState([]);
    const raza = props.breed ? props.breed : null;

    useEffect(() => {
        console.log("list",raza);
        getImageBreed();
    }, [raza])

    const getImageBreed = async () => {
        let a = await getImages(raza);
        setImages(a);
    }

    const getImageDef = async () =>{
         let a = await getImages();
         setImages(a);
    }
    return (
        <div  className="p-grid p-justify-between p-align-center">
            {images.map(image => <div className="p-col-12 p-md-6 p-lg-4"><Images url = {image.url} id = {image.id} key = {image.id}/></div>)}
        </div>
    )
}
