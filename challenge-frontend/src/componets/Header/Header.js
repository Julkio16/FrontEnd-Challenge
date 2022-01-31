import React from 'react'
import "./Header.css"

import { DropdownBreed } from '../Dropdown/DropdownBreed';

export function Header(props) {
    return (
        <div>
            <div id='header' className="p-d-flex p-jc-between p-ai-center p-p-2 p-p-lg-3" >
                <div>
                    <i className="pi pi-instagram p-mr-2"></i>Catstagram
                </div>
                <div>
                    <DropdownBreed onChange={props.onChange} onCreate={props.onCreate} />
                </div>
            </div>
        </div>
    )
}
