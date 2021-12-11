import React, { useState,useEffect } from 'react'
import FeaturingContent from '../Avatars/FeaturingContent';

import getbreeds from '../../services/getbreeds';
import getavatares from '../../services/getavatars';

export  function ListOfAvatares() {
    const [breeds,setBreedsids] =useState([])
    const [imagedata,setDataImage] = useState([]);
    
    useEffect(() => {
        getBreeds();
    }, [])
    useEffect(() => {
        getAvatarsForBreed(breeds);
    }, [breeds])
    const getBreeds = async () => {
        let a = await getbreeds();
        let b = a.map(breeds => breeds.id);
        b.sort(function() { return Math.random() - 0.5 });
        let c = b.slice(1,7);
        setBreedsids(c);
    }
    const getAvatarsForBreed = async (c) => {
        let urls = [];
        c.forEach(async (element) => {
            let avatar = await getavatares(element);
            urls.push(avatar);
        });
        setDataImage(urls);
        
    }
    return (
        <div p-d-flex p-jc-between>
            {imagedata.map(image => <div><FeaturingContent url = {image.url} name = {image.name} key = {image.id}/></div>)}                                    
        </div>
    )
}
