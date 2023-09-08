import Photo from './photo';
import './friends.css'
import { useEffect, useState } from "react"
export default function Photos (){


    const [Photos, setPhotos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        
        .then(data => setPhotos(data))
    },[])
    return(
        <div className='box'>
            <h3>Photos : {Photo?.length}</h3>
            {
                Photos?.map(Picture => <Photo Picture={Picture}></Photo>)
            }
        </div>
    )
}