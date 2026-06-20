import React, { useMemo, useState } from 'react';
import { IMAGES } from '../utils/images';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
  });
  const [sendState, setSendState] = useState<'idle' | 'success'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const attendanceLabel = useMemo(() => {
    if (formData.attending === 'yes') return 'Joyfully attending';
    if (formData.attending === 'no') return 'Regretfully unable to attend';
    return 'Awaiting response';
  }, [formData.attending]);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (sendState !== 'idle' || statusMessage) {
      setSendState('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `RSVP for Aleeza & Ibrahim - ${formData.name}`;
    const body = [
      'Dear Sana Iqbal,',
      '',
      'Please find my RSVP details for the Mayoun Celebration Night below.',
      '',
      `Guest Name: ${formData.name}`,
      `Guest Email: ${formData.email}`,
      `Guest Phone: ${formData.phone}`,
      `Attendance Status: ${attendanceLabel}`,
      '',
      'Warm regards,',
      formData.name,
    ].join('\n');

    const mailtoUrl = `mailto:Sanashah13@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSendState('success');
    setStatusMessage('Your email draft is ready with full name, email, phone number, and attendance details.');
  };

  return (
    <section id="rsvp" className="section-container panel overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.RSVP_BG}
          alt="RSVP Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(60,40,10,0.7)] via-[rgba(80,50,15,0.6)] to-[rgba(40,25,5,0.5)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-hot-pink/10 via-mehndi-pink/5 to-transparent" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-hot-pink/10 blur-[120px]" />
        <div className="absolute left-10 top-24 h-32 w-32 rounded-full bg-vibrant-orange/10 blur-[90px]" />
        <div className="absolute bottom-16 right-10 h-40 w-40 rounded-full bg-mehndi-pink/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-10 md:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] glassmorphic-magic px-8 pt-6 pb-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-12 md:pt-8 md:pb-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-gradient-to-b from-mehndi-pink/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-[10px] rounded-[1.6rem] border border-mehndi-pink/10" />
          <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-mehndi-pink/30" />
          <div className="pointer-events-none absolute right-8 top-8 h-16 w-16 border-r border-t border-vibrant-orange/30" />
          <div className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 border-b border-l border-hot-pink/30" />
          <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-vibrant-orange/30" />

          <div className="relative text-center mb-6">
            <div className="mb-3 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-mehndi-pink/60" />
              <div className="h-2 w-2 rotate-45 border border-hot-pink/70 animate-sparkle" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-vibrant-orange/60" />
            </div>
            <h2 className="mb-2 font-['Cinzel_Decorative',serif] font-light text-5xl tracking-[0.2em] text-mehndi-pink md:text-6xl filter drop-shadow-[0_2px_10px_rgba(255,105,180,0.7)]">
              RSVP
            </h2>
            <p className="font-cinzel text-[11px] tracking-[0.35em] text-cream/95 uppercase text-magical-glow">
              Your presence will make our celebration even more special!
            </p>
            <p className="mb-4 font-cinzel text-sm font-semibold tracking-[0.25em] text-vibrant-orange/95 uppercase filter drop-shadow-[0_0_10px_rgba(255,140,0,0.95)] [text-shadow:0_0_14px_rgba(255,105,180,0.9)]">
              Kindly reply by June 28th, 2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-cream/90 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none w-full rounded-2xl border border-hot-pink/24 bg-mehndi-pink/20 px-5 py-4 text-cream placeholder:text-cream/100 placeholder:opacity-100 outline-none transition-all duration-300 font-montserrat hover:bg-mehndi-pink/28 hover:scale-[1.002] focus:border-mehndi-pink/60 focus:bg-mehndi-pink/36 focus:shadow-[0_0_24px_rgba(255,105,180,0.12)]"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-cream/90 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="appearance-none w-full rounded-2xl border border-hot-pink/24 bg-mehndi-pink/20 px-5 py-4 text-cream placeholder:text-cream/100 placeholder:opacity-100 outline-none transition-all duration-300 font-montserrat hover:bg-mehndi-pink/28 hover:scale-[1.002] focus:border-mehndi-pink/60 focus:bg-mehndi-pink/36 focus:shadow-[0_0_24px_rgba(255,105,180,0.12)]"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="px-1 font-cinzel text-xs tracking-widest text-cream/90 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="appearance-none w-full rounded-2xl border border-hot-pink/24 bg-mehndi-pink/20 px-5 py-4 text-cream placeholder:text-cream/100 placeholder:opacity-100 outline-none transition-all duration-300 font-montserrat hover:bg-mehndi-pink/28 hover:scale-[1.002] focus:border-mehndi-pink/60 focus:bg-mehndi-pink/36 focus:shadow-[0_0_24px_rgba(255,105,180,0.12)]"
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="px-1 font-cinzel text-xs tracking-widest text-cream/90 uppercase">
                Will you be attending?
              </label>
              <select
                required
                className="appearance-none w-full cursor-pointer rounded-2xl border border-hot-pink/24 bg-mehndi-pink/20 px-5 py-4 text-cream outline-none transition-all duration-300 font-montserrat hover:bg-mehndi-pink/28 hover:scale-[1.002] focus:border-mehndi-pink/60 focus:bg-mehndi-pink/36 focus:shadow-[0_0_24px_rgba(255,105,180,0.12)]"
                value={formData.attending}
                onChange={(e) => updateField('attending', e.target.value)}
              >
                <option value="" disabled className="bg-[rgba(60,40,10,0.95)]">
                  Select an option
                </option>
                <option value="yes" className="bg-[rgba(60,40,10,0.95)]">
                  Yes, I will be delighted to attend
                </option>
                <option value="no" className="bg-[rgba(60,40,10,0.95)]">
                  Regretfully, I will not be able to attend
                </option>
              </select>
            </div>

            <div className="rounded-[1.6rem] border border-mehndi-pink/20 bg-white/5 p-5 text-center glassmorphic-magic">
              <p className="font-cinzel text-sm md:text-base tracking-[0.28em] text-white uppercase font-bold filter drop-shadow-[0_2px_8px_rgba(255,105,180,1)] [text-shadow:0_0_12px_rgba(255,105,180,0.8)]">
                RSVP Preview
              </p>
              <p className="mt-3 font-playfair text-2xl md:text-3xl text-vibrant-orange/95 font-semibold text-magical-glow">{attendanceLabel}</p>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-cream/100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                On submit, your mail app opens a ready-made RSVP draft addressed to
                {' '}
                <span className="text-mehndi-pink text-magical-glow">Sana Iqbal</span>.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full border border-hot-pink/40 bg-gradient-to-r from-hot-pink via-mehndi-pink via-vibrant-orange to-warm-red px-8 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.35),_0_0_30px_rgba(255,105,180,0.25)] transition-all duration-300 hover:border-mehndi-pink/70 hover:shadow-[0_18px_40px_rgba(0,0,0,0.4),_0_0_50px_rgba(255,140,0,0.4)] active:scale-[0.985]"
              >
                <span className="pointer-events-none absolute inset-[1px] rounded-full border border-cream/10" />
                <span className="absolute inset-y-0 left-[-20%] w-1/3 rotate-12 bg-white/15 blur-xl transition-all duration-700 group-hover:left-[95%]" />
                <span className="relative font-cinzel text-sm tracking-[0.35em] text-cream uppercase text-magical-glow">
                  Open RSVP Draft
                </span>
              </button>
            </div>

            {statusMessage ? (
              <p
                className="text-center font-montserrat text-sm text-vibrant-orange/80"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
