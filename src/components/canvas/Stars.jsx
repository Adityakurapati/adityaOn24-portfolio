import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Loader from "../Loader";

const Stars=( { props } ) =>
{
        const ref=useRef();
        const [ sphere ]=useState( () => random.inSphere( new Float32Array( 5000 ), { radius: 1.2 } ) );


        // To Make ROtation of STars | delta = change 
        useFrame( ( state, delta ) =>
        {
                ref.current.rotation.x-=delta/10;
                ref.current.rotation.y-=delta/15;
        } );

        return (
                <group rotation={ [ 0, 0, Math.PI/4 ] }>
                        <Points ref={ ref } positions={ sphere } stride={ 3 } frustumCulled { ...props }>
                                <PointMaterial transparent color='#f272c8' size={ 0.005 } sizeAttenuation={ true } depthWrite={ false } />
                                {/* <PointMaterial
                                        transparent
                                        color="#ffffff"
                                        size={ 0.005 }
                                        sizeAttenuation={ true }
                                        depthWrite={ false }
                                /> */}
                        </Points>
                </group>
        );
}

const StarsCanvas=() =>
{
        return (
                <div className="w-full h-full absolute inset-0 z-[-1]">
                        <Canvas camera={ { position: [ 0, 0, 1 ] } }>
                                <Suspense fallback={ <Loader /> }>
                                        <Stars />
                                </Suspense>
                                <Preload all />
                        </Canvas>
                </div>
        );
}

export default StarsCanvas;
