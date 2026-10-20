import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { CSSProperties, ReactNode } from 'react';
import './styles.css';

type IconName = 'arrow' | 'menu' | 'phone' | 'whatsapp' | 'instagram' | 'plus' | 'close' | 'mouse';

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (name === 'arrow') return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === 'phone') return <svg {...common}><path d="M6.6 3.8 9 3.2l2 4.8-1.8 1.5a14.5 14.5 0 0 0 5.3 5.3L16 13l4.8 2 .1 2.6c.1 1.6-1.2 2.7-2.7 2.5C10.7 19.1 4.9 13.3 3.9 5.8 3.7 4.5 5 3.9 6.6 3.8Z" /></svg>;
  if (name === 'whatsapp') return <svg {...common}><path d="M20.1 11.5a8.1 8.1 0 0 1-11.9 7.1L4 20l1.4-4.1a8.1 8.1 0 1 1 14.7-4.4Z" /><path d="M8.2 7.9c.2-.4.5-.5.8-.5h.5c.2 0 .4.2.5.5l.8 1.8c.1.3.1.5-.1.7l-.6.8c.7 1.4 1.8 2.5 3.2 3.2l.8-.6c.2-.2.4-.2.7-.1l1.8.8c.3.1.5.3.5.5v.5c0 .3-.1.6-.5.8-1.1.5-2.4.1-3.5-.5a11.2 11.2 0 0 1-4.7-4.7c-.7-1.2-1-2.5-.5-3.5Z" /></svg>;
  if (name === 'instagram') return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.4" cy="6.7" r=".7" fill="currentColor" stroke="none" /></svg>;
  if (name === 'plus') return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  return <svg {...common}><path d="M5 4v10.8a7 7 0 0 0 14 0V4" /><path d="M8 4h8" /><path d="M12 4v3" /><path d="M12 18v2" /></svg>;
}

function Button({ children, dark = false, href = '#contato', className = '' }: { children: ReactNode; dark?: boolean; href?: string; className?: string }) {
  return <a className={`pill-button ${dark ? 'pill-button--dark' : ''} ${className}`} href={href}>{children}<span className="pill-button__icon"><Icon name="arrow" size={18} /></span></a>;
}

const navLinks = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const faqs = [
  ['Quanto tempo leva para criar um site?', 'Em média, um projeto completo leva de 3 a 6 semanas. O prazo varia conforme a complexidade, a quantidade de páginas e a velocidade das aprovações.'],
  ['Vocês trabalham com qualquer segmento?', 'Sim. Começamos pelo entendimento do seu nicho, público e objetivo para criar uma solução que tenha a sua identidade — não um template genérico.'],
  ['O site já vem otimizado para celular?', 'Sim. Cada tela é desenhada para funcionar com fluidez no desktop, tablet e celular, com atenção especial à velocidade e à experiência de navegação.'],
  ['Posso atualizar o site depois que ele for entregue?', 'Sim. O projeto é entregue configurado e preparado para evoluir. Também oferecemos suporte e otimizações contínuas para acompanhar o crescimento do negócio.'],
];

function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const value = Math.min(100, Math.round(((now - started) / 1500) * 100));
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else window.setTimeout(onDone, 480);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);
  return <div className="loader" aria-label={`Carregando ${progress}%`}><div className="loader__inner"><div className="loader__ring"><span>{progress}</span><small>%</small></div><div className="loader__cursor"><Icon name="mouse" size={24} /><span className="loader__click" /></div><p>projetos do zero</p></div></div>;
}

function VisualBlock({ id, image, className = '', children, style }: { id?: string; image: string; className?: string; children?: ReactNode; style?: CSSProperties }) {
  return <section id={id} className={`visual-block ${className}`} style={{ '--poster': `url(${image})`, ...style } as CSSProperties}><div className="visual-block__poster" role="img" aria-label="Referência visual da seção" /><div className="visual-block__veil" />{children}</section>;
}

function App() {
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [moneyLit, setMoneyLit] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const processRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle('is-ready', ready);
  }, [ready]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.target === processRef.current && entry.isIntersecting) setProcessVisible(true);
      if (entry.target.id === 'dinheiro' && entry.isIntersecting) setMoneyLit(true);
    }), { threshold: 0.32 });
    const blocks = document.querySelectorAll('#dinheiro, #processo');
    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!ready) return <Loader onDone={() => setReady(true)} />;

  return <>
    <header className="site-header">
      <a className="header-pill" href="#top" aria-label="Voltar ao topo"><span /></a>
      <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`} aria-label="Navegação principal">
        {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        <div className="mobile-nav-cta"><Button href="#contato">Falar com especialista</Button></div>
      </nav>
      <div className="header-actions">
        <a href="tel:+550000000000" aria-label="Telefone"><Icon name="phone" /></a><a href="https://wa.me/550000000000" aria-label="WhatsApp"><Icon name="whatsapp" /></a><a href="#depoimentos" aria-label="Instagram"><Icon name="instagram" /></a>
        <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((value) => !value)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>

    <main id="top">
      <VisualBlock image="/assets/hero.png" className="hero-block">
        <div className="poster-hotspot poster-hotspot--hero"><Button href="#contato">Falar com especialista</Button><Button dark href="#projetos">Projetos</Button></div>
        <div className="hero-scroll"><span /> role para explorar</div>
      </VisualBlock>

      <VisualBlock image="/assets/value.png" id="valor" className="value-block">
        <div className="floating-copy floating-copy--value"><span className="eyebrow">estratégia que aparece</span><h2>O visual é a primeira<br />prova de valor.</h2><p>Unimos estratégia, design e performance para criar sites que não apenas impressionam, mas realmente geram resultados.</p><Button dark>Quero meu site</Button></div>
      </VisualBlock>

      <VisualBlock image="/assets/money.png" id="dinheiro" className={`money-block ${moneyLit ? 'money-block--lit' : ''}`}>
        <div className="money-sun" aria-hidden="true" /><div className="money-caption"><span className="eyebrow">mais presença, mais retorno</span><p>Seu negócio ganha mais credibilidade desde o primeiro clique.</p></div>
        <div className="money-cta"><span>Vamos conversar e gerar<br />mais vendas para o seu negócio.</span><Button>Quero meu site</Button></div>
      </VisualBlock>

      <VisualBlock image="/assets/metrics.png" className="metrics-block"><div className="metric-overlay"><div><strong>100<span>+</span></strong><small>Sites entregues</small></div><div><strong>7<span>+</span></strong><small>Nichos atendidos</small></div><div><strong>97<span>%</span></strong><small>Clientes que recomendam</small></div><div><strong>70<span>%</span></strong><small>Aumento em conversões</small></div></div></VisualBlock>

      <VisualBlock image="/assets/projects.png" id="projetos" className="projects-block"><div className="project-hotspot"><Button dark>Ver todos os projetos</Button></div></VisualBlock>

      <section id="processo" ref={processRef} className={`process-section ${processVisible ? 'process-section--visible' : ''}`}>
        <div className="process-bg" />
        <div className="process-content"><span className="eyebrow">do briefing ao resultado</span><h2>Um processo simples e <em>estratégico</em></h2><p>Do briefing à geração de resultados, cuidamos de cada etapa para o seu projeto sair do zero ao online.</p>
          <div className="process-line" />
          <div className="process-grid">{[
            ['1', 'Briefing', 'Entendemos seus objetivos, público, referências e o posicionamento da sua marca para criar a melhor estratégia.'],
            ['2', 'Estratégia', 'Com base nos dados, definimos a estrutura do site, o design e as funcionalidades ideais para o seu negócio.'],
            ['3', 'Design e desenvolvimento', 'Criamos um site moderno, rápido e otimizado, seguindo a identidade da sua marca e as melhores práticas do mercado.'],
            ['4', 'Apresentação', 'Você acompanha o projeto em tempo real e fazemos os ajustes necessários até a aprovação final.'],
            ['5', 'Otimização', 'Ajustamos SEO, performance e integrações para garantir que o site seja rápido, seguro e bem posicionado.'],
            ['6', 'Entrega', 'Seu site pronto, no ar e configurado com tudo que você precisa para receber clientes e gerar resultados.'],
          ].map(([number, title, copy], index) => <article className="process-step" style={{ '--delay': `${index * 110}ms` } as CSSProperties} key={number}><div className="process-number">{number}</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <VisualBlock image="/assets/reasons.png" id="servicos" className="reasons-block"><div className="reasons-hotspot"><Button dark href="#contato">Falar com especialista</Button></div></VisualBlock>
      <VisualBlock image="/assets/results.png" id="resultados" className="results-block"><div className="results-hotspot"><span className="eyebrow">um objetivo em comum</span><Button>Começar meu projeto</Button></div></VisualBlock>

      <section id="depoimentos" className="testimonials-section"><div className="section-heading"><span className="eyebrow">quem já viveu essa virada</span><h2>Sites que fazem <em>sentido</em><br />para quem visita.</h2></div><div className="testimonial-grid"><article><div className="quote-mark">“</div><p>O novo site mudou a forma como os clientes enxergam a nossa marca. A procura aumentou já no primeiro mês.</p><strong>Mariana Alves</strong><small>Fundadora, Yure Planejados</small></article><article><div className="quote-mark">“</div><p>Finalmente temos uma presença digital que transmite o nível do nosso trabalho e facilita a decisão de compra.</p><strong>Lucas Mendes</strong><small>Diretor, Vortex Energy</small></article><article><div className="quote-mark">“</div><p>O processo foi muito claro, estratégico e próximo. Cada detalhe foi pensado para o nosso público.</p><strong>Rafaela Ueda</strong><small>Clínica Dr. Ueda</small></article></div></section>

      <section id="faq" className="faq-section"><div className="faq-intro"><span className="eyebrow">ainda ficou com alguma dúvida?</span><h2>Perguntas<br /><em>frequentes.</em></h2><p>Se não encontrar a resposta que procura, fale com a gente. Vamos adorar entender o seu projeto.</p><Button>Falar com especialista</Button></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'faq-item--open' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><Icon name={activeFaq === index ? 'close' : 'plus'} size={19} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>
    </main>

    <footer id="contato" className="site-footer"><div className="footer-top"><div><span className="eyebrow">pronto para sair do zero?</span><h2>Vamos criar algo<br /><em>que vende.</em></h2></div><Button>Falar com especialista</Button></div><div className="footer-bottom"><span className="footer-word">PRAGLY</span><div className="footer-links"><a href="#projetos">Projetos</a><a href="#processo">Serviços</a><a href="#depoimentos">Depoimentos</a><a href="#faq">FAQ</a></div><div className="footer-social"><a href="https://wa.me/550000000000"><Icon name="whatsapp" /></a><a href="#depoimentos"><Icon name="instagram" /></a></div><small>© 2026 Pragly. Projetos feitos do zero.</small></div></footer>
  </>;
}

export default App;

createRoot(document.getElementById('root')!).render(<App />);
