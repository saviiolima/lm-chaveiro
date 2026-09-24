import {
  Clock,
  MessageSquare,
  CreditCard,
  MapPin,
  PhoneCall,
  KeyRound,
  Zap,
  Navigation,
  Car,
  Cog,
  ShieldCheck,
  DoorOpen,
} from "lucide-react";

const minimalistServices = [
  { id: 1, title: "Chaves Comuns", icon: KeyRound },
  { id: 2, title: "Chaves Codificadas", icon: KeyRound },
  { id: 3, title: "Abertura de Autos", icon: Car },
  { id: 4, title: "Abertura Residencial", icon: DoorOpen },
  { id: 5, title: "Troca de Segredo", icon: Cog },
  { id: 6, title: "Instalação de Fechaduras", icon: ShieldCheck },
];

const paymentBrands = ["VISA", "MASTERCARD", "ELO", "AMEX", "PIX", "HIPERCARD"];

export default function App() {
  const rawPhone = "5584999061593";
  const displayPhone = "(84) 99906-1593";
  const googleMapsUrl = "https://maps.app.goo.gl/YourRealMapsLink";

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-black pb-20 md:pb-0">
      {/* Top Banner de Urgência */}
      <div className="bg-yellow-400 text-black text-[11px] sm:text-xs font-bold py-2 px-3 text-center flex items-center justify-center gap-1.5 border-b border-yellow-500 shadow-sm">
        <Clock className="w-3.5 h-3.5 shrink-0 animate-pulse text-black" />
        <span className="truncate">Plantão LM Chaveiro: Guamaré e Região</span>
      </div>

      {/* Hero Header */}
      <header className="relative border-b border-zinc-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#101010] to-[#080808] px-4 sm:px-8 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-yellow-500/40 text-[11px] font-semibold text-yellow-400">
            <KeyRound className="w-3.5 h-3.5 text-yellow-400" />
            <span>Guamaré - RN • Residencial & Automotivo</span>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <div className="p-2 sm:p-3 bg-yellow-400 rounded-xl text-black shadow-md shadow-yellow-400/20">
              <KeyRound className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              LM <span className="text-yellow-400">CHAVEIRO</span>
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Confecção de chaves em geral, abertura técnica sem danos em
            automóveis e residências, troca de segredos e chaves codificadas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href={getWhatsAppLink(
                "Olá! Preciso de atendimento do LM Chaveiro com urgência.",
              )}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition shadow-lg shadow-yellow-400/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+5584999061593"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold transition border border-zinc-700 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-yellow-400" />
              Ligar: {displayPhone}
            </a>
          </div>
        </div>
      </header>

      {/* Faixa de Pagamento */}
      <section className="border-b border-zinc-800/80 bg-[#0e0e0e] py-3 px-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
            <CreditCard className="w-3.5 h-3.5 text-yellow-400" />
            <span>Formas de Pagamento no Local:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] font-bold text-zinc-300">
            {paymentBrands.map((brand, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs text-yellow-400 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Cartão e Pix no local</span>
          </div>
        </div>
      </section>

      {/* Catálogo de Serviços ULTRA-MINIMALISTA (Inspirado na imagem) */}
      <main
        id="catalogo"
        className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 sm:py-16 flex-1 w-full space-y-8"
      >
        <div className="text-center md:text-left border-b border-zinc-800 pb-4">
          <span className="text-[11px] uppercase tracking-widest text-yellow-400 font-bold">
            Catálogo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
            Nossos Serviços
          </h2>
        </div>

        {/* Grid Minimalista com Ícones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {minimalistServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#121212] border-2 border-yellow-500 hover:bg-yellow-500 transition-all duration-300 rounded-xl flex flex-col items-center justify-center text-center p-6 group space-y-4 shadow-lg shadow-yellow-950/20"
              >
                <div className="p-3 bg-zinc-900 rounded-full text-yellow-400 group-hover:bg-black/20 group-hover:text-black transition">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-yellow-400 group-hover:text-black transition leading-tight">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </main>

      {/* Localização & Horários */}
      <section className="bg-[#0f0f0f] border-t border-zinc-800 px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-yellow-400 font-bold">
              Oficina & Atendimento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              A sua segurança em Guamaré e região
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              O <strong className="text-white">LM Chaveiro</strong> dispõe de
              maquinário profissional para cópias de precisão, leitura e
              programação de chaves codificadas e abertura técnica sem danificar
              seu patrimônio.
            </p>
          </div>

          <div className="bg-[#141414] border border-zinc-800 p-5 sm:p-7 rounded-xl sm:rounded-2xl space-y-5">
            <div className="flex items-center gap-2.5 text-yellow-400">
              <Navigation className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">
                Localização & Horário
              </h3>
            </div>

            <div className="space-y-3 border-t border-zinc-800 pt-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Endereço:</p>
                  <p className="text-zinc-300 text-xs sm:text-sm">
                    R. Prof. Joao Batista, 671
                  </p>
                  <p className="text-zinc-400 text-[11px] sm:text-xs">
                    Guamaré - RN, 59598-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="font-semibold text-white">
                    Horário de Funcionamento:
                  </p>
                  <div className="text-[11px] sm:text-xs text-zinc-400 space-y-1 mt-1.5">
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span>Segunda a Sexta:</span>
                      <span className="text-zinc-200 font-medium">
                        08:00–12:00, 14:00–18:00
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span>Sábado:</span>
                      <span className="text-zinc-200 font-medium">
                        08:00–12:00
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Domingo:</span>
                      <span className="text-yellow-500 font-medium">
                        Fechado (Plantão Whats)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-zinc-900 hover:bg-zinc-800 text-white py-2.5 rounded-lg text-xs font-semibold transition border border-zinc-700"
              >
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                Abrir no Google Maps
              </a>
              <a
                href={getWhatsAppLink(
                  "Olá! Gostaria de um atendimento do LM Chaveiro.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-2.5 rounded-lg text-xs font-bold transition shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Desktop */}
      <footer className="border-t border-zinc-800 px-4 py-6 text-center text-[11px] text-zinc-500 bg-[#050505]">
        <p>
          © {new Date().getFullYear()} LM Chaveiro – Guamaré - RN. Todos os
          direitos reservados.
        </p>
      </footer>

      {/* Barra Fixa Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 flex items-center gap-2">
        <a
          href="tel:+5584999061593"
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-zinc-100 py-2.5 rounded-lg text-xs font-bold active:scale-95 transition"
        >
          <PhoneCall className="w-4 h-4 text-yellow-400" />
          Ligar Agora
        </a>
        <a
          href={getWhatsAppLink("Olá! Preciso de um chaveiro com urgência.")}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg text-xs font-bold shadow-md shadow-emerald-950/40 active:scale-95 transition"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
