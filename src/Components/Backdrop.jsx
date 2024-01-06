import React from 'react';
import './Styles/Home.css';

const Backdrop = ({opened,setCheck}) => {
    return (
        <div className={!opened?'backdrop':'backdrop_open'}  onClick={() => { setCheck(false) }}>
        </div>
    )
}

export default Backdrop