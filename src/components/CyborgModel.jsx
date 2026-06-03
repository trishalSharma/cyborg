import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function AICore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.3;
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.position.y = Math.sin(t) * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.z = t * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.5;
      ring2Ref.current.rotation.x = t * 0.2;
    }
  });

  return (
    <>
      {/* Outer Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Inner Ring */}
      <mesh ref={ring2Ref} rotation={[1, 0, 0]}>
        <torusGeometry args={[1.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#7B2CBF"
          emissive="#7B2CBF"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Core */}
      <mesh ref={coreRef}>
        <torusKnotGeometry args={[0.8, 0.25, 256, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={3}
        />
      </mesh>
    </>
  );
}

export default function CyborgModel() {
  return (
    <div className="h-125 w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.5} />

        <pointLight
          position={[5, 5, 5]}
          intensity={40}
          color="#00ffff"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={20}
          color="#7B2CBF"
        />

        <AICore />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}