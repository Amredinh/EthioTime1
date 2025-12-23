import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Code, 
  Layout, 
  Cpu, 
  Download, 
  Heart, 
  ChevronDown, 
  Globe,
  Settings,
  Layers,
  CheckCircle2,
  ExternalLink,
  Github,
  Info,
  X,
  Maximize2
} from 'lucide-react';
import { EthioDateResponse, EthioTimeResponse, Feature, FaqItem } from './types';

const LOGO_ICON = "https://coffe.ethioall.com/wp-content/uploads/2025/12/icon-128x128-1.png";
const BANNER = "https://coffe.ethioall.com/wp-content/uploads/2025/12/banner-772x250-1.png";
const SCREENSHOTS = [
  "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-1.png",
  "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-2.png",
  "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-3.png",
  "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-4.png"
];

const Modal = ({ isOpen, onClose, imageSrc }: { isOpen: boolean, onClose: () => void, imageSrc: string }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/98 backdrop-blur-2xl animate-in fade-in duration-300" onClick={onClose}>
      <button className="absolute top-6 right-6 p-3 bg-slate-900 rounded-full text-white hover:bg-slate-800 transition-all z-[110] border border-slate-700 shadow-2xl">
        <X size={28} />
      </button>
      <div className="relative max-w-7xl w-full h-full flex items-center justify-center pointer-events-none">
        <img 
          src={imageSrc} 
          alt="Screenshot Preview" 
          className="max-w-full max-h-full rounded-2xl shadow-[0_0_100px_rgba(245,158,11,0.15)] border border-slate-800 object-contain animate-in zoom-in-95 duration-500 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-900/80">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-center h-20 md:h-24">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img src={LOGO_ICON} alt="EthioTime Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-2xl ring-1 ring-slate-800 group-hover:ring-amber-500/50 transition-all" />
          <span className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-tighter">
            EthioTime
          </span>
        </div>
        <div className="hidden lg:flex items-center space-x-12">
          {['Features', 'Engine', 'Interface', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-black text-slate-400 hover:text-amber-400 transition-all uppercase tracking-[0.2em]">{item}</a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://ethioall.com/donate_me" 
            target="_blank"
            className="hidden sm:flex items-center space-x-2 px-5 py-3 rounded-2xl border border-slate-800 text-sm font-black hover:bg-slate-900 transition-all hover:border-amber-500/50"
          >
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span className="uppercase tracking-wider">Donate</span>
          </a>
          <a 
            href="https://github.com/ethioall/"
            target="_blank"
            className="px-6 py-3 bg-amber-500 text-slate-950 rounded-2xl text-sm font-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 flex items-center space-x-2 active:scale-95"
          >
            <Github size={18} />
            <span className="uppercase tracking-wider">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 md:pt-52 pb-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-amber-500/10 blur-[180px] rounded-full -z-10 opacity-40"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[10px] md:text-xs font-black mb-12 animate-pulse-slow">
        <Info size={14} className="text-amber-500" />
        <span className="uppercase tracking-[0.3em]">WP Repository Review — Coming Soon</span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-white text-balance">
        The Future of <br className="hidden lg:block" /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-green-500">Ethiopic Time</span> <br className="hidden lg:block" /> on WordPress.
      </h1>
      <p className="max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl text-slate-400 mb-16 font-medium leading-relaxed text-balance">
        Native Ge'ez calendar integration, automatic date conversions, and responsive clock components designed for the next generation of Ethiopian websites.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button className="w-full sm:w-auto px-12 py-6 bg-amber-500 text-slate-950 rounded-[2rem] font-black text-xl md:text-2xl hover:scale-105 transition-all flex items-center justify-center space-x-4 shadow-3xl shadow-amber-500/30">
          <Download size={28} />
          <span className="uppercase tracking-tight">Coming Soon</span>
        </button>
        <a 
          href="https://github.com/ethioall/"
          target="_blank"
          className="w-full sm:w-auto px-12 py-6 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white rounded-[2rem] font-bold text-xl md:text-2xl hover:bg-slate-800 transition-all flex items-center justify-center space-x-4"
        >
          <Github size={28} />
          <span className="uppercase tracking-tight">Developer Profile</span>
        </a>
      </div>
      
      <div className="mt-32 relative max-w-6xl mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        <div className="p-3 bg-slate-900/40 rounded-[3.5rem] border border-slate-800/60 shadow-3xl overflow-hidden backdrop-blur-md ring-1 ring-white/5">
          <img 
            src={BANNER} 
            alt="EthioTime Banner" 
            className="w-full h-auto rounded-[2.8rem] shadow-2xl scale-100 hover:scale-[1.01] transition-all duration-1000 ease-out"
          />
        </div>
      </div>
    </div>
  </section>
);

const ScreenshotsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="interface" className="py-40 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase">Interface</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">Admin-friendly controls. Define formats, templates, and styling with an intuitive dashboard widget.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {SCREENSHOTS.map((src, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/30 p-2.5 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.1)] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <div className="bg-amber-500 text-slate-950 p-5 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-all duration-500">
                  <Maximize2 size={32} />
                </div>
              </div>
              <img 
                src={src} 
                alt={`EthioTime Screenshot ${i+1}`} 
                className="w-full h-auto rounded-[2rem] transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageSrc={selectedImage || ''} />
    </section>
  );
};

const LiveCalendarEngine = () => {
  const [date, setDate] = useState<EthioDateResponse | null>(null);
  const [time, setTime] = useState<EthioTimeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [dateRes, timeRes] = await Promise.all([
        fetch('https://api.ethioall.com/date/api').then(res => res.json()),
        fetch('https://api.ethioall.com/time/api').then(res => res.json())
      ]);
      setDate(dateRes);
      setTime(timeRes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching API:', error);
      setDate({
        day_amharic: "እሑድ", day_english: "Sunday", month_amharic: "ታኅሣሥ",
        month_english: "Tahsas", month_number: 4, date: 5, year: 2018, numeric_date: "5-4-2018"
      });
      setTime({
        system_time: new Date().toLocaleTimeString(),
        ethiopian_time: { hour: 5, minute: 15, second: 2, period_amharic: "ከጠዋቱ" }
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="engine" className="py-40 bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <div className="inline-block p-6 bg-amber-500/10 rounded-[2rem] mb-10 border border-amber-500/20">
            <Globe className="text-amber-500" size={48} />
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase">Live Engine</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">The high-performance core that drives our WordPress assets. Cultural timekeeping, synchronized in real-time.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="bg-slate-950/80 p-12 md:p-16 rounded-[4rem] border border-slate-800 shadow-3xl relative overflow-hidden flex flex-col justify-between group backdrop-blur-md">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
              <Calendar size={240} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-20">
                <span className="px-5 py-2 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-amber-500/20">GE'EZ LOGIC</span>
                <p className="text-xs text-slate-500 font-black uppercase tracking-[0.2em]">Amete Lidet Sync</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-black text-amber-500/40 tracking-[0.4em] uppercase">Current Date</h3>
                {loading ? (
                  <div className="h-32 bg-slate-900 rounded-3xl animate-pulse"></div>
                ) : (
                  <p className="text-5xl md:text-7xl font-black ethiopic-text leading-[1.1] text-white">
                    {date?.day_amharic} <br />
                    <span className="text-amber-500">{date?.month_amharic} {date?.date}</span>, {date?.year}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900/50 rounded-[2rem] border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                <p className="text-[10px] text-slate-500 font-black mb-3 uppercase tracking-widest">NUMERIC</p>
                <p className="text-2xl font-black text-slate-200">{date?.numeric_date}</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-[2rem] border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                <p className="text-[10px] text-slate-500 font-black mb-3 uppercase tracking-widest">LOCAL NAME</p>
                <p className="text-2xl font-black text-slate-200">{date?.month_english}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950/80 p-12 md:p-16 rounded-[4rem] border border-slate-800 shadow-3xl relative overflow-hidden flex flex-col justify-between group backdrop-blur-md">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
              <Clock size={240} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-20">
                <span className="px-5 py-2 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-red-500/20">TIME OFFSET</span>
                <p className="text-xs text-slate-500 font-black uppercase tracking-[0.2em]">6H Cultural Adjust</p>
              </div>
              <div className="space-y-8">
                <h3 className="text-xs font-black text-red-500/40 tracking-[0.4em] uppercase">Ethiopian Time</h3>
                {loading ? (
                  <div className="h-32 bg-slate-900 rounded-3xl animate-pulse"></div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-8xl md:text-9xl font-black text-white leading-none tracking-tighter">
                      {time?.ethiopian_time.hour}:{time?.ethiopian_time.minute.toString().padStart(2, '0')}
                    </p>
                    <p className="text-4xl font-black ethiopic-text text-red-500 uppercase tracking-tight">
                      {time?.ethiopian_time.period_amharic}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-20 p-8 bg-red-500/5 border border-red-500/10 rounded-[2.5rem]">
              <p className="text-slate-400 text-lg italic leading-relaxed font-medium">
                EthioTime automatically translates standard server time into localized Ethiopian 12-hour cycles starting at sunrise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features: Feature[] = [
    { title: "Ge'ez Logic", description: "Advanced PHP architecture for accurate Amete Lidet calculations with leap year cycles.", icon: <Layers size={32} /> },
    { title: "Shortcode Lab", description: "Intuitive admin dashboard to create and manage dynamic date slugs effortlessly.", icon: <Code size={32} /> },
    { title: "Template Pro", description: "Total visual control. Use dynamic Ge'ez tokens inside your own custom HTML layouts.", icon: <Layout size={32} /> },
    { title: "Live Sync", description: "Responsive frontend clocks providing real-time local updates for a modern feel.", icon: <Clock size={32} /> },
    { title: "Dashboard Hub", description: "Administrative widgets keeping your entire team synced with local Ethiopian dates.", icon: <Settings size={32} /> },
    { title: "Hyper-Lean", description: "Production-ready codebase. Scripts only load when EthioTime components are active.", icon: <Cpu size={32} /> }
  ];

  return (
    <section id="features" className="py-48 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white uppercase">Features</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">Everything you need to build culturally relevant WordPress experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {features.map((f, i) => (
            <div key={i} className="p-14 rounded-[4rem] bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 transition-all group hover:bg-slate-900/60 shadow-xl">
              <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center text-amber-500 mb-12 border border-slate-800 shadow-2xl group-hover:scale-110 group-hover:shadow-amber-500/10 transition-all duration-500">
                {f.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight uppercase">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-lg md:text-xl">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const faqs: FaqItem[] = [
    { question: "Is the plugin translation ready?", answer: "Yes, EthioTime is fully localized. It includes official Amharic translations and works seamlessly with multi-lingual setups." },
    { question: "Can I show both calendars together?", answer: "Yes. You can combine Ethiopian [Month Amharic] tokens with standard Gregorian dates in your custom templates." },
    { question: "How does it handle Pagume?", answer: "Our logic engine precisely calculates the 13th month, handling 5 or 6 day transitions based on the leap cycle." },
    { question: "Is it suitable for developers?", answer: "Absolutely. Use our core PHP classes directly or implement our shortcodes in your theme's PHP files with ease." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-48">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-8xl font-black mb-24 text-center tracking-tighter uppercase text-white">FAQ</h2>
        <div className="space-y-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-900 rounded-[3rem] overflow-hidden bg-slate-900/20 backdrop-blur-xl transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-12 hover:bg-slate-900/40 transition-all text-left group"
              >
                <span className="font-black text-2xl md:text-3xl text-slate-200 group-hover:text-white transition-colors text-balance">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 text-amber-500 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} size={40} />
              </button>
              {openIndex === i && (
                <div className="px-12 pb-12 text-slate-400 leading-relaxed font-medium text-xl border-t border-slate-900/50 pt-8 animate-in slide-in-from-top-4 duration-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-40 pb-20 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-5 mb-12">
            <img src={LOGO_ICON} alt="EthioTime" className="w-14 h-14 shadow-3xl rounded-[1.25rem] ring-2 ring-slate-800" />
            <span className="text-4xl font-black text-white tracking-tighter">EthioTime</span>
          </div>
          <p className="text-slate-400 text-2xl max-w-sm mb-14 leading-relaxed font-medium text-balance">
            Localization refined. The definitive Ethiopian calendar solution for WordPress.
          </p>
          <div className="flex space-x-8">
            <a href="https://github.com/ethioall/" target="_blank" className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950 shadow-xl">
              <Github size={32} />
            </a>
            <a href="https://ethioall.com" target="_blank" className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950 shadow-xl">
              <ExternalLink size={32} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase text-xs tracking-[0.5em]">Explore</h4>
          <ul className="space-y-6 text-slate-400 font-black text-sm tracking-[0.2em] uppercase">
            <li><a href="#features" className="hover:text-amber-500 transition-colors">Features</a></li>
            <li><a href="#engine" className="hover:text-amber-500 transition-colors">Engine</a></li>
            <li><a href="#interface" className="hover:text-amber-500 transition-colors">Interface</a></li>
            <li><a href="https://ethioall.com/donate_me" className="hover:text-amber-500 transition-colors">Donation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase text-xs tracking-[0.5em]">Source</h4>
          <ul className="space-y-6 text-slate-400 font-black text-sm tracking-[0.2em] uppercase">
            <li><a href="https://github.com/ethioall/" className="hover:text-amber-500 transition-colors">GitHub</a></li>
            <li><a href="https://ethioall.com" className="hover:text-amber-500 transition-colors">EthioAll</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Release</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-16 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-8 md:space-y-0 font-black uppercase tracking-[0.4em]">
        <p>© {new Date().getFullYear()} ETHIOTIME BY <a href="https://github.com/ethioall/" className="text-amber-500 hover:underline">ETHIOALL</a>. GPLv2.</p>
        <div className="flex flex-wrap justify-center gap-12">
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <LiveCalendarEngine />
      <FeaturesSection />
      <ScreenshotsSection />
      <Faq />
      
      {/* High-Impact CTA */}
      <section className="py-48 relative overflow-hidden px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/10 blur-[200px] rounded-full -z-10 opacity-30"></div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-20 md:p-32 rounded-[5rem] text-center relative group shadow-4xl backdrop-blur-md">
            <div className="absolute -top-20 -right-20 p-24 opacity-5 rotate-45 group-hover:rotate-12 transition-all duration-1000 scale-150">
               <img src={LOGO_ICON} className="w-80 h-80" alt="" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-white text-balance uppercase">Localized <br/> Excellence.</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-xl md:text-3xl font-medium leading-relaxed text-balance">Be the first to know when EthioTime officially launches on the WordPress Repository.</p>
            <div className="flex flex-wrap justify-center gap-10">
              <button className="px-16 py-8 bg-amber-500 text-slate-950 rounded-[2.5rem] font-black text-2xl md:text-3xl hover:scale-105 transition-all flex items-center space-x-5 shadow-3xl shadow-amber-500/40 active:scale-95">
                <Download size={32} />
                <span className="uppercase tracking-tight">Notify Me</span>
              </button>
            </div>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-12 text-xs font-black text-slate-500 uppercase tracking-[0.4em]">
               <span className="flex items-center space-x-3"><CheckCircle2 size={24} className="text-amber-500" /> <span>WordPress 6.9+ Ready</span></span>
               <span className="flex items-center space-x-3"><CheckCircle2 size={24} className="text-amber-500" /> <span>GPLv2 Licensed</span></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}