import { Environment, OrbitControls, GizmoHelper,GizmoViewport,
    Stars,OrthographicCamera,plane
    } from "@react-three/drei";

import {Piedras} from './piedras'
import {Mago} from './mago'
export function Experience(){

return <>

    <OrbitControls/>

    <Environment preset="city" background />

    <group>
        <Piedras/>
    </group>

    <group>
        <Mago/>
    </group>


    </>
}