<template>
  <canvas ref="canvas" class="pointer-events-none absolute inset-0 z-10 opacity-60"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx, animationFrame
let particles = []

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 5 + 2
    this.speedX = Math.random() * 2 - 1
    this.speedY = Math.random() * 2 - 1
    // Colores tipo "Gfk Lab" (Azul, Morado, Emerald)
    const colors = ['#3b82f6', '#8b5cf6', '#10b981']
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.alpha = 1
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.alpha > 0.01) this.alpha -= 0.02 // Velocidad de desvanecimiento
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.shadowBlur = 15
    ctx.shadowColor = this.color
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

const handleMouseMove = (e) => {
  // Crear 3 partículas por cada movimiento para que la estela sea densa
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(e.clientX, e.clientY))
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw()
    
    if (particles[i].alpha <= 0.01) {
      particles.splice(i, 1)
      i--
    }
  }
  animationFrame = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  }
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  handleResize() // Ajustar al inicio

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize) // Escuchar cambios de pantalla
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize) // Limpiar el evento
  cancelAnimationFrame(animationFrame)
})
</script>