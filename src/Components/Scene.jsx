import React, { Suspense } from 'react';
import './Styles/Model.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';

import Model from './Model';

const Scene = () => {
    return (
        <>
            <div id="container3D">
                <Canvas
                className='canvas' 
                shadows
                // gl={{alpha:true}}
                camera={{position:[0,0,20],fov:18}}>
                    <directionalLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.4} color="#ffffff" />
                        <spotLight intensity={0.0} angle={0.1} penumbra={1} position={[0, 25, 20]} castShadow />
                        <OrbitControls enablePan={false} enableZoom={false} minAzimuthAngle={Math.PI / 2.5} maxAzimuthAngle={Math.PI / 1.6} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />

                        <Model />
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}
export default Scene;