import React, { useState, useEffect, Fragment } from 'react'
import getImages from '../../services/getImages'
import Images from '../Images/Images';
import ListOfAvatares from '../ListAvatares/ListOfAvatares';

export default function ListOfImages(props) {
    const [images, setImages] = useState([]);
    const raza = props.breed ? props.breed : null;

    useEffect(() => {
        getImageBreed();
    }, [raza])

    const getImageBreed = async () => {
        let a = await getImages(raza);
        setImages(a);
    }


    return (
        <Fragment className="Avatares">
            <div>
                <ListOfAvatares />
            </div>
            <div className="p-grid p-justify-between p-align-center">
                {images.map(image => <div key={image.id} className="p-col-12 p-md-6 p-lg-4"><Images url={image.url} id={image.id} data={image} /></div>)}
            </div>

        </Fragment>
    )
}
