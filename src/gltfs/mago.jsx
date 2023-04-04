/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations} from "@react-three/drei";
import { useControls } from "leva";

export function Mago(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("../models/mago.gltf");
  const { actions,names } = useAnimations(animations, group);
  
console.log(animations)

const { animationName } = useControls({
  animationName: { options: names }
})

useEffect(() => {
  const action = actions[animationName]
  action 
            .reset()
            .fadeIn(0.5)
            .play()
            return () => {
              action.fadeOut(0.5)
          }
  
}, [animationName])

  return (
    <group ref={group} {...props} dispose={null} position={[0,0.15,0]} castShadow={true} receiveShadow={true}>
      <group name="Scene">
        <group name="Armature_druide" scale={1} >
          <primitive object={nodes.root} />
          <skinnedMesh
            name="druid"
            geometry={nodes.druid.geometry}
            material={materials.color_main}
            skeleton={nodes.druid.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../models/mago.gltf");