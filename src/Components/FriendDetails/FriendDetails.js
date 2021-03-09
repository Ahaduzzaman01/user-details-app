import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({})

    const {name, phone, email} = friend;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`

        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Phone Number: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default FriendDetails;