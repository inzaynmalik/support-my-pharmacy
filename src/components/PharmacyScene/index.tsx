"use client";

import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  PerspectiveCamera,
  Float,
  Text,
  useGLTF,
  Environment,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// DNA Helix Component
const DNAHelix = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);

  const strandCount = 2; // Number of strands
  const basePairCount = 10; // Number of base pairs
  const radius = 1.2 * scale; // Radius of helix
  const height = 5 * scale; // Height of helix
  const twists = 1.5; // Number of complete twists

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the DNA helix slowly
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group
      ref={groupRef}
      position={new THREE.Vector3(...position)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Create the strands */}
      {[0, Math.PI].map((strandOffset, strandIndex) => (
        <group key={`strand-${strandIndex}`}>
          {/* Create the backbone */}
          {Array.from({ length: 50 }).map((_, i) => {
            const t = i / 49;
            const angle = strandOffset + t * Math.PI * 2 * twists;
            const x = Math.cos(angle) * radius;
            const y = height * (t - 0.5);
            const z = Math.sin(angle) * radius;

            return (
              <mesh
                key={`backbone-${strandIndex}-${i}`}
                position={[x, y, z]}
                scale={0.15}
              >
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
                  color={strandIndex === 0 ? "#2C7CFF" : "#00c896"}
                  metalness={0.3}
                  roughness={0.2}
                />
              </mesh>
            );
          })}

          {/* Create the base pairs */}
          {Array.from({ length: basePairCount }).map((_, i) => {
            const t = i / (basePairCount - 1);
            const angle = strandOffset + t * Math.PI * 2 * twists;
            const x = Math.cos(angle) * radius;
            const y = height * (t - 0.5);
            const z = Math.sin(angle) * radius;

            // Calculate base pair connection position (opposite on the helix)
            const oppositeAngle = angle + Math.PI;
            const oppositeX = Math.cos(oppositeAngle) * radius;
            const oppositeZ = Math.sin(oppositeAngle) * radius;

            return (
              <group key={`base-${strandIndex}-${i}`}>
                {strandIndex === 0 && (
                  <mesh>
                    <cylinderGeometry args={[0.05, 0.05, radius * 2, 8]} />
                    <meshStandardMaterial
                      color="#ffffff"
                      transparent
                      opacity={0.7}
                    />
                    <group
                      position={[0, 0, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      position-x={(x + oppositeX) / 2}
                      position-y={y}
                      position-z={(z + oppositeZ) / 2}
                      rotation-z={Math.atan2(oppositeZ - z, oppositeX - x)}
                    />
                  </mesh>
                )}
              </group>
            );
          })}
        </group>
      ))}

      {/* Add sparkles effect when hovered */}
      {hover && (
        <Sparkles
          count={100}
          scale={[3, 5, 3]}
          size={1.5}
          speed={0.3}
          color="#5db0ff"
        />
      )}
    </group>
  );
};

// Pill Component with animation
const Pill = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color1 = "#ff5252",
  color2 = "#ffffff",
}) => {
  const pillRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  const [animate, setAnimate] = useState(false);

  useFrame((state, delta) => {
    if (pillRef.current) {
      // Floating animation
      pillRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1;

      // Rotate on click
      if (animate) {
        pillRef.current.rotation.z += delta * 2;
      }
    }
  });

  return (
    <group
      ref={pillRef}
      position={new THREE.Vector3(...position)}
      rotation={new THREE.Euler(...rotation)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setAnimate(!animate)}
    >
      {/* Pill body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 32]} />
        <MeshTransmissionMaterial
          color={color1}
          thickness={0.2}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={hover ? 0.95 : 0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Pill caps */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color2} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, -0.4, 0]}>
        <sphereGeometry
          args={[0.2, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]}
        />
        <meshStandardMaterial color={color2} roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Sparkles when hovered */}
      {hover && (
        <Sparkles
          count={20}
          scale={[1, 1, 1]}
          size={1}
          speed={0.4}
          color="#ffffff"
        />
      )}
    </group>
  );
};

// Molecule Component
const Molecule = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);

  // Define molecule structure - atoms and bonds
  const atoms = [
    { position: [0, 0, 0], color: "#ff0000", size: 0.3 }, // Center
    { position: [1, 0.5, 0], color: "#0088ff", size: 0.25 }, // Branch 1
    { position: [-0.2, 1, 0.7], color: "#00ff88", size: 0.25 }, // Branch 2
    { position: [-0.8, -0.5, 0.5], color: "#ffcc00", size: 0.25 }, // Branch 3
    { position: [0.4, -0.8, -0.6], color: "#ff00ff", size: 0.25 }, // Branch 4
    { position: [1.8, 0.9, 0.3], color: "#0088ff", size: 0.2 }, // Extend branch 1
    { position: [-0.7, 1.7, 1.1], color: "#00ff88", size: 0.2 }, // Extend branch 2
  ];

  // Bonds as connections between atoms
  const bonds = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 1, to: 5 },
    { from: 2, to: 6 },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the molecule slowly
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      position={new THREE.Vector3(...position)}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Atoms */}
      {atoms.map((atom, index) => (
        <mesh
          key={`atom-${index}`}
          position={new THREE.Vector3(...atom.position)}
        >
          <sphereGeometry args={[atom.size, 32, 32]} />
          <MeshWobbleMaterial
            color={atom.color}
            factor={hover ? 0.2 : 0.05}
            speed={hover ? 2 : 1}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Bonds */}
      {bonds.map((bond, index) => {
        const fromAtom = atoms[bond.from];
        const toAtom = atoms[bond.to];
        const midPoint = [
          (fromAtom.position[0] + toAtom.position[0]) / 2,
          (fromAtom.position[1] + toAtom.position[1]) / 2,
          (fromAtom.position[2] + toAtom.position[2]) / 2,
        ];

        // Calculate bond length and orientation
        const dx = toAtom.position[0] - fromAtom.position[0];
        const dy = toAtom.position[1] - fromAtom.position[1];
        const dz = toAtom.position[2] - fromAtom.position[2];
        const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

        return (
          <mesh key={`bond-${index}`} position={new THREE.Vector3(...midPoint)}>
            <cylinderGeometry args={[0.05, 0.05, length, 8]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
            <group
              rotation={[
                Math.atan2(Math.sqrt(dx * dx + dz * dz), dy) + Math.PI / 2,
                0,
                Math.atan2(dz, dx),
              ]}
            />
          </mesh>
        );
      })}

      {/* Add glow effect when hovered */}
      {hover && (
        <Sparkles
          count={40}
          scale={[3, 3, 3]}
          size={1}
          speed={0.3}
          color="#ffffff"
        />
      )}
    </group>
  );
};

// Medical Flask Component
// Medical Flask Component
const Flask = ({ position = [0, 0, 0], scale = 1, color = "#4fc3f7" }) => {
  const flaskRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null); // Use any for material ref to avoid type issues
  const [hover, setHover] = useState(false);
  const [animate, setAnimate] = useState(false);

  useFrame((state) => {
    if (flaskRef.current) {
      // Gentle floating animation
      flaskRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }

    if (materialRef.current && animate) {
      // Access the material's properties safely
      materialRef.current.distort =
        0.1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
      // MeshDistortMaterial uses 'distort' property instead of 'displacementScale'
    }
  });

  return (
    <group
      ref={flaskRef}
      position={new THREE.Vector3(...position)}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setAnimate(!animate)}
    >
      {/* Flask neck */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
        <meshPhysicalMaterial
          color="#d7e6ff"
          metalness={0.1}
          roughness={0.1}
          clearcoat={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Flask rim */}
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.12, 0.03, 16, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.3} />
      </mesh>

      {/* Flask body */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.5, 0.1, 0.3, 32]} />
        <meshPhysicalMaterial
          color="#d7e6ff"
          metalness={0.1}
          roughness={0.1}
          clearcoat={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Flask bottom */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
        <meshPhysicalMaterial
          color="#d7e6ff"
          metalness={0.1}
          roughness={0.1}
          clearcoat={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Liquid inside */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.4, 32]} />
        <MeshDistortMaterial
          ref={materialRef} // Use the ref on the material itself
          color={color}
          speed={animate ? 3 : 1}
          distort={animate ? 0.3 : 0.1} // Initial distort value
          radius={1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Bubbles */}
      {animate && (
        <Sparkles
          count={20}
          scale={[0.8, 0.4, 0.8]}
          size={0.6}
          speed={0.6}
          color="#ffffff"
          position={[0, -0.15, 0]}
        />
      )}

      {/* Highlight effect when hovered */}
      {hover && (
        <Sparkles
          count={30}
          scale={[1.5, 2, 1.5]}
          size={1}
          speed={0.3}
          color="#ffffff"
        />
      )}
    </group>
  );
};

// Medical Cross Logo Component
const MedicalLogo = ({ position = [0, 0, 0], scale = 1 }) => {
  const logoRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    if (logoRef.current) {
      // Floating animation
      logoRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      // Rotate to always face camera slightly
      logoRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group
      ref={logoRef}
      position={new THREE.Vector3(...position)}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Medical Cross */}
      <group>
        {/* Horizontal bar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.4, 0.1]} />
          <meshStandardMaterial
            color={hover ? "#00a2ff" : "#0080ff"}
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>

        {/* Vertical bar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 1.5, 0.1]} />
          <meshStandardMaterial
            color={hover ? "#00a2ff" : "#0080ff"}
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>

        {/* Center highlight */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.6}
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={hover ? 0.5 : 0.2}
          />
        </mesh>
      </group>

      {/* Add glow effect when hovered */}
      {hover && (
        <Sparkles
          count={30}
          scale={[2, 2, 1]}
          size={1}
          speed={0.3}
          color="#8cdbff"
        />
      )}
    </group>
  );
};

// Company Name Text Component
const CompanyText = ({ position = [0, 0, 0], text = "PHARMATECH" }) => {
  const textRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    if (textRef.current) {
      // Subtle movement
      textRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group
      ref={textRef}
      position={new THREE.Vector3(...position)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Float floatIntensity={0.2} speed={2} rotationIntensity={0.2}>
        <Text
          font="/fonts/helvetiker_regular.typeface.json"
          // size={0.4}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshPhysicalMaterial
            color={hover ? "#2196f3" : "#0d47a1"}
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            reflectivity={0.5}
          />
        </Text>
      </Float>

      {/* Add glow effect when hovered */}
      {hover && (
        <Sparkles
          count={50}
          scale={[5, 1, 1]}
          size={1}
          speed={0.3}
          color="#64b5f6"
        />
      )}
    </group>
  );
};

// Main Scene Component
const PharmacyScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: "100%", height: "450px", background: "#f0f9ff" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />

        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          {/* Company Title */}
          <CompanyText position={[0, 2.5, 0]} text="PHARMATECH" />

          {/* Medical Cross Logo */}
          <MedicalLogo position={[0, 0.5, 0]} scale={0.8} />

          {/* DNA Helix - One on each side */}
          <DNAHelix position={[-4.5, 0, -2]} scale={0.7} />
          <DNAHelix position={[4.5, 0, -2]} scale={0.7} />

          {/* Pills scattered around */}
          <Pill
            position={[-3, 1.5, 0]}
            rotation={[0, 0, Math.PI / 3]}
            color1="#ff5252"
            color2="#ffffff"
          />
          <Pill
            position={[3, 1.5, 0]}
            rotation={[0, 0, -Math.PI / 3]}
            color1="#4caf50"
            color2="#ffffff"
          />
          <Pill
            position={[-2, -1.8, 1]}
            rotation={[0.5, 0.3, Math.PI / 6]}
            color1="#ff9800"
            color2="#ffffff"
          />
          <Pill
            position={[2, -1.8, 1]}
            rotation={[-0.5, -0.3, -Math.PI / 6]}
            color1="#2196f3"
            color2="#ffffff"
          />

          {/* Flask */}
          <Flask position={[-2.5, -0.5, 0]} scale={1} color="#00bcd4" />
          <Flask position={[2.5, -0.5, 0]} scale={1} color="#9c27b0" />

          {/* Molecule */}
          <Molecule position={[0, -1.5, 0]} scale={1} />

          {/* Environment and lighting */}
          <>
            {/* Hemisphere light provides different colors from sky and ground */}
            <hemisphereLight
              intensity={0.7}
              color="#b1e1ff"
              groundColor="#ffffff"
              position={[0, 50, 0]}
            />

            {/* Additional directional light for crisp shadows */}
            <directionalLight
              position={[10, 10, 5]}
              intensity={0.8}
              castShadow
              shadow-mapSize={1024}
            />

            {/* Soft light from below */}
            <pointLight
              position={[0, -10, 0]}
              intensity={0.4}
              color="#ffffff"
            />
          </>
        </Suspense>

        {/* Background gradient */}
        <color attach="background" args={["#f8fbff"]} />
        <fog attach="fog" args={["#f0f8ff", 8, 25]} />
      </Canvas>

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#0d47a1",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          fontWeight: "bold",
          background: "rgba(255, 255, 255, 0.7)",
          padding: "10px 20px",
          borderRadius: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "500px",
        }}
      >
        Click on the elements to interact with them • Drag to rotate view
      </div>
    </div>
  );
};

export default PharmacyScene;
