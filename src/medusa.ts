// imports 
import Medusa from "@medusajs/medusa-js"

// new client 
const medusa = new Medusa({
  baseUrl: 'https://display-store-backend-server.onrender.com' || import.meta.env.MEDUSA_BACKEND_URL,
  maxRetries: 3
})

// export 
export default medusa;