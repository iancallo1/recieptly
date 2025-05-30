<template>
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex space-x-8">
            <router-link 
              to="/receipts" 
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Receipts
            </router-link>
            <button class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Design
            </button>
            <router-link 
              to="/history" 
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              History
            </router-link>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  // Navigation logic will go here
  </script>