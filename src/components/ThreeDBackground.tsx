
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeDBackgroundProps {
  className?: string;
}

const ThreeDBackground = ({ className = "" }: ThreeDBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const spheresRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create spheres
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const aquamarineColor = new THREE.Color("#7FFFD4");
    
    const createSphere = (position: [number, number, number], scale: number) => {
      const material = new THREE.MeshBasicMaterial({
        color: aquamarineColor,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(...position);
      sphere.scale.set(scale, scale, scale);
      sphere.userData = {
        rotationSpeed: {
          x: Math.random() * 0.01 - 0.005,
          y: Math.random() * 0.01 - 0.005,
          z: Math.random() * 0.01 - 0.005,
        },
      };
      
      scene.add(sphere);
      spheresRef.current.push(sphere);
    };

    // Create multiple spheres
    createSphere([-15, 10, -10], 5);
    createSphere([15, -10, -15], 7);
    createSphere([0, -15, -5], 3);
    
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      // Rotate spheres
      spheresRef.current.forEach((sphere) => {
        sphere.rotation.x += sphere.userData.rotationSpeed.x;
        sphere.rotation.y += sphere.userData.rotationSpeed.y;
        sphere.rotation.z += sphere.userData.rotationSpeed.z;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      spheresRef.current.forEach((sphere) => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
      
      spheresRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className={`fixed inset-0 z-0 ${className}`} />;
};

export default ThreeDBackground;
