<script setup>
import Header from './pages/header.vue'
import Footer from './pages/footer.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global styles can be added here if needed */
</style>


