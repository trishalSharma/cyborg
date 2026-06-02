import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
      />
    </mesh>
  );
}

export default function CyborgModel() {
  return (
    <div className="h-[500px]">
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10,10,10]} />
        <Sphere />
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}