
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
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose}>
      <button className="absolute top-6 right-6 p-2 bg-slate-900 rounded-full text-white hover:bg-slate-800 transition-colors">
        <X size={24} />
      </button>
      <img 
        src={imageSrc} 
        alt="Screenshot Full View" 
        className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-slate-800 object-contain zoom-in animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center space-x-3">
          <img src={LOGO_ICON} alt="EthioTime Logo" className="w-10 h-10 rounded-xl shadow-lg ring-1 ring-slate-800" />
          <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-tighter">
            EthioTime
          </span>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#features" className="text-sm font-bold text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest">Features</a>
          <a href="#engine" className="text-sm font-bold text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest">Engine</a>
          <a href="#interface" className="text-sm font-bold text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest">Interface</a>
          <a href="#faq" className="text-sm font-bold text-slate-400 hover:text-amber-400 transition-all uppercase tracking-widest">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://ethioall.com/donate_me" 
            target="_blank"
            className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-2xl border border-slate-800 text-sm font-bold hover:bg-slate-900 transition-all hover:border-amber-500/50"
          >
            <Heart size={16} className="text-red-500 fill-red-500/20" />
            <span>Support</span>
          </a>
          <a 
            href="https://github.com/ethioall/"
            target="_blank"
            className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-2xl text-sm font-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 flex items-center space-x-2"
          >
            <Github size={18} />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-44 pb-20 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-amber-500/10 blur-[150px] rounded-full -z-10 opacity-50"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] md:text-xs font-black mb-10 animate-pulse-slow">
        <Info size={16} />
        <span className="uppercase tracking-[0.2em]">WP Repository Review In Progress — Coming Soon</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-white">
        Precise <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-green-500">Ethiopian Timing</span> <br className="hidden md:block" /> for WordPress.
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 mb-14 font-medium leading-relaxed">
        The complete Ge'ez calendar toolkit. Automatic date conversion, live frontend clocks, and native dashboard integration designed for cultural accuracy.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button className="w-full sm:w-auto px-12 py-5 bg-amber-500 text-slate-950 rounded-3xl font-black text-xl hover:scale-105 transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-amber-500/20">
          <Download size={24} />
          <span>Coming Soon</span>
        </button>
        <a 
          href="https://github.com/ethioall/"
          target="_blank"
          className="w-full sm:w-auto px-12 py-5 bg-slate-900 border border-slate-800 text-white rounded-3xl font-bold text-xl hover:bg-slate-800 transition-all flex items-center justify-center space-x-3"
        >
          <Github size={24} />
          <span>Star on GitHub</span>
        </a>
      </div>
      
      <div className="mt-28 relative max-w-5xl mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
        <div className="p-2 bg-slate-900/50 rounded-[3rem] border border-slate-800/50 shadow-3xl overflow-hidden backdrop-blur-sm">
          <img 
            src={BANNER} 
            alt="EthioTime Banner" 
            className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-90 scale-100 hover:scale-[1.02] transition-transform duration-1000"
          />
        </div>
      </div>
    </div>
  </section>
);

const ScreenshotsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="interface" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Plugin Interface</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">A seamless administrative experience. Manage all your Ethiopian date assets without ever touching code.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SCREENSHOTS.map((src, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-2 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <div className="bg-amber-500 text-slate-950 p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
              </div>
              <img 
                src={src} 
                alt={`EthioTime Screenshot ${i+1}`} 
                className="w-full h-auto rounded-2xl group-hover:scale-105 transition-all duration-700"
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
        day_amharic: "እሑድ",
        day_english: "Sunday",
        month_amharic: "ታኅሣሥ",
        month_english: "Tahsas",
        month_number: 4,
        date: 5,
        year: 2018,
        numeric_date: "5-4-2018"
      });
      setTime({
        system_time: new Date().toLocaleTimeString(),
        ethiopian_time: {
          hour: 5,
          minute: 15,
          second: 2,
          period_amharic: "ከጠዋቱ"
        }
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
    <section id="engine" className="py-32 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-5 bg-amber-500/10 rounded-3xl mb-8 border border-amber-500/20">
            <Globe className="text-amber-500" size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Live Calendar Engine</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">The high-performance logic powering our shortcodes, widgets, and dashboard components. Accurate to the second.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800 shadow-3xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Calendar size={180} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-16">
                <span className="px-4 py-1.5 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black tracking-widest uppercase border border-amber-500/20">CALENDAR ENGINE</span>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Amete Lidet Sync</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-black text-amber-500/50 tracking-[0.3em] uppercase">Today's Date</h3>
                {loading ? (
                  <div className="h-24 bg-slate-900 rounded-2xl animate-pulse"></div>
                ) : (
                  <p className="text-5xl md:text-6xl font-black ethiopic-text leading-[1.1] text-white">
                    {date?.day_amharic} <br />
                    <span className="text-amber-500">{date?.month_amharic} {date?.date}</span>, {date?.year}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/50 rounded-3xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-black mb-2 uppercase tracking-widest">NUMERIC FORMAT</p>
                <p className="text-xl font-bold text-slate-200">{date?.numeric_date}</p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-3xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-black mb-2 uppercase tracking-widest">GE'EZ NAME</p>
                <p className="text-xl font-bold text-slate-200">{date?.month_english}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800 shadow-3xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock size={180} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-16">
                <span className="px-4 py-1.5 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black tracking-widest uppercase border border-red-500/20">LIVE CLOCK ENGINE</span>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest">12h Offset Active</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-black text-red-500/50 tracking-[0.3em] uppercase">Cultural Time</h3>
                {loading ? (
                  <div className="h-24 bg-slate-900 rounded-2xl animate-pulse"></div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-8xl font-black text-white leading-none tracking-tighter">
                      {time?.ethiopian_time.hour}:{time?.ethiopian_time.minute.toString().padStart(2, '0')}
                    </p>
                    <p className="text-3xl font-black ethiopic-text text-red-500">
                      {time?.ethiopian_time.period_amharic}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-16 p-8 bg-red-500/5 border border-red-500/10 rounded-[2.5rem]">
              <p className="text-slate-400 text-sm italic leading-relaxed font-medium">
                Our logic handles the precise 6-hour offset of Ethiopian time, ensuring your clock starts at sunrise as culturally expected.
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
    {
      title: "Ge'ez Engine",
      description: "Robust PHP architecture for complex Amete Lidet calculations with full leap year support.",
      icon: <Layers size={28} />
    },
    {
      title: "Shortcode Lab",
      description: "Generate and manage custom date/time formats via a native administrative dashboard.",
      icon: <Code size={28} />
    },
    {
      title: "Template Studio",
      description: "Total visual freedom. Wrap your date components in any HTML using simple dynamic tokens.",
      icon: <Layout size={28} />
    },
    {
      title: "Real-time Frontend",
      description: "Optimized JS clocks that provide live updates to users without expensive page reloads.",
      icon: <Clock size={28} />
    },
    {
      title: "WP-Admin Widgets",
      description: "Custom dashboard cards that keep your entire editorial team synced to the local calendar.",
      icon: <Settings size={28} />
    },
    {
      title: "Performance First",
      description: "Ultra-lean code. Assets only load on pages where EthioTime components are active.",
      icon: <Cpu size={28} />
    }
  ];

  return (
    <section id="features" className="py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">Advanced Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Built for scalability. EthioTime handles the math so you can focus on the content.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="p-12 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 transition-all group hover:bg-slate-900/60">
              <div className="w-16 h-16 bg-slate-950 rounded-3xl flex items-center justify-center text-amber-500 mb-10 border border-slate-800 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-amber-500/10">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-lg">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const faqs: FaqItem[] = [
    {
      question: "Is the plugin translation ready?",
      answer: "Yes, EthioTime is fully internationalized. It ships with built-in Amharic strings and is compatible with multi-lingual ecosystems like WPML and Polylang."
    },
    {
      question: "Can I show both calendars simultaneously?",
      answer: "Absolutely. You can design templates that combine [Day Amharic] with standard WordPress date tokens for side-by-side Gregorian and Ethiopian views."
    },
    {
      question: "How does it handle Pagume?",
      answer: "Our engine precisely calculates the 13th month, including the transition between 5 and 6 days based on the 4-year Ethiopian leap cycle."
    },
    {
      question: "Is it developer friendly?",
      answer: "Yes. Developers can interact with our core PHP classes directly or use shortcodes via do_shortcode() in their custom theme templates."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center tracking-tighter uppercase">Common Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-900 rounded-[2.5rem] overflow-hidden bg-slate-900/20 backdrop-blur-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-10 hover:bg-slate-900/40 transition-all text-left group"
              >
                <span className="font-black text-xl md:text-2xl text-slate-200 group-hover:text-white transition-colors">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 text-amber-500 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} size={32} />
              </button>
              {openIndex === i && (
                <div className="px-10 pb-10 text-slate-400 leading-relaxed font-medium text-lg border-t border-slate-900/50 pt-6 animate-in slide-in-from-top-4 duration-500">
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
  <footer className="bg-slate-950 pt-32 pb-16 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-4 mb-10">
            <img src={LOGO_ICON} alt="EthioTime" className="w-12 h-12 shadow-2xl rounded-2xl" />
            <span className="text-3xl font-black text-white tracking-tighter">EthioTime</span>
          </div>
          <p className="text-slate-400 text-xl max-w-sm mb-12 leading-relaxed font-medium">
            Bridging cultures with precision. The definitive Ge'ez calendar solution for modern WordPress sites.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/ethioall/" target="_blank" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950 group">
              <Github size={28} />
            </a>
            <a href="https://ethioall.com" target="_blank" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-400 hover:text-slate-950 group">
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-10 uppercase text-xs tracking-[0.4em]">Quick Access</h4>
          <ul className="space-y-5 text-slate-400 font-bold text-sm tracking-widest">
            <li><a href="#features" className="hover:text-amber-500 transition-colors uppercase">Features</a></li>
            <li><a href="#engine" className="hover:text-amber-500 transition-colors uppercase">Engine</a></li>
            <li><a href="#interface" className="hover:text-amber-500 transition-colors uppercase">Interface</a></li>
            <li><a href="https://ethioall.com/donate_me" className="hover:text-amber-500 transition-colors uppercase">Support Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-10 uppercase text-xs tracking-[0.4em]">Developer</h4>
          <ul className="space-y-5 text-slate-400 font-bold text-sm tracking-widest">
            <li><a href="https://github.com/ethioall/" className="hover:text-amber-500 transition-colors uppercase">GitHub Profile</a></li>
            <li><a href="https://ethioall.com" className="hover:text-amber-500 transition-colors uppercase">Website</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors uppercase">Waitlist</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors uppercase">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-500 space-y-6 md:space-y-0 font-black uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} ETHIOTIME BY <a href="https://github.com/ethioall/" className="text-amber-500 hover:underline">ETHIOALL</a>. GPLv2 LICENSED.</p>
        <div className="flex space-x-12">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      
      {/* Integrated Live Calendar Engine */}
      <LiveCalendarEngine />
      
      <FeaturesSection />
      
      {/* Plugin Interface with Click-to-Popup */}
      <ScreenshotsSection />
      
      <Faq />
      
      {/* Call to Action Section */}
      <section className="py-40 relative overflow-hidden px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-amber-500/10 blur-[150px] rounded-full -z-10 opacity-30"></div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-16 md:p-28 rounded-[4rem] text-center relative group shadow-3xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-all duration-1000 scale-125">
               <img src={LOGO_ICON} className="w-64 h-64" alt="" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1] text-white">Join the Future <br/> of Ge'ez Web.</h2>
            <p className="text-slate-400 mb-14 max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">Be among the first to deploy EthioTime once it clears official review. Secure, accurate, and optimized for WordPress 6.9+.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="px-14 py-6 bg-amber-500 text-slate-950 rounded-3xl font-black text-2xl hover:scale-105 transition-all flex items-center space-x-4 shadow-3xl shadow-amber-500/30">
                <Download size={28} />
                <span>Notify Me on Release</span>
              </button>
            </div>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-xs font-black text-slate-500 uppercase tracking-[0.3em]">
               <span className="flex items-center space-x-2"><CheckCircle2 size={20} className="text-amber-500" /> <span>WordPress 6.9+</span></span>
               <span className="flex items-center space-x-2"><CheckCircle2 size={20} className="text-amber-500" /> <span>GPLv2 Licensed</span></span>
               <span className="flex items-center space-x-2"><CheckCircle2 size={20} className="text-amber-500" /> <span>Clean Codebase</span></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
