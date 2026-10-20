/**
 * Design note — Escudo de Precisão:
 * Editorial premium inspired by technical safety signage. Off-white space, deep green bands,
 * Lime Signal accents, geometric shield cuts and rapid but restrained interactions.
 */
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511921321209?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20dedetização.";

const pests = [
  {
    name: "Formigas",
    description: "Eliminamos colónias e evitamos que voltem ao seu lar.",
    image: "/manus-storage/pragy-real-ant_d1f232ef.jpg",
    alt: "Fotografia macro de uma formiga",
  },
  {
    name: "Baratas",
    description: "Controlo eficaz contra baratas alemãs, americanas e orientais.",
    image: "/manus-storage/pragy-real-cockroach_f017354e.jpg",
    alt: "Fotografia de uma barata",
  },
  {
    name: "Ratos",
    description: "Eliminamos roedores e protegemos a sua casa contra novas infestações.",
    image: "/manus-storage/pragy-real-rat_5e7e9842.jpg",
    alt: "Fotografia de um rato",
  },
  {
    name: "Aranhas",
    description: "Remoção segura e prevenção contra novas aparições.",
    image: "/manus-storage/pragy-real-spider_8a4cf4f7.jpg",
    alt: "Fotografia macro de uma aranha",
  },
  {
    name: "Escorpiões",
    description: "Prevenção e controlo seguro de escorpiões em áreas internas e externas.",
    image: "/manus-storage/pragy-real-scorpion_e9cc4c58.jpg",
    alt: "Fotografia de um escorpião",
  },
  {
    name: "Percevejos",
    description: "Tratamento específico para recuperar o conforto do seu espaço.",
    image: "/manus-storage/pragy-real-bedbug_20f59c8e.jpg",
    alt: "Fotografia macro de um percevejo",
  },
];

const proofPoints = [
  { label: "Atendimento rápido e discreto", icon: Clock3 },
  { label: "Produtos seguros e certificados", icon: ShieldCheck },
  { label: "Equipa treinada e qualificada", icon: UserRound },
  { label: "Garantia de até 90 dias", icon: BadgeRibbon },
];

const reasons = [
  "Atendimento rápido e humanizado",
  "Tecnologia e produtos de última geração",
  "Planos personalizados para cada necessidade",
  "Compromisso com a saúde e o meio ambiente",
];

function BadgeRibbon({ className }: { className?: string }) {
  return <ShieldCheck className={className} aria-hidden="true" />;
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand--inverse" : ""}`} href="#inicio" aria-label="Pragy, início">
      <img
        className="brand__mark"
        src="/manus-storage/pragy-shield-mark_bcf6d90b.png"
        alt=""
      />
      <span className="brand__type">
        <strong>PRAGLY</strong>
        <small>PROTEÇÃO E CONTROLE</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="inicio">
      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-bar__inner">
            <div className="utility-bar__group">
              <span><Phone size={13} /> Atendimento 24h</span>
              <span><MessageCircle size={13} /> Seg – Dom: 07h às 22h</span>
            </div>
            <div className="utility-bar__group utility-bar__social">
              <span>Siga-nos</span>
              <a href="#contato" aria-label="Instagram"><Instagram size={14} /></a>
              <a href="#contato" aria-label="Facebook"><Facebook size={14} /></a>
            </div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          <Brand />
          <div className="main-nav__links">
            <a className="is-active" href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#pragas">Pragas</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </div>
          <a className="nav-cta nav-cta--traffic" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span>Orçamento rápido</span><MessageCircle size={18} />
          </a>
          <div className="mobile-nav-actions">
            <a className="mobile-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
              <MessageCircle size={25} />
            </a>
            <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={30} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <a onClick={closeMenu} href="#inicio">Início</a>
          <a onClick={closeMenu} href="#sobre">Sobre nós</a>
          <a onClick={closeMenu} href="#servicos">Serviços</a>
          <a onClick={closeMenu} href="#pragas">Pragas</a>
          <a onClick={closeMenu} href="#diferenciais">Diferenciais</a>
          <a onClick={closeMenu} href="#contato">Contato</a>
          <a className="mobile-menu__cta" onClick={closeMenu} href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com um especialista <ArrowRight size={18} /></a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Dedetização profissional</p>
            <h1 id="hero-title">Dedetização<br />de pragas<span>.</span></h1>
            <p className="hero__lead">Proteção que você sente.<br />Tranquilidade que você merece.</p>
            <div className="lime-rule" />
            <p className="hero__body">Soluções completas e seguras para eliminar pragas e proteger o que é mais importante: sua família, sua empresa e seu bem-estar.</p>
            <div className="hero__actions">
              <a className="button button--primary button--traffic" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com um especialista <MessageCircle size={19} /></a>
              <a className="button button--outline" href="#servicos">Nossos serviços <ArrowDown size={18} /></a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__shield-cut" />
            <img src="/manus-storage/pragy-hero-technician_559c6d91.jpg" alt="" />
            <div className="hero__emergency"><MessageCircle size={28} /><span><strong>Emergência?</strong><small>Atendimento 24h</small></span></div>
          </div>
          <div className="hero__proofs" aria-label="Diferenciais da Pragy">
            {proofPoints.map(({ label, icon: Icon }) => (
              <div className="proof" key={label}><Icon size={28} /><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className="about" id="sobre" aria-labelledby="about-title">
          <div className="about__intro">
            <p className="eyebrow eyebrow--light">Sobre a Pragy</p>
            <h2 id="about-title">Especialistas em <em>proteção e controle</em></h2>
            <p>Mais do que eliminar pragas, entregamos tranquilidade com responsabilidade, segurança e respeito ao seu ambiente.</p>
            <a href="#diferenciais" className="about__link">Saiba mais sobre nós <ArrowRight size={20} /></a>
          </div>
          <div className="about__photo-frame">
            <img src="/manus-storage/pragy-institutional-facade_868d0014.jpg" alt="Fachada contemporânea de uma empresa de controlo de pragas" />
            <div className="about__photo-shield"><img src="/manus-storage/pragy-shield-mark_bcf6d90b.png" alt="" /></div>
          </div>
          <div className="about__reasons" id="diferenciais">
            <h3>Por que escolher a Pragy?</h3>
            <div className="reason-list">
              {reasons.map((reason, index) => (
                <div className="reason" key={reason}>
                  {index === 1 ? <Sparkles size={21} /> : index === 2 ? <UserRound size={21} /> : index === 3 ? <Leaf size={21} /> : <Clock3 size={21} />}
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="servicos" aria-labelledby="services-title">
          <div className="services__heading">
            <p className="eyebrow">Pragas que combatemos</p>
            <h2 id="services-title">Proteção completa<br />para o seu lar</h2>
            <p>Atuamos no controlo e prevenção das principais pragas urbanas, garantindo mais segurança, saúde e bem-estar para você e sua família.</p>
            <div className="lime-rule" />
          </div>
          <div className="pest-grid" id="pragas">
            {pests.map(({ name, description, image, alt }) => (
              <article className="pest-card" key={name}>
                <div className="pest-card__image"><img src={image} alt={alt} /></div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Solicitar informação sobre ${name}`}><ChevronRight size={26} /></a>
              </article>
            ))}
          </div>
          <a className="button button--primary services__button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><ShieldCheck size={20} /> Ver todas as pragas</a>
          <aside className="service-callout">
            <img src="/manus-storage/pragy-shield-mark_bcf6d90b.png" alt="" />
            <h3>Não encontrou a<br />praga <em>que procura?</em></h3>
            <span className="service-callout__divider" />
            <p>Fale com nossos especialistas. Temos soluções personalizadas para cada tipo de necessidade.</p>
            <a className="button button--primary button--traffic" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com especialista <MessageCircle size={20} /></a>
          </aside>
        </section>

        <section className="coverage" aria-label="Serviços de controlo residencial">
          <div className="coverage__image"><img src="/manus-storage/pragy-service-residential_76e87add.jpg" alt="Profissional a fazer inspeção preventiva num ambiente residencial" /></div>
          <div className="coverage__content">
            <p className="eyebrow">Proteção para todos os espaços</p>
            <h2>Soluções certeiras para ambientes que pedem cuidado.</h2>
            <p>Residências, condomínios, empresas e espaços comerciais: cada ambiente recebe um plano personalizado de prevenção e controlo.</p>
            <a className="button button--dark-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <section className="location-section" aria-labelledby="location-title">
          <div className="location-section__copy">
            <p className="eyebrow eyebrow--light">Onde estamos</p>
            <h2 id="location-title">Proteção em<br /><em>São Paulo e região.</em></h2>
            <p>Conte com uma equipa preparada para atender a sua necessidade com agilidade, discrição e segurança.</p>
            <div className="location-details">
              <div><MapPin size={21} /><span><strong>Área de atendimento</strong>São Paulo – SP e região metropolitana</span></div>
              <div><Phone size={21} /><span><strong>WhatsApp</strong>+55 11 92132-1209</span></div>
            </div>
            <a className="button button--primary" href="https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C+SP" target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowRight size={18} /></a>
          </div>
          <div className="map-card">
            <iframe
              className="pragy-map"
              title="Mapa de atendimento da Pragy em São Paulo"
              src="https://www.google.com/maps?q=S%C3%A3o+Paulo%2C+SP&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-card__caption"><MapPin size={16} /> São Paulo – SP</div>
          </div>
        </section>
        <div className="footer-bottom">
          <Brand inverse />
          <p>© {new Date().getFullYear()} Pragy Proteção e Controle. Todos os direitos reservados.</p>
          <div className="footer-bottom__links"><a href="#inicio">Política de privacidade</a><a href="#inicio">Termos de uso</a></div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Fale com a Pragy pelo WhatsApp"><MessageCircle size={26} /></a>
    </div>
  );
}
