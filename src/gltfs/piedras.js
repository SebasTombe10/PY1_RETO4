/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { Box, MeshTransmissionMaterial, Plane, Sphere, useGLTF,useTexture } from "@react-three/drei";
import { MeshPhysicalMaterial, MeshStandardMaterial, Texture } from "three";

export function Piedras(props) {
  const { nodes, materials } = useGLTF("../models/piedras.gltf");
  
  const [map_roca,aomap_roca,displacementMap_roca, normalMap_roca,roughnessMap_roca] = useTexture ([
    "../texture/roca/Rock020_1K_Color.jpg",
    "../texture/roca/Rock020_1K_AmbientOcclusion.jpg",
    "../texture/roca/Rock020_1K_Displacement.jpg",
    "../texture/roca/Rock020_1K_Normal.jpg",
    "../texture/roca/Rock020_1K_Roughness.jpg"
]);

const [map_oro,displacementMap_oro,metalness_oro, normalMap_oro,roughnessMap_oro] = useTexture ([
  "../texture/oro/Metal007_1K_Color.jpg",
  "../texture/oro/Metal007_1K_Displacement.jpg",
  "../texture/oro/Metal007_1K_Metalness.jpg",
  "../texture/oro/Metal007_1K_Normal.jpg",
  "../texture/oro/Metal007_1K_Roughness.jpg"
]);

const pbrMaterial = new MeshStandardMaterial ({
   map:map_roca,
   aoMap:aomap_roca,
   displacementMap:displacementMap_roca,
   normalMap:normalMap_roca,
   roughnessMap:roughnessMap_roca,
   displacementScale:0,
   color:"#8b8c7a",
   envMapIntensity:0.6,
   aoMapIntensity:1,
   roughness:0.5,
   castShadow:true,
   receiveShadow:true,
});

console.log(materials);

  return (
    <>

    <group scale={0.1}>
    <Sphere>

    <meshPhysicalMaterial
    map={map_oro}
    displacementMap={displacementMap_oro}
    metalnessMap={metalness_oro}
    normalMap={normalMap_oro}
    roughnessMap={roughnessMap_oro}
    metalness={1}
    castShadow={true}
    receiveShadow={true}
    />

    </Sphere>
    </group>
  
    <group >
      <mesh
      scale={0.2}
        castShadow
        receiveShadow
        geometry={nodes.dolmen1001.geometry}
        material={materials.Material=pbrMaterial}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1.geometry}
          material={materials.Material}
  
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1003_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1006.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1007.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1008.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1009.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1010.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1011.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1012.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1013.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1014.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1015.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1016.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1017.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1018.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1019.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen1020.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2003.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen2005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen3.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen3001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen3002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4003.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4006.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4007.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dolmen4008.geometry}
          material={materials.Material}
        />
      </mesh>
    </group>
    </>
  );
 
}

useGLTF.preload("../models/piedras.gltf");