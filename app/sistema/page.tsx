const opportunities = [
  ['Construtora Horizonte', 'Conexões e mangueiras hidráulicas', 'Novo'],
  ['Agrovale Máquinas', 'Manutenção de unidade hidráulica', 'Em atendimento'],
  ['Transportes Ribeiro', 'Cilindro hidráulico industrial', 'Orçamento'],
];

const funnel = [['Novos', 7], ['Em atendimento', 5], ['Orçamento', 4], ['Negociação', 2]];

export default function SistemaPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">WG</span><span>WG Hidráulica<small>Central comercial</small></span></div>
        <nav aria-label="Navegação principal">
          <a className="nav-item active" href="#inicio">▦ <span>Visão geral</span></a>
          <a className="nav-item" href="#oportunidades">◎ <span>Oportunidades</span></a>
          <a className="nav-item" href="#orcamentos">▤ <span>Orçamentos</span></a>
          <a className="nav-item" href="#agenda">□ <span>Agenda</span></a>
          <a className="nav-item" href="#automacoes">⌁ <span>Automações</span></a>
        </nav>
        <div className="profile"><span className="avatar">AO</span><span>Alex Oliveira<small>Administrador</small></span></div>
      </aside>

      <section className="workspace" id="inicio">
        <header className="topbar">
          <div><p className="eyebrow">WG Hidráulica</p><h1>Central comercial</h1><p className="subtitle">Atendimentos, propostas e automações em um só lugar.</p></div>
          <button type="button" className="primary-button">+ Nova oportunidade</button>
        </header>

        <section className="metrics" aria-label="Resumo comercial">
          <article><p>Oportunidades abertas</p><strong>18</strong><small>4 novas nesta semana</small></article>
          <article><p>Orçamentos pendentes</p><strong>6</strong><small>2 aguardam aprovação</small></article>
          <article><p>Compromissos próximos</p><strong>3</strong><small>Hoje e amanhã</small></article>
        </section>

        <section className="content-grid">
          <article className="panel" id="oportunidades">
            <div className="panel-heading"><div><p className="section-label">Pipeline</p><h2>Oportunidades recentes</h2></div><a href="#oportunidades">Ver todas</a></div>
            <div className="opportunity-list">
              {opportunities.map(([company, request, stage], index) => (
                <article className="opportunity" key={company}>
                  <span className="company-mark">{company.slice(0, 2).toUpperCase()}</span>
                  <div><strong>{company}</strong><p>{request}</p><small>Atualizado recentemente</small></div>
                  <span className={`stage stage-${index}`}>{stage}</span>
                </article>
              ))}
            </div>
          </article>

          <aside className="panel funnel-panel">
            <div className="panel-heading"><div><p className="section-label">Visão rápida</p><h2>Funil comercial</h2></div></div>
            <div className="funnel-list">
              {funnel.map(([label, value], index) => (
                <div className="funnel-row" key={label}><div><span>{label}</span><strong>{value}</strong></div><div className="track"><span style={{ width: `${100 - index * 20}%` }} /></div></div>
              ))}
            </div>
          </aside>
        </section>

        <section className="panel automation-panel" id="automacoes">
          <span className="automation-icon">⌁</span>
          <div><p className="section-label">Última automação</p><h2>Triagem de nova solicitação</h2><p>Dados validados e vinculados à Construtora Horizonte.</p></div>
          <div className="automation-result"><span>Concluída</span><small>1,8 s</small></div>
        </section>
      </section>
    </main>
  );
}
