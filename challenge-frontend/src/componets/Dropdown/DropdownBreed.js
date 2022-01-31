import React, { useState , useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import getbreeds from '../../services/getbreeds';



export function DropdownBreed(props) {    
    const [name, setName] = useState([]);
    const [value, setValue] = useState(null);

    useEffect( () => {
        async function fetchData(){
            setName(await getbreeds())
        }
        fetchData();        
    }, [])
    const onBreedChange = (e) => {
        props.onChange(e.value.id)
        setValue(e.value)
    }
    return (
        <div>
            <Dropdown value={value} options={name} onChange={onBreedChange} optionLabel="name" placeholder="Select breed" />
            
        </div>
    )
}
