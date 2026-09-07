import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import binanceLogo from "@/assets/binance-logo.png";
import bybitLogo from "@/assets/bybit-logo.webp";
import bitgetLogo from "@/assets/bitget-logo.png";

const WHATSAPP_URL =
  "https://wa.me/5512982519116?text=" +
  encodeURIComponent("Quero saber mais sobre o sistema que opera na Binance");

const STORAGE_KEY = "aurum_exit_popup_shown";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.793 12.79 0 2.257.59 4.462 1.712 6.405L3.2 28.8l6.564-1.69a12.78 12.78 0 0 0 6.235 1.588h.005c7.058 0 12.789-5.73 12.792-12.79a12.71 12.71 0 0 0-3.744-9.048A12.7 12.7 0 0 0 16.003 3.2Zm0 23.02h-.004a10.62 10.62 0 0 1-5.412-1.482l-.388-.23-4.024 1.036 1.074-3.923-.253-.403a10.6 10.6 0 0 1-1.626-5.667c.002-5.867 4.777-10.64 10.638-10.64a10.56 10.56 0 0 1 7.518 3.117 10.56 10.56 0 0 1 3.11 7.53c-.002 5.867-4.776 10.641-10.633 10.641Zm5.83-7.97c-.32-.16-1.89-.932-2.183-1.039-.293-.107-.506-.16-.72.16-.212.32-.825 1.039-1.011 1.252-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.591-1.893-1.778-2.213-.186-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.094 1.306 3.307c.16.213 2.256 3.445 5.466 4.83.764.33 1.36.527 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
  </svg>
);

const exchanges = [
  { name: "Binance", url: binanceLogo.url },
  { name: "Bybit", url: bybitLogo.url },
  { name: "Bitget", url: bitgetLogo.url },
];

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  const trigger = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(true);
  }, []);

  useEffect(() => {
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) trigger();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Mobile / back-button fallback
    const timer = window.setTimeout(() => {
      const onScrollUp = (() => {
        let last = window.scrollY;
        return () => {
          if (last - window.scrollY > 250 && window.scrollY < 200) trigger();
          last = window.scrollY;
        };
      })();
      window.addEventListener("scroll", onScrollUp, { passive: true });
    }, 8000);

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [trigger]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Antes de sair, veja!"
    >
      <div
        className="absolute inset-0 bg-foreground/70 backdrop-blur-md animate-fade-in"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-primary/30 animate-fade-up shadow-2xl">
        {/* Cinematic background */}
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 geometric-pattern opacity-[0.07]" />
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/25 blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2 text-primary-foreground/80 transition hover:bg-primary-foreground/20 hover:text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">
            Oportunidade exclusiva
          </span>

          <h2 className="mt-6 text-4xl sm:text-6xl font-bold leading-[1.05] text-primary-foreground">
            Antes de sair, <span className="text-gradient">veja!</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-2xl leading-relaxed text-primary-foreground/85">
            Conheça o sistema que opera dentro da sua conta na{" "}
            <strong className="text-primary-foreground">Binance</strong>,{" "}
            <strong className="text-primary-foreground">Bybit</strong> e{" "}
            <strong className="text-primary-foreground">BitGet</strong>, seu capital{" "}
            <strong className="text-primary-foreground">100% no seu controle!</strong>
          </p>

          {/* Exchange logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {exchanges.map((ex) => (
              <div
                key={ex.name}
                className="group flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 backdrop-blur-sm transition hover:border-primary/50 hover:bg-primary-foreground/10"
              >
                <img
                  src={ex.url}
                  alt={`Logo ${ex.name} - corretora de criptomoedas integrada ao sistema Aurum Foundation`}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <span className="text-base sm:text-lg font-semibold text-primary-foreground">
                  {ex.name}
                </span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-glow mt-10 inline-flex w-full max-w-xl items-center justify-center gap-4 rounded-2xl bg-[#25D366] px-8 py-6 text-xl sm:text-2xl font-bold text-[#062b16] transition hover:bg-[#1fbe5a]"
          >
            <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
            Saber Mais
          </a>

          <p className="mt-5 text-sm text-primary-foreground/60">
            Atendimento direto no WhatsApp • Sem custo • Seu capital permanece na sua corretora
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
