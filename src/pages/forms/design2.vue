is calling double <template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
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

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-gray-800 px-6 py-4">
            <h1 class="text-2xl font-bold text-white text-center">Customize Your Receipt Design</h1>
          </div>

          <div class="p-6 space-y-8">
            <!-- Header Image Upload -->
            <div class="space-y-4">
              <h2 class="text-lg font-semibold text-gray-700">Header Image</h2>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div class="space-y-4">
                  <div class="flex justify-center">
                    <div class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 text-sm text-gray-600">
                        <label for="header-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a header image</span>
                          <input id="header-upload" name="header-upload" type="file" class="sr-only" accept="image/*" @change="handleHeaderUpload">
                        </label>
                      </p>
                      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div v-if="headerPreview" class="mt-4">
                    <img :src="headerPreview" class="max-h-32 mx-auto" alt="Header preview" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Logo Upload -->
            <div class="space-y-4">
              <h2 class="text-lg font-semibold text-gray-700">Logo</h2>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div class="space-y-4">
                  <div class="flex justify-center">
                    <div class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 text-sm text-gray-600">
                        <label for="logo-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a logo</span>
                          <input id="logo-upload" name="logo-upload" type="file" class="sr-only" accept="image/*" @change="handleLogoUpload">
                        </label>
                      </p>
                      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div v-if="logoPreview" class="mt-4">
                    <img :src="logoPreview" class="max-h-32 mx-auto" alt="Logo preview" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Image Upload -->
            <div class="space-y-4">
              <h2 class="text-lg font-semibold text-gray-700">Footer Image</h2>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div class="space-y-4">
                  <div class="flex justify-center">
                    <div class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 text-sm text-gray-600">
                        <label for="footer-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a footer image</span>
                          <input id="footer-upload" name="footer-upload" type="file" class="sr-only" accept="image/*" @change="handleFooterUpload">
                        </label>
                      </p>
                      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div v-if="footerPreview" class="mt-4">
                    <img :src="footerPreview" class="max-h-32 mx-auto" alt="Footer preview" />
                  </div>
                </div>
              </div>
            </div>

            <!-- QR Code Upload -->
            <div class="space-y-4">
              <h2 class="text-lg font-semibold text-gray-700">QR Code</h2>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div class="space-y-4">
                  <div class="flex justify-center">
                    <div class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 text-sm text-gray-600">
                        <label for="qr-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a QR code</span>
                          <input id="qr-upload" name="qr-upload" type="file" class="sr-only" accept="image/*" @change="handleQRUpload">
                        </label>
                      </p>
                      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div v-if="qrPreview" class="mt-4">
                    <img :src="qrPreview" class="max-h-32 mx-auto" alt="QR code preview" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="flex justify-center">
              <button 
                @click="saveDesign"
                type="button"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const headerPreview = ref(null)
const logoPreview = ref(null)
const footerPreview = ref(null)
const qrPreview = ref(null)

const handleHeaderUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      headerPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleFooterUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      footerPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleQRUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      qrPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const saveDesign = () => {
  // Save the design settings to localStorage
  const design = {
    header: headerPreview.value,
    logo: logoPreview.value,
    footer: footerPreview.value,
    qrCode: qrPreview.value
  }
  localStorage.setItem('receiptDesign', JSON.stringify(design))
}
</script>
