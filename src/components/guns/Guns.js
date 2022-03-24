import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'

const Guns = () => {

    const [guns, setGuns] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    return (
        <div className='guns-components'>
            {
                guns.map(gun => <Gun gun={gun}></Gun>)
            }
        </div>
    );
};

export default Guns;