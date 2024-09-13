import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { CanvasLoader } from "./Loader";

interface IEarth {
  isMobile: boolean;
}

export const Earth = ({ isMobile }: IEarth) => {
  const earth = useGLTF("../../public/planet/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={isMobile ? 0.6 : 2.5}
        position-y={0}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChangeMediaQuery = (event: any) => {
      setIsMobile(event.matches);
    };

    return () => {
      mediaQuery.removeEventListener("change", handleChangeMediaQuery);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
