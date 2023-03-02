import React, { Children } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";

interface Props {}

const Main = () => {
  return (
    <>
      <Canvas
        camera={{ position: [2, 15, 30], fov: 15 }}
        style={{
          background: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Model position={[0.025, -0.9, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Main;
