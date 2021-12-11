import React from 'react'
import { Avatar } from 'primereact/avatar'

export default function FeaturingContent(props) {
    return (
        <div>
            <Avatar image={props.url} label={props.name} className="p-mr-2" size="xlarge" shape="circle"/>
        </div>
    )
}
