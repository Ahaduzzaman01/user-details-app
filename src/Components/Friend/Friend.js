import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const friendStyle = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
        backgroundColor: 'lightgrey',
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <p><Link to={`/details/${id}`}>Show details of {id}</Link></p>
        </div>
    );
};

export default Friend;