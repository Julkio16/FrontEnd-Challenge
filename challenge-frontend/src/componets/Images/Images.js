import React from 'react'
import { Image } from 'primereact/image';
import './Imagen.css'
export default function Images(props) {
    return (
        <div className='Img'>
            <Image key={props.key} src={props.url} alt={props.id} width='100%' height='100%' />
        </div>
    )
}
