<template>
  <div class="max-w-3xl mx-auto py-8">
    <!-- Toast Notification -->
    <div
      v-if="showSuccess"
      class="fixed top-6 right-6 z-50 bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded shadow-lg transition-all"
      style="min-width: 220px;"
    >
      Invoice saved successfully!
    </div>
    <div v-if="savedInvoices.length === 0" class="text-center text-gray-500 py-4">
      No saved invoices yet
    </div>
    <div v-else>
      <!-- Top Bar for Actions -->
      <div class="flex items-center justify-end mb-4 space-x-2" style="min-height: 44px;">
        <template v-if="selectedIds.length > 0">
          <button
            @click="showDeleteModal = true"
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            style="min-width: 140px;"
          >
            Delete Selected ({{ selectedIds.length }})
          </button>
        </template>
        <!-- Add more buttons here in the future -->
      </div>
      <div
        class="overflow-y-auto"
        style="max-height: 75vh;"
      >
        <div
          v-for="invoice in sortedInvoices"
          :key="invoice.id"
          class="border-2 border-gray-700 rounded-lg p-4 mb-6 flex justify-between items-start hover:bg-gray-50"
        >
          <div class="flex items-start space-x-3">
            <input
              type="checkbox"
              :value="invoice.id"
              v-model="selectedIds"
              class="mt-1 h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
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
          </div>
          <div class="flex space-x-4 mt-2">
            <button @click="loadInvoice(invoice)" class="text-blue-600 hover:underline">Load</button>
            <button @click="showSingleDeleteModal(invoice.id)" class="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <Modal
      v-model="showDeleteModal"
      :title="deleteModalTitle"
      @confirm="handleDeleteConfirm"
    >
      <p class="text-gray-700">
        {{ deleteModalMessage }}
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import Modal from '../modals/modals.vue'

const savedInvoices = ref([])
const showSuccess = ref(false)
const route = useRoute()
const selectedIds = ref([])
const showDeleteModal = ref(false)
const deleteModalTitle = ref('')
const deleteModalMessage = ref('')
const invoiceToDelete = ref(null)

const sortedInvoices = computed(() => {
  // Sort by id (timestamp) descending
  return [...savedInvoices.value].sort((a, b) => b.id - a.id)
})

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

const showSingleDeleteModal = (id) => {
  invoiceToDelete.value = id
  deleteModalTitle.value = 'Delete Invoice'
  deleteModalMessage.value = 'Are you sure you want to delete this invoice?'
  showDeleteModal.value = true
}

const handleDeleteConfirm = () => {
  if (invoiceToDelete.value) {
    // Single invoice deletion
    savedInvoices.value = savedInvoices.value.filter(inv => inv.id !== invoiceToDelete.value)
    selectedIds.value = selectedIds.value.filter(selectedId => selectedId !== invoiceToDelete.value)
  } else {
    // Multiple invoices deletion
    savedInvoices.value = savedInvoices.value.filter(inv => !selectedIds.value.includes(inv.id))
    selectedIds.value = []
  }
  localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices.value))
  invoiceToDelete.value = null
}

// Show delete modal for multiple invoices
watch(showDeleteModal, (newValue) => {
  if (newValue && !invoiceToDelete.value) {
    deleteModalTitle.value = 'Delete Selected Invoices'
    deleteModalMessage.value = `Are you sure you want to delete ${selectedIds.value.length} selected invoice(s)?`
  }
})
</script>
