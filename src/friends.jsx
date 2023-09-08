import Friend from './firend'
import { useEffect, useState } from 'react'
import './friends.css'
export default function Friends(){


    const [friends, setFriends]= useState([])
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
                    .then(data =>setFriends(data))

    },[])


    
    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friends => <Friend friend={friends}></Friend>)
            }
        </div>
    )
}