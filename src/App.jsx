import { useState } from "react";
import {
  Clock,
  MessageSquare,
  Search,
  CreditCard,
  MapPin,
  ChevronRight,
  PhoneCall,
  KeyRound,
  Zap,
  Award,
  Navigation,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cópia & Chaves em Geral",
    desc: "Cópias computadorizadas simples, tetra, multiponto e convencionais feitas na hora com máquinas copiadoras profissionais.",
    badge: "Mais Procurado",
    priceEstimate: "Feito na Hora",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Chaves Codificadas & Telecomandos",
    desc: "Confecção, clonagem e programação de chaves de automóveis com chip transponder e telecomandos para várias marcas.",
    badge: "Automóvel",
    priceEstimate: "Sob Consulta",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Abertura de Viaturas (Autos)",
    desc: "Abertura técnica urgente para veículos trancados com chave no interior. Procedimento limpo sem danos à lataria.",
    badge: "Socorro Rápido",
    priceEstimate: "Atendimento no Local",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Abertura Residencial & Comercial",
    desc: "Abertura técnica de portas, portões e cadeados residenciais ou comerciais com rapidez e total integridade.",
    badge: "Plantão Urgente",
    priceEstimate: "Atendimento Rápido",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Troca de Segredos de Fechaduras",
    desc: "Alteração da combinação interna das fechaduras para que as chaves antigas deixem de funcionar.",
    badge: "Segurança",
    priceEstimate: "Precisão Garantida",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Instalação & Troca de Fechaduras",
    desc: "Instalação e substituição de canhões, trincos, puxadores e fechaduras de alta segurança.",
    badge: "Instalação",
    priceEstimate: "Orçamento Rápido",
    image:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80",
  },
];

const paymentBrands = ["VISA", "MASTERCARD", "ELO", "AMEX", "PIX", "HIPERCARD"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const whatsappNumber = "5584999061593";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=R.+Prof.+Joao+Batista,+671,+Guamar%C3%A9+-+RN,+59598-000";

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.badge.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-black">
      {/* Top Banner de Urgência */}
      <div className="bg-yellow-400 text-black text-xs sm:text-sm font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 border-b border-yellow-500 shadow-md">
        <Clock className="w-4 h-4 shrink-0 animate-pulse text-black" />
        <span>
          Plantão LM Chaveiro: Atendimento em domicílio e emergências em Guamaré
          e Região
        </span>
      </div>

      {/* Hero Header */}
      <header className="relative border-b border-zinc-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#101010] to-[#080808] px-6 sm:px-12 py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-yellow-500/40 text-xs font-semibold text-yellow-400">
            <KeyRound className="w-4 h-4 text-yellow-400" />
            <span>Guamaré - RN • Atendimento Residencial & Automóvel</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-yellow-400 rounded-2xl text-black shadow-lg shadow-yellow-400/20">
              <KeyRound className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              LM <span className="text-yellow-400">CHAVEIRO</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Confecção de chaves em geral, abertura técnica sem danos em viaturas
            e habitações, troca de segredos e chaves codificadas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink(
                "Olá! Preciso de atendimento do LM Chaveiro com urgência.",
              )}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl text-base font-bold transition shadow-lg shadow-yellow-400/20 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-black" />
              Chamar no WhatsApp (84) 99906-1593
            </a>
            <a
              href="#catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white px-8 py-4 rounded-xl text-base font-semibold transition border border-zinc-700 active:scale-95"
            >
              Ver Tabela de Serviços
            </a>
          </div>
        </div>
      </header>

      {/* Faixa de Pagamento */}
      <section className="border-b border-zinc-800/80 bg-[#0e0e0e] py-3.5 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 shrink-0">
            <CreditCard className="w-4 h-4 text-yellow-400" />
            <span>Formas de Pagamento no Local:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-zinc-300">
            {paymentBrands.map((brand, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-yellow-400 font-semibold">
            <Zap className="w-4 h-4" />
            <span>Terminal Multibanco e Pix no local</span>
          </div>
        </div>
      </section>

      {/* Catálogo de Serviços */}
      <main
        id="catalogo"
        className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14 lg:py-20 flex-1 w-full space-y-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
              Catálogo Oficial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Serviços Especializados
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar serviço ou chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition"
            />
          </div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#121212] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-yellow-500/5 group"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-bold bg-black/85 backdrop-blur text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
                    {service.priceEstimate}
                  </span>
                  <a
                    href={getWhatsAppLink(
                      `Olá! Gostaria de um orçamento para: ${service.title}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition group-hover:translate-x-1"
                  >
                    Pedir Orçamento
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Localização & Horários Reais de Guamaré */}
      <section className="bg-[#0f0f0f] border-t border-zinc-800 px-6 sm:px-10 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
              Oficina & Atendimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A sua segurança e comodidade em Guamaré e arredores
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              O <strong className="text-white">LM Chaveiro</strong> dispõe de
              maquinaria e ferramentas de alta precisão para a confecção de
              chaves, leitura de códigos automotivos e abertura não destrutiva
              de portas e viaturas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Equipamento Profissional
                  </p>
                  <p className="text-xs text-zinc-400">
                    Cópias milimétricas e rápidas
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-3">
                <KeyRound className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Chaves & Telecomandos
                  </p>
                  <p className="text-xs text-zinc-400">
                    Residencial e automóvel
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-zinc-800 p-7 sm:p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 text-yellow-400">
              <Navigation className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">
                Localização & Horário Oficial
              </h3>
            </div>

            <div className="space-y-4 border-t border-zinc-800 pt-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Endereço:</p>
                  <p className="text-xs text-zinc-300">
                    R. Prof. Joao Batista, 671
                  </p>
                  <p className="text-xs text-zinc-400">
                    Guamaré - RN, 59598-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="font-semibold text-white">
                    Horário de Funcionamento:
                  </p>
                  <div className="text-xs text-zinc-400 space-y-1.5 mt-2">
                    <div className="flex justify-between py-1 border-b border-zinc-800">
                      <span>Segunda a Sexta:</span>
                      <span className="text-zinc-200 font-medium">
                        08:00–12:00, 14:00–18:00
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800">
                      <span>Sábado:</span>
                      <span className="text-zinc-200 font-medium">
                        08:00–12:00
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Domingo:</span>
                      <span className="text-yellow-500 font-medium">
                        Fechado (Plantão WhatsApp)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-xl text-xs font-semibold transition border border-zinc-700"
              >
                <MapPin className="w-4 h-4 text-yellow-400" />
                Abrir no Google Maps
              </a>
              <a
                href={getWhatsAppLink(
                  "Olá! Gostaria de um atendimento do LM Chaveiro.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl text-xs font-bold transition shadow-md shadow-yellow-400/10"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação Final */}
      <section className="border-t border-zinc-800 bg-gradient-to-b from-[#121212] to-[#080808] px-6 py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ficou trancado fora ou perdeu a chave?
          </h3>
          <p className="text-sm text-zinc-400">
            Atendimento em Guamaré e região com deslocação rápida.
          </p>
          <a
            href={getWhatsAppLink(
              "Olá! Preciso de atendimento do LM Chaveiro.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3.5 rounded-xl font-bold transition shadow-lg shadow-yellow-400/20 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-black" />
            Conversar no WhatsApp: (84) 99906-1593
          </a>
        </div>
      </section>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={getWhatsAppLink("Olá! Preciso de um chaveiro.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-950/60 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-emerald-400/40"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      {/* Rodapé */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-xs text-zinc-500 bg-[#050505]">
        <p>
          © {new Date().getFullYear()} LM Chaveiro – Guamaré - RN. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
