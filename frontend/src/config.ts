const isProd = import.meta.env.PROD;
export const API_URL = import.meta.env.VITE_API_URL !== undefined && import.meta.env.VITE_API_URL !== ''
  ? import.meta.env.VITE_API_URL
  : (isProd ? '' : 'http://localhost:8001');

export const WHATSAPP_NUMBER = '558598259497';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Podemos%20conversar%20sobre%20a%20implementa%C3%A7%C3%A3o%20da%20Api%20Oficial%20do%20WhatsApp%20na%20minha%20empresa%3F`;

