import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader'; // Ensure this path is correct

const Computers=( { isMobile } ) =>
{
        const { scene }=useGLTF( './desktop_pc/scene.gltf' );
        return (
                <mesh>
                        <hemisphereLight intensity={    1 } groundColor="black" />
                        <pointLight intensity={ 1 } />
                        <spotLight
                                position={ [ -20, 50, 10 ] }
                                angle={ 0.12 }
                                intensity={ 1 }
                                castShadow
                                shadow-mapSize={ 1024 }
                        />
                        <primitive
                                object={ scene }
                                scale={ isMobile? 0.7:0.75 }
                                position={ isMobile? [ 0, -3, -2.2 ]:[ 0, -3.25, -1.5 ] }
                        />
                </mesh>
        );
};

const ComputersCanvas=() =>
{
        const [ isMobile, setIsMobile ]=useState( false );

        useEffect( () =>
        {
                const mediaQuery=window.matchMedia( '(max-width:500)' );
                setIsMobile( mediaQuery.matches )
                const handleMediaQueryChange=( event ) =>
                {
                        setIsMobile( event.matches )
                }
                mediaQuery.addEventListener( 'change', handleMediaQueryChange );
                mediaQuery.removeEventListener( 'change', handleMediaQueryChange );
        }, [] );
        return (
                <Canvas
                        frameloop='demand'
                        shadows
                        camera={ { position: [ 20, 3, 5 ], fov: 25 } }
                        gl={ { preserveDrawingBuffer: true } }
                >
                        <Suspense fallback={ <Loader /> }>
                                <OrbitControls
                                        enableZoom={ false }
                                        maxPolarAngle={ Math.PI/2 }
                                        minPolarAngle={ Math.PI/2 }
                                />
                                <Computers isMobile={ isMobile } />
                        </Suspense>
                        <Preload all />
                </Canvas>
        );
};

export default ComputersCanvas;
