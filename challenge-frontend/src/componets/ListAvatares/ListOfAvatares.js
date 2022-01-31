import React, { useState,useEffect } from 'react'
import FeaturingContent from '../Avatars/FeaturingContent';
import './ListOfAvatar.css'

import getbreeds from '../../services/getbreeds';
import getavatares from '../../services/getavatars';

export  default function ListOfAvatares() {
    const [imagedata,setDataImage] = useState([]);
    
    useEffect(() => {
        getBreeds();
    }, [])
    const getBreeds = async () => {        
        let a = await getbreeds();
        let b = a.map(breeds => breeds.id);
        b.sort(function() { return Math.random() - 0.5 });
        let c = b.slice(1,17);
        let urls = [];
        c.forEach(async (element) => {
            let avatar = await getavatares(element);
            urls.push(avatar);
        });
        setDataImage(urls);        
    }
    return (
        <div className='p-d-flex p-jc-evenly AvatarContenedor'>
            {imagedata.map(image => <div key = {image[0].id} className="p-mr-2" ><FeaturingContent  url = {image[0].url} name = {image[0].name}  data = {image[0].data}/></div>)}                                    
        </div>
        
    )
}
