import { Environment, OrbitControls, GizmoHelper,GizmoViewport,
    Stars,OrthographicCamera,plane,useHelper, PresentationControls
    } from "@react-three/drei";

import {Piedras} from './gltfs/piedras'
import {Mago} from './gltfs/mago'
import { Suelo } from "./pbrs/suelo";
import { AmbientLight, DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { useReducer, useRef } from "react";

export function Experience(){
    const refdirectional = useRef()
    const refHemisfer = useRef()
    const refPoint = useRef()
    const refSpot = useRef()

    useHelper(refdirectional, DirectionalLightHelper,1 )
    useHelper(refHemisfer, HemisphereLightHelper,1)
    useHelper(refPoint, PointLightHelper,1)
    useHelper(refSpot, SpotLightHelper,1)

return <>

    <OrbitControls/>

    {/*<directionalLight ref={refdirectional} castShadow position={[0,2,6]} intensity={0.8} />*/}
    {/*<hemisphereLight ref={refHemisfer} castShadow position={[5,6,6]} intensity={0.4} />*/}
    {/*<pointLight ref={refPoint} castShadow position={[0,4,8]} intensity={0.8} />*/}
    <spotLight ref={refSpot} castShadow position={[0,8,8]} intensity={0.8} />

    <group>
        <Piedras/>
    </group>

    <group>
        <Mago/>
    </group>

    <group>
        <Suelo/>
    </group>

    </>
}