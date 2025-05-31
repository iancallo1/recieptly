<template>
  <div class="max-w-3xl mx-auto py-8">
    <div v-if="showSuccess" class="mb-6 p-4 bg-green-100 text-green-800 rounded">
      Invoice saved successfully!
    </div>
    <div v-if="savedInvoices.length === 0" class="text-center text-gray-500 py-4">
      No saved invoices yet
    </div>
    <div v-for="invoice in savedInvoices" :key="invoice.id" class="border rounded-lg p-4 mb-6 flex justify-between items-start hover:bg-gray-50">
      <div>
        <h3 class="font-medium text-gray-900 mb-1">
          {{ invoice.type === 'invoice' ? 'Invoice' : 'Quote' }} - <span class="font-bold">{{ invoice.date }}</span>
        </h3>
        <p class="text-sm text-gray-600 mb-1">
          To: {{ invoice.to.clientName }}
        </p>
        <p class="text-sm text-gray-600">
          Total: ${{ invoice.total }}
        </p>
      </div>
      <div class="flex space-x-4 mt-2">
        <button @click="loadInvoice(invoice)" class="text-blue-600 hover:underline">Load</button>
        <button @click="deleteInvoice(invoice.id)" class="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const savedInvoices = ref([])
const showSuccess = ref(false)
const route = useRoute()

function loadInvoices() {
  const saved = localStorage.getItem('savedInvoices')
  savedInvoices.value = saved ? JSON.parse(saved) : []
}

onMounted(() => {
  loadInvoices()
  if (route.query.saved === '1') {
    showSuccess.value = true
    setTimeout(() => { showSuccess.value = false }, 3000)
  }
})

// Watch for route changes (including query changes)
watch(
  () => route.fullPath,
  () => {
    loadInvoices()
    if (route.query.saved === '1') {
      showSuccess.value = true
      setTimeout(() => { showSuccess.value = false }, 3000)
    }
  }
)

const loadInvoice = (invoice) => {
  sessionStorage.setItem('loadInvoice', JSON.stringify(invoice))
  window.location.href = '/receipts'
}

const deleteInvoice = (id) => {
  if (confirm('Are you sure you want to delete this invoice?')) {
    savedInvoices.value = savedInvoices.value.filter(inv => inv.id !== id)
    localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices.value))
  }
}
</script>
