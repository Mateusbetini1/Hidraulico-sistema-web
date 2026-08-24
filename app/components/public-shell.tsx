export function PublicHeader() {
  return <header className="public-header"><a className="public-logo" href="/" aria-label="WG Hidráulica, início"><span>WG</span><strong>WG Hidráulica</strong></a><nav aria-label="Navegação do site"><a href="/">Início</a><a href="/quem-somos">Quem somos</a><a href="/produtos">Produtos</a><a href="/aplicacoes">Aplicações</a><a href="/contato">Contato</a></nav><a className="quote-link" href="/contato">Solicitar orçamento</a></header>;
}

export function PublicFooter() {
  return <footer className="public-footer"><div className="public-logo inverse"><span>WG</span><strong>WG Hidráulica</strong></div><p>Soluções hidráulicas para operações que não podem parar.</p><div><strong>Navegação</strong><a href="/produtos">Produtos</a><a href="/aplicacoes">Aplicações</a><a href="/contato">Contato</a></div><div><strong>Sistema</strong><a href="/login">Acesso interno</a></div></footer>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><p className="public-kicker">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
