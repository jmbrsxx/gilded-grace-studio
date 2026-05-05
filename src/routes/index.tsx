import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Scissors, Sparkles, Hand, MapPin, Phone, Clock, Star, Instagram, Globe, Menu, X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-salon.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import hairImg from "@/assets/service-hair.jpg";
import skinImg from "@/assets/service-skin.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio Feras — Salão de Beleza em Porto Alegre" },
      { name: "description", content: "Studio Feras: salão de beleza boutique em Porto Alegre. Cabelo, unhas, estética. Agende online." },
    ],
  }),
});

const services = [
  { icon: Scissors, title: "Cabelo", desc: "Cortes, coloração, mechas, escova e tratamentos capilares de alta performance.", img: hairImg },
  { icon: Hand, title: "Unhas", desc: "Manicure, pedicure, alongamento e nail art com acabamento impecável.", img: nailsImg },
  { icon: Sparkles, title: "Estética", desc: "Limpeza de pele, design de sobrancelhas, depilação e cuidados faciais.", img: skinImg },
];

const reviews = [
  { name: "Silvia Castilhos", text: "Atendimento maravilhoso e a proprietária é muito simpática, além de ser uma ótima profissional!", rating: 5 },
  { name: "Carla Calazans", text: "Ambiente lindo e bem cuidado. Saí me sentindo renovada!", rating: 5 },
  { name: "Tatiana Milech", text: "Local aconchegante no coração de Porto Alegre.", rating: 4 },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
            Studio <span className="text-gradient-gold">Feras</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="relative transition-colors hover:text-[var(--gold-deep)] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" className="rounded-full bg-gradient-gold px-5 py-2 text-primary-foreground shadow-gold transition-transform hover:scale-105">
                Agendar
              </a>
            </li>
          </ul>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur px-6 pb-6 flex flex-col gap-4 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 border-b border-border">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Interior do Studio Feras" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)] animate-[fade-up_0.6s_ease-out]">
              <Sparkles className="h-3.5 w-3.5" /> Salão Boutique · Porto Alegre
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] font-semibold animate-[fade-up_0.8s_ease-out]">
              Beleza que <span className="text-gradient-gold">brilha</span> em cada detalhe.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl animate-[fade-up_1s_ease-out]">
              No Studio Feras, cada cliente é única. Cabelo, unhas e estética com cuidado artesanal,
              em um ambiente sofisticado no coração da Independência.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fade-up_1.2s_ease-out]">
              <a href="#contato" className="rounded-full bg-gradient-gold px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-transform hover:scale-105">
                Agendar horário
              </a>
              <a href="#servicos" className="rounded-full border border-border bg-card/60 backdrop-blur px-7 py-3.5 font-medium transition-colors hover:bg-card">
                Nossos serviços
              </a>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-[var(--gold)] text-[var(--gold)]" : "text-muted-foreground"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4,4 · Avaliações Google</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-[float_3s_ease-in-out_infinite]">
          ↓ role para descobrir
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-deep)] mb-4">Sobre nós</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Um refúgio de <span className="text-gradient-gold">elegância</span> e cuidado.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Studio Feras nasceu da paixão por realçar a beleza natural de cada pessoa. Localizado
              na charmosa Rua Ramiro Barcelos, oferecemos uma experiência completa em um ambiente
              inspirado nos melhores ateliês europeus.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Profissionais experientes, produtos premium e atenção personalizada — tudo para que você
              saia daqui se sentindo extraordinária.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "10+", l: "Anos de história" },
                { n: "2k+", l: "Clientes felizes" },
                { n: "4,4★", l: "Google Reviews" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
            <img src={heroImg} alt="Interior do salão" loading="lazy" className="relative rounded-3xl shadow-soft w-full" />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-deep)] mb-4">Serviços</p>
            <h2 className="font-display text-4xl md:text-5xl">Para você se sentir <span className="text-gradient-gold">incrível</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="reveal group bg-card rounded-3xl overflow-hidden shadow-soft transition-all hover:-translate-y-2 hover:shadow-gold" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-7">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-gold text-primary-foreground mb-4 shadow-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-deep)] mb-4">Avaliações</p>
            <h2 className="font-display text-4xl md:text-5xl">O que nossas <span className="text-gradient-gold">clientes</span> dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <blockquote key={i} className="reveal bg-card rounded-3xl p-8 shadow-soft border border-border" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed mb-6">"{r.text}"</p>
                <footer className="text-sm font-medium text-[var(--gold-deep)]">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-deep)] mb-4">Visite-nos</p>
            <h2 className="font-display text-4xl md:text-5xl">Venha viver a <span className="text-gradient-gold">experiência</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="reveal space-y-6">
              {[
                { icon: MapPin, title: "Endereço", text: "R. Ramiro Barcelos, 1200 — Independência\nPorto Alegre, RS · 90035-002" },
                { icon: Phone, title: "Telefone", text: "(51) 3022-3042" },
                { icon: Clock, title: "Horário", text: "Seg a Sex · 09:00 — 18:00\nSábado · 09:00 — 16:00" },
                { icon: Globe, title: "Site", text: "studioferas.com.br" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex gap-4 bg-card rounded-2xl p-5 shadow-soft border border-border">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{c.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{c.text}</p>
                    </div>
                  </div>
                );
              })}
              <a href="tel:+555130223042" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-transform hover:scale-105">
                <Phone className="h-4 w-4" /> Ligar agora
              </a>
            </div>
            <div className="reveal rounded-3xl overflow-hidden shadow-soft border border-border min-h-[400px]">
              <iframe
                title="Localização Studio Feras"
                src="https://www.google.com/maps?q=R.+Ramiro+Barcelos,+1200+-+Independência,+Porto+Alegre+-+RS&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-display text-lg text-foreground">Studio <span className="text-gradient-gold">Feras</span></p>
          <p>© {new Date().getFullYear()} Studio Feras · Todos os direitos reservados</p>
          <a href="#top" className="hover:text-[var(--gold-deep)] transition-colors">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
