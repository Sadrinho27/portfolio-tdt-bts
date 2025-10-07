import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = React.memo(({ iconUrl, name }) => { // Ajoute name prop
  const [decal] = useTexture([iconUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} /> {/* Légèrement plus fort pour visibilité */}
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color='#fff8eb'
          emissive='#ff0000'
          emissiveIntensity={0.1}
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={0.8} map={decal} flatShading />
      </mesh>
      {/* Title pour tooltip au hover (a11y/UX) */}
      <mesh ref={null} onPointerOver={(e) => e.eventObject.parent.title = name} /> {/* Simple title hack ; ou useGLTF si avancé */}
    </Float>
  );
});

const BallCanvas = ({ icon, name }) => {
  return (
    <div title={name} aria-hidden="true"> {/* Title global + aria-hidden car 3D non-text */}
      <Canvas 
        frameloop="demand" 
        dpr={[1, 2]} 
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 5], fov: 80 }} // Ajoute fov pour meilleur zoom initial
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} // Disable pan pour focus rotation
          />
          <Ball iconUrl={icon} name={name} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
