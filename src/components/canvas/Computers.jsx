import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

const Computers=( { isMobile } ) =>
{
        const { scene }=useGLTF( './desktop_pc/scene.gltf' );
        const { gl }=useThree();

        useEffect( () =>
        {
                scene.traverse( ( child ) =>
                {
                        if ( child.isMesh )
                        {
                                child.castShadow=true;
                                child.receiveShadow=true;
                                if ( child.material )
                                {
                                        child.material.side=THREE.DoubleSide;
                                }
                        }
                } );

                // Force shader compilation
                gl.compile( scene, new THREE.Camera(), new THREE.Scene() );
        }, [ scene, gl ] );

        return (
                <mesh>
                        <hemisphereLight intensity={ 0.15 } groundColor="black" />
                        <spotLight
                                position={ [ -20, 50, 10 ] }
                                angle={ 0.12 }
                                penumbra={ 1 }
                                intensity={ 1 }
                                castShadow
                                shadow-mapSize={ 1024 }
                        />
                        <pointLight intensity={ 1 } />
                        <primitive
                                object={ scene }
                                scale={ isMobile? 0.7:0.75 }
                                position={ isMobile? [ 0, -3, -2.2 ]:[ 0, -3.25, -1.5 ] }
                                rotation={ [ -0.01, -0.2, -0.1 ] }
                        />
                </mesh>
        );
};

const ComputersCanvas=() =>
{
        const [ isMobile, setIsMobile ]=useState( false );
        const canvasRef=useRef( null );

        useEffect( () =>
        {
                const mediaQuery=window.matchMedia( '(max-width: 500px)' );
                setIsMobile( mediaQuery.matches );

                const handleMediaQueryChange=( event ) =>
                {
                        setIsMobile( event.matches );
                };

                mediaQuery.addEventListener( 'change', handleMediaQueryChange );

                return () =>
                {
                        mediaQuery.removeEventListener( 'change', handleMediaQueryChange );
                };
        }, [] );

        useEffect( () =>
        {
                const handleContextLoss=( event ) =>
                {
                        event.preventDefault();
                        console.warn( 'WebGL context lost. Trying to restore...' );
                        if ( canvasRef.current )
                        {
                                canvasRef.current.getContext( 'webgl2', { powerPreference: 'high-performance' } );
                        }
                };

                const canvas=canvasRef.current;
                if ( canvas )
                {
                        canvas.addEventListener( 'webglcontextlost', handleContextLoss );
                }

                return () =>
                {
                        if ( canvas )
                        {
                                canvas.removeEventListener( 'webglcontextlost', handleContextLoss );
                        }
                };
        }, [] );

        return (
                <div style={ { width: '100%', height: '100vh', background: '#050816' } }>
                        <Canvas
                                ref={ canvasRef }
                                frameloop="demand"
                                shadows
                                dpr={ [ 1, 2 ] }
                                camera={ { position: [ 20, 3, 5 ], fov: 25 } }
                                gl={ {
                                        preserveDrawingBuffer: true,
                                        powerPreference: 'high-performance',
                                        antialias: true,
                                        alpha: false
                                } }
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
                </div>
        );
};

export default ComputersCanvas;