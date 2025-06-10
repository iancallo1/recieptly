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
            <router-link 
              to="/design" 
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Design
            </router-link>
            <router-link 
              to="/design2" 
              class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Design 2
            </router-link>
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