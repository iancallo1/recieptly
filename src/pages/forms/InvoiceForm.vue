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
                <input type="text" id="business-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Your Business Name" />
              </div>
              <div>
                <label for="business-email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="business-email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label for="business-address" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="business-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Your Business Address" />
              </div>
            </div>
          </div>

          <!-- To section -->
          <div class="border rounded-lg p-4">
            <h2 class="text-lg font-semibold mb-4 text-gray-700">To:</h2>
            <div class="space-y-4">
              <div>
                <label for="client-name" class="block text-sm font-medium text-gray-700">Client Name</label>
                <input type="text" id="client-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Client Name" />
              </div>
              <div>
                <label for="client-email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="client-email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="client@email.com" />
              </div>
              <div>
                <label for="client-address" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="client-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Client Address" />
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
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="text" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="Item description" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="number" min="1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="1" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="number" min="0" step="0.01" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" placeholder="0.00" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $0.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4 text-gray-700">Summary</h2>
          <div class="border rounded-lg p-4">
            <div class="flex justify-between py-2">
              <span class="text-gray-600">Subtotal:</span>
              <span class="font-medium">$0.00</span>
            </div>
            <div class="flex justify-between py-2 border-t">
              <span class="text-gray-600">Tax (0%):</span>
              <span class="font-medium">$0.00</span>
            </div>
            <div class="flex justify-between py-2 border-t">
              <span class="text-gray-600 font-semibold">Total:</span>
              <span class="font-bold">$0.00</span>
            </div>
          </div>
        </div>

        <!-- Generate PDF Button -->
        <div class="flex justify-center">
          <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic will go here
</script> 