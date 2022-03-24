import React from 'react';
import './Gun.css'

const Gun = (props) => {
    const {name, img, bullet, capacity, action, category, price} = props.gun
    return (
        <div className='gun'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Bullet: {bullet}</h5>
            <h5>Capacity: {capacity}</h5>
            <h5>Action: {action}</h5>
            <h5>Category: {category}</h5>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Gun;