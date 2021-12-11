import React from 'react'
import { Avatar } from 'primereact/avatar';
export default function Avatares(props) { 
    return (
        <div>
            <Avatar image={props.url} className="p-mr-2" size="xlarge" shape="circle"  />
        </div>
    )
}
