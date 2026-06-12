<template>
  <canvas ref="matrixCanvas" class="absolute inset-0 z-0 pointer-events-none opacity-20"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const matrixCanvas = ref(null)
let ctx, animationFrame
const chars = "日01世代アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split("")
const fontSize = 16
let columns, rows, cells = []

const initGrid = () => {
  const canvas = matrixCanvas.value
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  columns = Math.floor(canvas.width / fontSize)
  rows = Math.floor(canvas.height / fontSize)
  
  cells = []
  for (let i = 0; i < columns * rows; i++) {
    cells.push({
      char: chars[Math.floor(Math.random() * chars.length)],
      opacity: 0,
      targetOpacity: 0,
      timer: Math.random() * 100
    })
  }
}

const draw = () => {
  ctx.clearRect(0, 0, matrixCanvas.value.width, matrixCanvas.value.height)
  ctx.font = `${fontSize}px monospace`
  
  cells.forEach((cell, i) => {
    const x = (i % columns) * fontSize
    const y = Math.floor(i / columns) * fontSize

    // Lógica de parpadeo aleatorio
    if (Math.random() > 0.995) {
      cell.targetOpacity = Math.random() * 0.8 + 0.2
    } else if (Math.random() > 0.95) {
      cell.targetOpacity = 0
    }

    // Transición suave de opacidad
    cell.opacity += (cell.targetOpacity - cell.opacity) * 0.05

    if (cell.opacity > 0.05) {
      ctx.fillStyle = `rgba(147, 197, 253, ${cell.opacity})` // Azul suave
      ctx.fillText(cell.char, x, y)
    }
  })
  animationFrame = requestAnimationFrame(draw)
}

onMounted(() => {
  ctx = matrixCanvas.value.getContext('2d')
  initGrid()
  draw()
  window.addEventListener('resize', initGrid)
})

onUnmounted(() => {
  window.removeEventListener('resize', initGrid)
  cancelAnimationFrame(animationFrame)
})
</script>