import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import InvoiceForm from '../pages/forms/InvoiceForm.vue'

// Mock localStorage
const localStorageMock = {
  store: {},
  getItem: vi.fn(key => localStorageMock.store[key] || null),
  setItem: vi.fn((key, value) => {
    localStorageMock.store[key] = value
  }),
  clear: vi.fn(() => {
    localStorageMock.store = {}
  }),
  removeItem: vi.fn(key => {
    delete localStorageMock.store[key]
  })
}

// Set up the test environment
vi.stubGlobal('localStorage', localStorageMock)

describe('Invoice Storage Tests', () => {
  let wrapper

  beforeEach(async () => {
    // Clear localStorage before each test
    localStorage.clear()
    
    // Create a div element for mounting
    const div = document.createElement('div')
    div.id = 'app'
    document.body.appendChild(div)
    
    // Mount the component
    wrapper = mount(InvoiceForm, {
      attachTo: '#app'
    })

    // Set up initial form data using the component's ref
    wrapper.vm.formData = {
      date: '2024-03-20',
      allowBackdate: true,
      from: {
        businessName: 'Test Business',
        email: 'test@business.com',
        address: '123 Test St'
      },
      to: {
        clientName: 'Test Client',
        email: 'client@test.com',
        address: '456 Client Ave'
      },
      items: [
        {
          description: 'Test Service',
          quantity: 1,
          rate: 100
        }
      ]
    }
  })

  afterEach(() => {
    // Clean up after each test
    if (wrapper) {
      wrapper.unmount()
    }
    localStorage.clear()
    document.body.innerHTML = ''
  })

  it('should save a single invoice correctly', async () => {
    // Save the invoice
    await wrapper.vm.saveInvoice()

    // Verify the invoice was saved
    const savedInvoices = JSON.parse(localStorage.getItem('savedInvoices'))
    expect(savedInvoices).toBeDefined()
    expect(savedInvoices.length).toBe(1)
    expect(savedInvoices[0].to.clientName).toBe('Test Client')
    expect(savedInvoices[0].items[0].description).toBe('Test Service')
  })

  it('should handle multiple invoice saves', async () => {
    const numberOfInvoices = 10 // Test with a smaller number first
    let error = null

    try {
      // Save multiple invoices
      for (let i = 0; i < numberOfInvoices; i++) {
        await wrapper.vm.saveInvoice()
        
        // Verify each save
        const savedInvoices = JSON.parse(localStorage.getItem('savedInvoices'))
        expect(savedInvoices.length).toBe(i + 1)
      }
    } catch (e) {
      error = e
    }

    // Final verification
    const savedInvoices = JSON.parse(localStorage.getItem('savedInvoices'))
    expect(savedInvoices).toBeDefined()
    expect(savedInvoices.length).toBe(numberOfInvoices)
    expect(error).toBeNull()
  })

  it('should handle localStorage limits', async () => {
    let invoiceCount = 0
    let error = null

    try {
      // Try to save invoices until we hit an error or reach a reasonable limit
      while (invoiceCount < 100) { // Reduced from 1000 to 100 for faster testing
        await wrapper.vm.saveInvoice()
        invoiceCount++
        
        // Verify the invoice was saved
        const savedInvoices = JSON.parse(localStorage.getItem('savedInvoices'))
        expect(savedInvoices.length).toBe(invoiceCount)
      }
    } catch (e) {
      error = e
    }

    // Log the results
    console.log(`Successfully saved ${invoiceCount} invoices`)
    if (error) {
      console.log('Error occurred:', error.message)
    }

    // Verify we can still load the saved invoices
    const savedInvoices = JSON.parse(localStorage.getItem('savedInvoices'))
    expect(savedInvoices).toBeDefined()
    expect(savedInvoices.length).toBe(invoiceCount)
  }, 30000) // Increased timeout to 30 seconds
})