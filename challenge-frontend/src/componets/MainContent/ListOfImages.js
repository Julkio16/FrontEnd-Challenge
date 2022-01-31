import React, { useState, useEffect } from 'react'
import { DataScroller } from 'primereact/datascroller';
import getImages from '../../services/getImages'
import Images from '../Images/Images';
import './ListOfImages.css'
import ListOfAvatares from '../ListAvatares/ListOfAvatares'

export default function ListOfImages(props) {
    const [images, setImages] = useState([]);
    const raza = props.breed ? props.breed : null;

    useEffect(() => {
        console.log("entro");
        getImageBreed(raza);
    }, [raza])

    const getImageBreed = async (raza) => {
        let a = await getImages(raza);
        setImages(a);
    }

    const ItemTemplate = (image) => {
        return (
            <Images key={image.id} url={image.url} id={image.id} data={image} />
        )
    }


    return (
        <>
            <div className='Avatares'>
                <ListOfAvatares />
            </div>
            <div className="Imagenes">
                <div className="p-grid p-jc-between p-ac-start">
                    <DataScroller value={images} itemTemplate={ItemTemplate}
                        rows={12} className='Data' />
                </div>
            </div>
        </>
    )
}
