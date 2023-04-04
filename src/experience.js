import { Environment, OrbitControls, GizmoHelper,GizmoViewport,
    Stars,OrthographicCamera,plane
    } from "@react-three/drei";

import {Piedras} from './gltfs/piedras'
import {Mago} from './gltfs/mago'
import { AmbientLight } from "three";
export function Experience(){

return <>

    <OrbitControls/>

    <Environment preset="city"/>

    <group>
        <Piedras/>
    </group>

    <group>
        <Mago/>
    </group>


    </>
}