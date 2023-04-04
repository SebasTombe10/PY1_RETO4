import './style.css'
import ReactDom from "react-dom/client";
import { Experience } from './experience';
import { Canvas } from '@react-three/fiber';
import { ShadowMap } from '@react-three/drei';

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(

    <>

    <Canvas
    className='canvas'
    shadows={true}
    camera={{ position: [-10,15,35], fov:15}}
    
    >
        
        <Experience/>
    </Canvas>
    
    </>
    
  
)