import React from 'react'
import { Avatar } from 'primereact/avatar'

export default function FeaturingContent(props) {
    return (
        <div className='p-d-flex p-flex-column p-ai-center'>
            <Avatar image={props.url} className="p-mr-2" size="xlarge" shape="circle"/>
            <h6>{props.name}</h6>
        </div>
    )
}
