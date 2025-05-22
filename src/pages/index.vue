<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8">
        <InvoiceForm />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import InvoiceForm from './forms/InvoiceForm.vue'
import Header from './header.vue'
import Footer from './footer.vue'
</script>

<style>
/* Additional styles can be added here if needed */
</style>