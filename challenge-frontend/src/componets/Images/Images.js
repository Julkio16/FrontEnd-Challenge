import React, { Fragment, useState } from 'react'
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './Imagen.css'
export default function Images(props) {
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const dialogFuncMap = {
        'displayBasic2': setDisplayBasic2,
    }
    const onClick = (name) => {
        dialogFuncMap[name](true);
    }
    const onHide = (name) => {
        dialogFuncMap[name](false);
    }
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="OK" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
    return (
        <Fragment>
            <div className='Img' onClick={() => onClick('displayBasic2')}>
                <Image  src={props.url} alt={props.id} width='100%' height='100%' />

            </div>
            <div>
                <Dialog header={
                    props.data.title ? props.data.title : props.data.breeds[0] ? props.data.breeds[0].name : props.id
                } visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                    <Image  src={props.url} alt={props.id} width='100%' height='100%' />
                    {
                        props.data.breeds[0] ?
                        <p> {props.data.breeds[0].description}</p> : <p>  No information avalible at the moment, we are working on it :)</p>
                    }
                    
                </Dialog>
            </div>
        </Fragment>
    )
}
