import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const getPoint = () => {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const x = r * sinPhi * cosTheta;
  const y = r * sinPhi * sinTheta;
  const z = r * cosPhi;
  return { x, y, z };
};

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const planeRef = useRef<THREE.Points | null>(null);

  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(
      70,
      container.offsetWidth / container.offsetHeight,
      0.01,
      1000
    );
    camera.position.set(0, 0, 2);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    controlsRef.current = controls;

    addObjects();
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const resize = () => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;

    rendererRef.current.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    cameraRef.current.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
    cameraRef.current.updateProjectionMatrix();
  };

  const onMouseMove = (event: MouseEvent) => {
    mouseXRef.current = (event.clientX / window.innerWidth) * 2 - 1;
    mouseYRef.current = -(event.clientY / window.innerHeight) * 2 + 1;

    if (cameraRef.current) {
      cameraRef.current.rotation.x = mouseYRef.current * 0.2;
      cameraRef.current.rotation.y = mouseXRef.current * 0.2;
    }
  };

  const addObjects = () => {
    materialRef.current = new THREE.PointsMaterial({
      size: 0.01,
      sizeAttenuation: true,
      alphaTest: 0.5,
      transparent: true,
    });

    geometryRef.current = new THREE.BufferGeometry();
    const vertices: number[] = [];

    for (let i = 0; i < 5000; i++) {
      const p = getPoint();
      vertices.push(4 * p.x, 4 * p.y, 4 * p.z);
    }

    geometryRef.current.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    planeRef.current = new THREE.Points(geometryRef.current, materialRef.current);
    if (sceneRef.current && planeRef.current) {
      sceneRef.current.add(planeRef.current);
    }
  };

  return <div id="container" ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Background;
