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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200" onClick={onClose}>
      <button className="absolute top-4 right-4 p-2 bg-slate-900 rounded-full text-white hover:bg-slate-800 transition-all z-[110] border border-slate-700 shadow-xl">
        <X size={24} />
      </button>
      <div className="relative max-w-6xl w-full h-full flex items-center justify-center pointer-events-none">
        <img 
          src={imageSrc} 
          alt="Screenshot Preview" 
          className="max-w-full max-h-full rounded-xl shadow-2xl border border-slate-800 object-contain animate-in zoom-in-95 duration-300 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 md:h-20">
        <div className="flex items-center space-x-2.5 group cursor-pointer">
          <img src={LOGO_ICON} alt="EthioTime Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-lg ring-1 ring-slate-800" />
          <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-tight">
            EthioTime
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'Engine', 'Interface', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest">{item}</a>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <a 
            href="https://ethioall.com/donate_me" 
            target="_blank"
            className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-800 text-xs font-bold hover:bg-slate-900 transition-all"
          >
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span className="uppercase tracking-wide">Donate</span>
          </a>
          <a 
            href="https://github.com/ethioall/"
            target="_blank"
            className="px-5 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-black hover:bg-amber-400 transition-all shadow-lg flex items-center space-x-2 active:scale-95"
          >
            <Github size={16} />
            <span className="uppercase tracking-wide">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full -z-10 opacity-40"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[10px] md:text-xs font-bold mb-8 animate-pulse-slow">
        <Info size={14} className="text-amber-500" />
        <span className="uppercase tracking-widest">Coming Soon to WP Repository</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
        Precise <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-green-500">Ethiopian Timing</span> <br className="hidden md:block" /> for WordPress.
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-slate-400 mb-10 font-medium leading-relaxed">
        Native Ge'ez calendar integration, automatic date conversions, and responsive clock components designed for culturally accurate digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-950 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95">
          <Download size={20} />
          <span className="uppercase tracking-tight text-sm">Notify Me</span>
        </button>
        <a 
          href="https://github.com/ethioall/"
          target="_blank"
          className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 active:scale-95"
        >
          <Github size={20} />
          <span className="uppercase tracking-tight text-sm">View Source</span>
        </a>
      </div>
      
      <div className="mt-20 relative max-w-4xl mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
        <div className="p-2 bg-slate-900/40 rounded-3xl border border-slate-800/60 shadow-2xl overflow-hidden backdrop-blur-md">
          <img 
            src={BANNER} 
            alt="EthioTime Banner" 
            className="w-full h-auto rounded-2xl opacity-90 transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  </section>
);

const ScreenshotsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="interface" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase">Interface</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">Manage formats, templates, and styling with an intuitive dashboard widget.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {SCREENSHOTS.map((src, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-2 hover:border-amber-500/40 transition-all duration-300 shadow-lg active:scale-[0.99]"
            >
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <div className="bg-amber-500 text-slate-950 p-3 rounded-full shadow-xl scale-75 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 size={20} />
                </div>
              </div>
              <img 
                src={src} 
                alt={`EthioTime Screenshot ${i+1}`} 
                className="w-full h-auto rounded-xl transition-all duration-500"
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
    <section id="engine" className="py-24 bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-amber-500/10 rounded-2xl mb-6 border border-amber-500/20">
            <Globe className="text-amber-500" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase">Live Engine</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium">Real-time cultural timekeeping synchronized via our Ge'ez logic core.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="bg-slate-950/80 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group backdrop-blur-md">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-all">
              <Calendar size={160} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-lg text-[9px] font-black tracking-widest uppercase border border-amber-500/20">DATE SYNC</span>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Amete Lidet</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-amber-500/40 tracking-[0.3em] uppercase">Today</h3>
                {loading ? (
                  <div className="h-20 bg-slate-900 rounded-2xl animate-pulse"></div>
                ) : (
                  <p className="text-3xl md:text-4xl lg:text-5xl font-black ethiopic-text leading-tight text-white">
                    {date?.day_amharic} <br />
                    <span className="text-amber-500">{date?.month_amharic} {date?.date}</span>, {date?.year}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-[8px] text-slate-500 font-black mb-2 uppercase tracking-widest">NUMERIC</p>
                <p className="text-base font-bold text-slate-200">{date?.numeric_date}</p>
              </div>
              <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-[8px] text-slate-500 font-black mb-2 uppercase tracking-widest">SYSTEM</p>
                <p className="text-base font-bold text-slate-200">{date?.month_english}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950/80 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group backdrop-blur-md">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-all">
              <Clock size={160} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-lg text-[9px] font-black tracking-widest uppercase border border-red-500/20">TIME OFFSET</span>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">6H Offset</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-red-500/40 tracking-[0.3em] uppercase">Ethio Time</h3>
                {loading ? (
                  <div className="h-20 bg-slate-900 rounded-2xl animate-pulse"></div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
                      {time?.ethiopian_time.hour}:{time?.ethiopian_time.minute.toString().padStart(2, '0')}
                    </p>
                    <p className="text-xl md:text-2xl font-black ethiopic-text text-red-500 uppercase tracking-tight">
                      {time?.ethiopian_time.period_amharic}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
              <p className="text-slate-400 text-xs italic leading-relaxed font-medium">
                EthioTime translates server time into localized 12-hour cycles starting at sunrise.
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
    { title: "Ge'ez Logic", description: "PHP architecture for accurate Amete Lidet math with leap year support.", icon: <Layers size={24} /> },
    { title: "Shortcode Lab", description: "Admin dashboard to create and manage dynamic date slugs effortlessly.", icon: <Code size={24} /> },
    { title: "Template Pro", description: "Use dynamic Ge'ez tokens inside your own custom HTML layouts.", icon: <Layout size={24} /> },
    { title: "Live Sync", description: "Responsive clocks providing real-time local updates for a modern feel.", icon: <Clock size={24} /> },
    { title: "Dashboard Hub", description: "Administrative widgets keeping teams synced with local dates.", icon: <Settings size={24} /> },
    { title: "Hyper-Lean", description: "Optimized codebase. Scripts only load when components are active.", icon: <Cpu size={24} /> }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white uppercase text-balance">Features</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">Cultural relevance meets modern WordPress development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-all group hover:bg-slate-900/50 shadow-md">
              <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 mb-6 border border-slate-800 transition-all duration-300 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-lg font-black mb-3 text-white tracking-tight uppercase">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">{f.description}</p>
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
    { question: "Is it developer friendly?", answer: "Absolutely. Use our core PHP classes directly or implement our shortcodes in your theme's PHP files with ease." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center tracking-tight uppercase text-white">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-900 rounded-2xl overflow-hidden bg-slate-900/10 backdrop-blur-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-slate-900/20 transition-all text-left group"
              >
                <span className="font-bold text-base md:text-lg text-slate-200 group-hover:text-white transition-colors">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 text-amber-500 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} size={24} />
              </button>
              {openIndex === i && (
                <div className="px-6 md:px-8 pb-8 text-slate-400 leading-relaxed font-medium text-sm md:text-base border-t border-slate-900/50 pt-6 animate-in slide-in-from-top-4 duration-300">
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
  <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-8">
            <img src={LOGO_ICON} alt="EthioTime" className="w-10 h-10 rounded-xl" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">EthioTime</span>
          </div>
          <p className="text-slate-400 text-base max-w-sm mb-10 leading-relaxed font-medium">
            Localization refined. The definitive Ethiopian calendar solution for WordPress.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/ethioall/" target="_blank" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950">
              <Github size={20} />
            </a>
            <a href="https://ethioall.com" target="_blank" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.4em]">Explore</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-xs tracking-wider uppercase">
            <li><a href="#features" className="hover:text-amber-500 transition-colors">Features</a></li>
            <li><a href="#engine" className="hover:text-amber-500 transition-colors">Engine</a></li>
            <li><a href="#interface" className="hover:text-amber-500 transition-colors">Interface</a></li>
            <li><a href="https://ethioall.com/donate_me" className="hover:text-amber-500 transition-colors">Donate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.4em]">Connect</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-xs tracking-wider uppercase">
            <li><a href="https://github.com/ethioall/" className="hover:text-amber-500 transition-colors">GitHub</a></li>
            <li><a href="https://ethioall.com" className="hover:text-amber-500 transition-colors">Website</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Docs</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Release</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 space-y-6 md:space-y-0 font-black uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} ETHIOTIME BY <a href="https://github.com/ethioall/" className="text-amber-500 hover:underline">ETHIOALL</a>.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
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
      <section className="py-24 md:py-32 relative overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/5 blur-[150px] rounded-full -z-10 opacity-30"></div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-800 p-12 md:p-20 rounded-[3rem] text-center relative group shadow-2xl backdrop-blur-md overflow-hidden">
            <div className="absolute -top-12 -right-12 p-12 opacity-5 rotate-45 group-hover:rotate-12 transition-all duration-1000 scale-125">
               <img src={LOGO_ICON} className="w-48 h-48" alt="" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] text-white uppercase">Culturally <br/> Precise.</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto text-base md:text-lg font-medium leading-relaxed">Be notified as soon as EthioTime officially launches on the WordPress Repository.</p>
            <div className="flex justify-center">
              <button className="px-10 py-5 bg-amber-500 text-slate-950 rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-all flex items-center space-x-4 shadow-xl active:scale-95">
                <Download size={24} />
                <span className="uppercase tracking-tight">Notify Me</span>
              </button>
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">
               <span className="flex items-center space-x-2"><CheckCircle2 size={16} className="text-amber-500" /> <span>WP 6.9+ READY</span></span>
               <span className="flex items-center space-x-2"><CheckCircle2 size={16} className="text-amber-500" /> <span>GPLv2 LICENSED</span></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}