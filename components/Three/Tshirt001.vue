<template>
    <div class="t-shirt-001">
        <div class="relative w-[800px] h-[600px] rounded-xl overflow-clip">
            <canvas class="" ref="canvas">

            </canvas>

            <div v-show="!loading"
                class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black/80">
                <img src="@/assets/svg/3d.svg" class="w-[72px] animate-pulse" alt="" srcset="">
                <p class="text-white font-semibold text-[14px]">Loading {{ loadingPercentage }}</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, Fog, Color, Loader, WebGLBufferRenderer, AmbientLight } from 'three';
import { ref, onMounted } from 'vue'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

interface Props {
    width?: number;
    height?: number;
    model?: string;
    fov?: number;
}

const { width, height, model, fov } = defineProps<Props>()

const loadingPercentage = ref(0)
const loading = computed(() => { if (loadingPercentage.value < 100) return false; else { return true }; })
const aspectRatio = computed(() => {
    if (width && height) return width / height
    else return 800 / 600
})


const canvas = ref()

const scene = new Scene()
const camera = new PerspectiveCamera(fov ?? 70, aspectRatio.value, 0.1, 1000)
camera.position.set(0, 0, 3)
scene.add(camera)
const fogColor = new Color("#999")
// scene.fog = new Fog(fogColor, 1, 75)
scene.background = fogColor
const light = new AmbientLight()
scene.add(light)

let orbitControls: OrbitControls

//Loading GLTF
const loader = new GLTFLoader()


let renderer: WebGLRenderer

function updateRender() {
    renderer.render(scene, camera)
}

function renderScene() {
    if (canvas.value) {
        renderer = new WebGLRenderer({
            canvas: canvas.value,
            antialias: true,
            alpha: true
        })
        renderer.setPixelRatio(devicePixelRatio)
        renderer.setSize(width ?? 800, height ?? 600)
        renderer.render(scene, camera)
        orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.enableDamping = true
        orbitControls.autoRotate = true
        orbitControls.enableRotate = false
        orbitControls.enableZoom = false
        orbitControls.enablePan = false
        orbitControls.autoRotateSpeed = 5
        orbitControls.maxAzimuthAngle = Math.PI / 4
        orbitControls.minAzimuthAngle = -Math.PI / 4

    }
}

function loadModel() {
    loader.load("/assets/3d/shirt_003.glb", (gltf: any) => {
        // gltf.scene.frustumCulled = true
        scene.add(gltf.scene)
        updateRender()
    },
        (xhr: any) => {
            loadingPercentage.value = parseFloat((xhr.loaded / xhr.total * 100).toFixed(2));
            console.log(`Loading ${xhr.loaded / xhr.total * 100}`)
        })
}




function loop() {
    updateRender()
    orbitControls.update()
    if (orbitControls.getAzimuthalAngle() >= orbitControls.maxAzimuthAngle) {
        orbitControls.autoRotateSpeed = 5
    } else if (orbitControls.getAzimuthalAngle() <= orbitControls.minAzimuthAngle) {
        orbitControls.autoRotateSpeed = -5
    }
    requestAnimationFrame(loop)
}


onMounted(() => {
    renderScene()
    loop()
    loadModel()
})


function resetCamera() {

    orbitControls.reset()
}


</script>

<style scoped></style>