import React from 'react';
import {Circle, Plane,useTexture } from '@react-three/drei';

export function Suelo(){
    const [map,aomap,displacementMap, normalMap,roughnessMap] = useTexture ([
        "../texture/cesped/Grass001_1K_Color.jpg",
        "../texture/cesped/Grass001_1K_AmbientOcclusion.jpg",
        "../texture/cesped/Grass001_1K_Displacement.jpg",
        "../texture/cesped/Grass001_1K_Normal.jpg",
        "../texture/cesped/Grass001_1K_Roughness.jpg"
    ]);
    return (
        <Circle 
        rotation={[-Math.PI/2,0,0]} 
        args={[8,8,10]} 
        position={[0,-0.3,0]} 
        receiveShadow={true}
        castShadow
        >

            <meshStandardMaterial
            map={map}
            aoMap={aomap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            metalness={0}
            roughness={0.5}
            />

        </Circle>
    );
};
