import React, {useEffect } from 'react'
import Rings from '../vanta/src/vanta.halo';
import * as THREE from 'three';

const Back = () => {
    useEffect(()=>{
        Rings({
            el:'#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            baseColor: 0x0,
            backgroundColor: 0x0
        })
    },[])
    return (
        <>
        </>
    )

}
export default Back;