<template>
    <div class="t-shirt-001">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, Fog, Color, Loader, WebGLBufferRenderer, AmbientLight } from 'three';
import { ref, onMounted } from 'vue'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
//@ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = ref()

const scene = new Scene()
const camera = new PerspectiveCamera(75, 800 / 600, 0.1, 1000)
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
        renderer.setSize(800, 600)
        renderer.render(scene, camera)
        orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.enableDamping = true

    }
}


loader.load("/assets/3d/shirt_001.gltf", (gltf: any) => {
    gltf.scene.frustumCulled = true
    scene.add(gltf.scene)
    updateRender()
},
    (loading : any) => {
        console.log(`Loading ${loading.loaded/ loading.total * 100}`)
    })


function loop() {
    updateRender()
    orbitControls.update()
    requestAnimationFrame(loop)
}


onMounted(() => {
    renderScene()
    loop()
})




</script>

<style scoped></style>