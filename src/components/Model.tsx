// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/heart.glb");
  const { actions } = useAnimations(animations, group);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.05;
    }
    if (active) {
      materials.Material.color.set(0xff0000);
    } else {
      materials.Material.color.set(0x770000);
    }
  });
  const onHover = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
  };
  const onMouseDown = () => {
    setActive(true);
  };
  const onMouseUp = () => {
    setActive(false);
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => onHover(e)}
      onPointerLeave={(e) => onMouseOut(e)}
      onPointerDown={(e) => onMouseDown(e)}
      onPointerUp={(e) => onMouseUp(e)}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="heart1fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube"
                  position={[0, 131.79, -0.35]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="Cube_Material_0"
                    geometry={nodes.Cube_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Camera"
                  position={[-492.17, 188.39, -751.56]}
                  rotation={[0, -1, -0.06]}
                  scale={100}
                >
                  <group name="Object_5" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/heart.glb");
