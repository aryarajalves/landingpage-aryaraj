import { API_URL } from '../config';

export const trackClick = async (buttonId: string, pagePath?: string) => {
  try {
    const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    await fetch(`${API_URL}/api/track/click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        button_id: buttonId,
        page_path: currentPath
      }),
    });
  } catch (error) {
    console.error(`Falha ao registrar clique no botão ${buttonId}:`, error);
  }
};
