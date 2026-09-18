import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FloatingWhatsApp from '../FloatingWhatsApp';
import { WHATSAPP_LINK } from '../../config';
import * as tracking from '../../utils/tracking';

describe('FloatingWhatsApp Component', () => {
  it('renderiza o botão flutuante e o balão de mensagem', () => {
    render(<FloatingWhatsApp />);

    expect(screen.getByTestId('floating-whatsapp-container')).toBeInTheDocument();
    expect(screen.getByTestId('floating-whatsapp-tooltip')).toBeInTheDocument();
    expect(screen.getByText(/Online Agora/i)).toBeInTheDocument();
    expect(screen.getByTestId('floating-whatsapp-btn')).toHaveAttribute('href', WHATSAPP_LINK);
  });

  it('permite fechar o balão de mensagem ao clicar no X', () => {
    render(<FloatingWhatsApp />);

    const closeBtn = screen.getByTestId('floating-whatsapp-close');
    fireEvent.click(closeBtn);

    expect(screen.queryByTestId('floating-whatsapp-tooltip')).not.toBeInTheDocument();
  });

  it('dispara a função de tracking ao clicar no botão flutuante', () => {
    const trackSpy = vi.spyOn(tracking, 'trackClick').mockImplementation(() => {});
    render(<FloatingWhatsApp />);

    const btn = screen.getByTestId('floating-whatsapp-btn');
    fireEvent.click(btn);

    expect(trackSpy).toHaveBeenCalledWith('floating_whatsapp');
    trackSpy.mockRestore();
  });
});
