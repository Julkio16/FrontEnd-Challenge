import React from 'react'
import { Avatar } from 'primereact/avatar';
export function Avatares({url}) {

 
    return (
        <div>
            <Avatar image={url} className="p-mr-2" size="xlarge" shape="circle" />
        </div>
    )
}
