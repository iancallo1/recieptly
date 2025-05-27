<template>
  <div class="invoice-pdf">
    <div class="invoice-content">
      <div class="header">
        <h1>Invoice</h1>
      </div>
      
      <div class="from-to">
        <div class="from">
          <h2>From:</h2>
          <p>{{ formData.from.businessName }}</p>
          <p>{{ formData.from.email }}</p>
          <p>{{ formData.from.address }}</p>
        </div>
        
        <div class="to">
          <h2>To:</h2>
          <p>{{ formData.to.clientName }}</p>
          <p>{{ formData.to.email }}</p>
          <p>{{ formData.to.address }}</p>
        </div>
      </div>
      
      <div class="items">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formData.items" :key="index">
              <td>{{ item.description }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ item.rate }}</td>
              <td>${{ calculateItemTotal(item) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="summary">
        <div class="subtotal">
          <span>Subtotal:</span>
          <span>${{ calculateSubtotal }}</span>
        </div>
        <div class="tax">
          <span>Tax ({{ taxRate }}%):</span>
          <span>${{ calculateTax }}</span>
        </div>
        <div class="total">
          <span>Total:</span>
          <span>${{ calculateTotal }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  taxRate: {
    type: Number,
    default: 0
  }
})

const calculateItemTotal = (item) => {
  return ((item.quantity || 0) * (item.rate || 0)).toFixed(2)
}

const calculateSubtotal = computed(() => {
  return props.formData.items.reduce((sum, item) => {
    return sum + (item.quantity || 0) * (item.rate || 0)
  }, 0).toFixed(2)
})

const calculateTax = computed(() => {
  return (calculateSubtotal.value * (props.taxRate / 100)).toFixed(2)
})

const calculateTotal = computed(() => {
  return (parseFloat(calculateSubtotal.value) + parseFloat(calculateTax.value)).toFixed(2)
})
</script>

<style scoped>
.invoice-pdf {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.from-to {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f5f5f5;
}

.summary {
  margin-top: 20px;
  border-top: 2px solid #ddd;
  padding-top: 20px;
}

.subtotal, .tax, .total {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.total {
  font-weight: bold;
  font-size: 1.2em;
}
</style> 