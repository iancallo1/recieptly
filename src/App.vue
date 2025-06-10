<script setup>
import Header from './pages/header.vue'
import Footer from './pages/footer.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global styles can be added here if needed */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


