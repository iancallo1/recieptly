<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <div class="design-workspace bg-gray-100 flex flex-row min-h-[calc(100vh-4rem-3.5rem)]">
        <!-- Left Sidebar - Elements Panel -->
        <aside class="w-64 bg-white shadow-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Elements</h2>
          <div class="space-y-2">
            <div class="element-category">
              <h3 class="text-sm font-medium text-gray-700 mb-2">Basic Elements</h3>
              <div class="space-y-2">
                <div class="element-item p-2 bg-gray-50 rounded cursor-move hover:bg-gray-100">
                  Header
                </div>
                <div class="element-item p-2 bg-gray-50 rounded cursor-move hover:bg-gray-100">
                  Logo
                </div>
                <div class="element-item p-2 bg-gray-50 rounded cursor-move hover:bg-gray-100">
                  Footer
                </div>
                <div class="element-item p-2 bg-gray-50 rounded cursor-move hover:bg-gray-100">
                  QR Code
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main Design Canvas -->
        <section class="flex-1 p-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="design-canvas min-h-[500px] border-2 border-dashed border-gray-300 rounded-lg">
                <div class="text-center text-gray-500 py-8">
                  Drag elements here to start designing
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Right Sidebar - Properties Panel -->
        <aside class="w-64 bg-white shadow-lg p-4">
          <h2 class="text-lg font-semibold mb-4">Properties</h2>
          <div class="text-gray-500 text-sm">
            Select an element to edit its properties
          </div>
        </aside>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../header.vue'
import Footer from '../footer.vue'

// State for managing elements
const canvasElements = ref([])
const selectedElement = ref(null)

// Methods will be implemented in the next steps
const handleCanvasChange = () => {
  // Will handle drag and drop changes
}

const selectElement = (element) => {
  selectedElement.value = element
}
</script>

<style scoped>
.design-workspace {
  /* No grid, use flex for horizontal layout */
}

.element-item {
  user-select: none;
}
</style>
