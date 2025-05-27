<template>
  <div class="flex justify-center items-start w-full">
    <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full my-8">
      <!-- Header -->
      <div class="bg-gray-800 px-6 py-4">
        <h1 class="text-2xl font-bold text-white text-center">Simple Invoice Generator</h1>
      </div>

      <!-- Main content -->
      <div class="p-6">
        <!-- From and To sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <!-- From section -->
          <div class="border rounded-lg p-4">
            <h2 class="text-lg font-semibold mb-4 text-gray-700">From:</h2>
            <div class="space-y-4">
              <div>
                <label for="business-name" class="block text-sm font-medium text-gray-700">Business Name</label>
                <input v-model="formData.from.businessName" type="text" id="business-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Your Business Name" />
              </div>
              <div>
                <label for="business-email" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="formData.from.email" type="email" id="business-email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label for="business-address" class="block text-sm font-medium text-gray-700">Address</label>
                <input v-model="formData.from.address" type="text" id="business-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Your Business Address" />
              </div>
            </div>
          </div>

          <!-- To section -->
          <div class="border rounded-lg p-4">
            <h2 class="text-lg font-semibold mb-4 text-gray-700">To:</h2>
            <div class="space-y-4">
              <div>
                <label for="client-name" class="block text-sm font-medium text-gray-700">Client Name</label>
                <input v-model="formData.to.clientName" type="text" id="client-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Client Name" />
              </div>
              <div>
                <label for="client-email" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="formData.to.email" type="email" id="client-email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="client@email.com" />
              </div>
              <div>
                <label for="client-address" class="block text-sm font-medium text-gray-700">Address</label>
                <input v-model="formData.to.address" type="text" id="client-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Client Address" />
              </div>
            </div>
          </div>
        </div>

        <!-- Invoice Items Table -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4 text-gray-700">Invoice Items</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(item, index) in formData.items" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input v-model="item.description" type="text" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Item description" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input v-model.number="item.quantity" type="number" min="1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="1" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input v-model.number="item.rate" type="number" min="0" step="0.01" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="0.00" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${{ calculateItemTotal(item) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <button @click="addItem" class="mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
              + Add Item
            </button>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4 text-gray-700">Summary</h2>
          <div class="border rounded-lg p-4">
            <div class="flex justify-between py-2">
              <span class="text-gray-600">Subtotal:</span>
              <span class="font-medium">${{ calculateSubtotal }}</span>
            </div>
            <div class="flex justify-between py-2 border-t">
              <span class="text-gray-600">Tax ({{ taxRate }}%):</span>
              <span class="font-medium">${{ calculateTax }}</span>
            </div>
            <div class="flex justify-between py-2 border-t">
              <span class="text-gray-600 font-semibold">Total:</span>
              <span class="font-bold">${{ calculateTotal }}</span>
            </div>
          </div>
        </div>

        <!-- Generate PDF Button -->
        <div class="flex justify-center">
          <button @click="generatePDF" type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  from: {
    businessName: '',
    email: '',
    address: ''
  },
  to: {
    clientName: '',
    email: '',
    address: ''
  },
  items: [
    {
      description: '',
      quantity: 1,
      rate: 0
    }
  ]
})

const taxRate = ref(0)

const calculateItemTotal = (item) => {
  return ((item.quantity || 0) * (item.rate || 0)).toFixed(2)
}

const calculateSubtotal = computed(() => {
  return formData.value.items.reduce((sum, item) => {
    return sum + (item.quantity || 0) * (item.rate || 0)
  }, 0).toFixed(2)
})

const calculateTax = computed(() => {
  return (calculateSubtotal.value * (taxRate.value / 100)).toFixed(2)
})

const calculateTotal = computed(() => {
  return (parseFloat(calculateSubtotal.value) + parseFloat(calculateTax.value)).toFixed(2)
})

const addItem = () => {
  formData.value.items.push({
    description: '',
    quantity: 1,
    rate: 0
  })
}

const generatePDF = () => {
  const printWindow = window.open('', '_blank')
  
  // Create the HTML content for the PDF
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Invoice</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
          }
          .invoice-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
          }
          .from-to {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }
          .from, .to {
            width: 45%;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #f5f5f5;
            font-weight: bold;
          }
          .summary {
            margin-top: 30px;
            border-top: 2px solid #333;
            padding-top: 20px;
          }
          .summary-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            font-size: 16px;
          }
          .total {
            font-weight: bold;
            font-size: 20px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
          }
          @media print {
            body {
              padding: 0;
            }
            .no-print {
              display: none;
            }
            .invoice-container {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="invoice-container">
          <div class="header">
            <h1>INVOICE</h1>
          </div>
          
          <div class="from-to">
            <div class="from">
              <h2>From:</h2>
              <p>${formData.value.from.businessName}</p>
              <p>${formData.value.from.email}</p>
              <p>${formData.value.from.address}</p>
            </div>
            
            <div class="to">
              <h2>To:</h2>
              <p>${formData.value.to.clientName}</p>
              <p>${formData.value.to.email}</p>
              <p>${formData.value.to.address}</p>
            </div>
          </div>
          
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
              ${formData.value.items.map(item => `
                <tr>
                  <td>${item.description}</td>
                  <td>${item.quantity}</td>
                  <td>$${item.rate}</td>
                  <td>$${calculateItemTotal(item)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="summary">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>$${calculateSubtotal.value}</span>
            </div>
            <div class="summary-row">
              <span>Tax (${taxRate.value}%):</span>
              <span>$${calculateTax.value}</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>$${calculateTotal.value}</span>
            </div>
          </div>
        </div>
        
        <div class="no-print" style="text-align: center; margin-top: 20px;">
          <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
            Print Invoice
          </button>
        </div>
      </body>
    </html>
  `
  
  printWindow.document.write(content)
  printWindow.document.close()
}
</script> 