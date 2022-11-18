import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const tempObject = new THREE.Object3D();

function getY(fun, x, z, xAxis, zAxis, time) {
  switch (fun) {
    case 0:
      //Tropfen
      return (
        Math.sin(
          (-time * 150 + (xAxis / 2 - x) ** 2 + (zAxis / 2 - z) ** 2) * 0.005
        ) * 3
      );
    case 1:
      //Welle
      return Math.sin((x + z) * 0.5 + time * 0.6);
    case 2:
      //Swing
      return (
        ((z - zAxis / 2) ** 2 + (x - xAxis / 2) ** 2) *
        0.008 *
        Math.sin(time * 0.1)
      );
    default:
      //Ebene
      return 0;
  }
}

function Boxes({ xAxis, zAxis, gap, size, color, fun }) {
  const count = xAxis * zAxis;
  const meshRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    let i = 0;
    for (let x = 0; x < xAxis; x++) {
      for (let z = 0; z < zAxis; z++) {
        const id = i++;
        tempObject.position.set(
          (gap * (xAxis - 1)) / 2 - gap * x,
          getY(fun, x, z, xAxis, zAxis, time),
          (gap * (zAxis - 1)) / 2 - gap * z
        );
        tempObject.updateMatrix();
        meshRef.current.setMatrixAt(id, tempObject.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[size, 20, 20]} />
      <meshStandardMaterial color={`rgb(${color.r},${color.g},${color.b})`} />
    </instancedMesh>
  );
}

export default function Three({ color, x, y, fun }) {
  return (
    <Canvas
      id="test"
      style={{position: "absolute"}}
      className="bg-black min-h-screen"
      colorMaganger={false}
      camera={{ position: [70, 20, 0], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <Stars />
      <OrbitControls />
      <Boxes color={color} xAxis={x} zAxis={y} gap={1} size={0.2} fun={fun} />
    </Canvas>
  );
}
