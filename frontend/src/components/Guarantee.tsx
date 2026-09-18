import React from 'react';
import '../estilos/Guarantee.css';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="section guarantee-section" id="garantia">
      <div className="container">
        <div className="glass guarantee-card" id="guarantee-container-box">
          <div className="guarantee-icon-wrapper">
            <ShieldCheck size={40} style={{ color: 'var(--color-cyan)' }} />
          </div>
          <div>
            <h3 className="guarantee-title">Garantia de Homologação: Risco Zero</h3>
            <p className="guarantee-text">
              Cuidamos de todo o processo burocrático e técnico do início ao fim. Se a sua BM (Business Manager) do Facebook não for homologada ou a sua API Oficial não puder ser ativada por quaisquer problemas técnicos ou incompatibilidades da Meta que não possamos resolver, <strong>devolvemos 100% do valor do seu setup</strong>. Sem letras miúdas. Seu risco é zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
