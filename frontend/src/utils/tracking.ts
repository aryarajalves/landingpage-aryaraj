import { API_URL } from '../config';

export const trackClick = async (buttonId: string) => {
  try {
    await fetch(`${API_URL}/api/track/click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ button_id: buttonId }),
    });
  } catch (error) {
    console.error(`Falha ao registrar clique no botão ${buttonId}:`, error);
  }
};

