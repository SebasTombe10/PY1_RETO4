import './style.css'
import ReactDom from "react-dom/client";
import { Experience } from './experience';
import { Canvas } from '@react-three/fiber';

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(

    <>

    <Canvas
    className='canvas'
    shadows
    camera={{ position: [0,15,35], fov:15}}
    
    >
        <Experience/>
    </Canvas>
    
    </>
    
  
)