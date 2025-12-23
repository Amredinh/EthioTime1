
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
  Info
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

// Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <img src={LOGO_ICON} alt="EthioTime Logo" className="w-8 h-8 rounded-lg shadow-lg" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-tight">
            EthioTime
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Features</a>
          <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Live Demo</a>
          <a href="#screenshots" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Interface</a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://ethioall.com/donate_me" 
            target="_blank"
            className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-700 text-sm font-medium hover:bg-slate-800 transition-all"
          >
            <Heart size={16} className="text-red-500 fill-red-500/20" />
            <span>Support</span>
          </a>
          <a 
            href="#installation" 
            className="px-6 py-2 bg-amber-500 text-slate-950 rounded-full text-sm font-bold hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center space-x-2"
          >
            <Download size={16} />
            <span>Install</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/10 blur-[130px] rounded-full -z-10 opacity-60"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-black mb-8 animate-pulse-slow">
        <Info size={14} />
        <span className="uppercase tracking-widest">Under WordPress Review - Coming Soon</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
        Bridging the <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-green-500">Ethiopian Calendar</span> <br /> to WordPress.
      </h1>
      <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 font-medium leading-relaxed">
        Culturally accurate Amete Lidet integration. Automatic date conversion, 12-hour offset logic, and stunning Ge'ez display components for your global audience.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-slate-950 rounded-2xl font-black text-xl hover:bg-amber-400 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-amber-500/20">
          <Download size={22} />
          <span>Get Early Access</span>
        </button>
        <a 
          href="https://github.com/ethioall/"
          target="_blank"
          className="w-full sm:w-auto px-10 py-5 bg-slate-900 border border-slate-700 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all flex items-center justify-center space-x-3"
        >
          <Github size={22} />
          <span>Source Code</span>
        </a>
      </div>
      
      <div className="mt-20 relative max-w-5xl mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        <div className="p-4 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
          <img 
            src={BANNER} 
            alt="EthioTime Banner" 
            className="w-full h-auto rounded-[1.5rem] shadow-inner opacity-90"
          />
        </div>
        {/* Floating element */}
        <div className="absolute -top-10 -right-10 hidden lg:block bg-amber-500 p-6 rounded-3xl shadow-2xl rotate-12 animate-bounce-slow">
           <p className="text-slate-950 font-black text-center text-sm leading-tight">
             100%<br/>ACCURATE
           </p>
        </div>
      </div>
    </div>
  </section>
);

const ScreenshotsSection = () => (
  <section id="screenshots" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Plugin Interface</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">Native WordPress experience designed for ease of use. Manage templates, formats, and CSS with zero coding required.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SCREENSHOTS.map((src, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-2 hover:border-amber-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <img 
              src={src} 
              alt={`EthioTime Screenshot ${i+1}`} 
              className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LiveDemo = () => {
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
    <section id="demo" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-amber-500/10 rounded-2xl mb-6">
            <Globe className="text-amber-500" size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Live Calendar Engine</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">Experience the exact logic that powers our WordPress components. Updated in real-time via the official EthioAll API.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Calendar size={120} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black tracking-widest uppercase">Calendar Conversion</span>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{new Date().getFullYear()} G.C.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-amber-500/50 tracking-[0.2em] mb-4">ETHIOPIAN DATE (E.C.)</h3>
                {loading ? (
                  <div className="h-16 bg-slate-800 rounded-xl animate-pulse"></div>
                ) : (
                  <p className="text-5xl font-black ethiopic-text leading-tight">
                    {date?.day_amharic} <br />
                    <span className="text-amber-500">{date?.month_amharic} {date?.date}</span>, {date?.year}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-black mb-1">NUMERIC</p>
                <p className="text-lg font-bold text-slate-300">{date?.numeric_date}</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-black mb-1">GE'EZ MONTH</p>
                <p className="text-lg font-bold text-slate-300">{date?.month_english}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock size={120} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black tracking-widest uppercase">Cultural Time Sync</span>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">OFFSET: 6 HOURS</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-red-500/50 tracking-[0.2em] mb-4">LOCAL ETHIOPIAN TIME</h3>
                {loading ? (
                  <div className="h-16 bg-slate-800 rounded-xl animate-pulse"></div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-7xl font-black text-white leading-none">
                      {time?.ethiopian_time.hour}:{time?.ethiopian_time.minute.toString().padStart(2, '0')}
                    </p>
                    <p className="text-2xl font-black ethiopic-text text-red-500">
                      {time?.ethiopian_time.period_amharic}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12 p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
              <p className="text-slate-400 text-xs italic leading-relaxed">
                In Ethiopia, the day cycle is split into two 12-hour segments starting from sunrise (6:00 AM) and sunset (6:00 PM). Our logic handles this translation flawlessly.
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
      description: "Robust PHP classes handling complex Amete Lidet math, including Pagume leap year cycles (5-6 days).",
      icon: <Layers size={24} />
    },
    {
      title: "Shortcode Generator",
      description: "Create managed slugs in the admin area. Use them as widgets, in Gutenberg, or anywhere else.",
      icon: <Code size={24} />
    },
    {
      title: "Template System",
      description: "Complete design freedom. Wrap your dates in any HTML and use tokens for dynamic injection.",
      icon: <Layout size={24} />
    },
    {
      title: "Real-time Frontend",
      description: "Live updating JavaScript clock that respects local Ethiopian time without page refreshes.",
      icon: <Clock size={24} />
    },
    {
      title: "Dashboard Integration",
      description: "Administrative widgets keep your content managers synced with the current local date.",
      icon: <Settings size={24} />
    },
    {
      title: "Lightweight Footprint",
      description: "Assets only load when your shortcodes are present, maintaining optimal Core Web Vitals.",
      icon: <Cpu size={24} />
    }
  ];

  return (
    <section id="features" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight">Built for Professionals</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">EthioTime eliminates the guesswork of cultural timekeeping for WordPress sites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-amber-500 mb-8 border border-slate-700 shadow-xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = () => {
  const steps = [
    { title: "Plugin Search", desc: "Search for 'EthioTime' directly from your WordPress dashboard." },
    { title: "Easy Setup", desc: "Activate and navigate to Settings > EthioTime to define your formats." },
    { title: "Create Template", desc: "Design how your date looks using the intuitive template builder." },
    { title: "Go Live", desc: "Copy your custom shortcodes to any page or sidebar widget." }
  ];

  return (
    <section id="installation" className="py-24 bg-amber-500 text-slate-950 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-24 opacity-[0.03]">
        <img src={LOGO_ICON} alt="" className="w-[800px] h-[800px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black mb-8 tracking-tighter">Native Integration.</h2>
            <p className="text-slate-900 text-xl mb-10 font-semibold leading-relaxed">
              EthioTime is built to feel like a core part of WordPress. No messy configurations—just precise Ethiopian logic where you need it.
            </p>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 text-amber-500 flex items-center justify-center font-black shrink-0 mt-1 shadow-lg shadow-black/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1">{s.title}</h4>
                    <p className="text-slate-800 font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-slate-950 rounded-[2.5rem] p-10 shadow-3xl border-[12px] border-slate-900 relative">
                <div className="flex space-x-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-base space-y-4">
                  <p className="text-slate-500">// Coming Soon - Official WP Release</p>
                  <p className="text-green-400 font-bold">$ wp plugin activate ethiotime</p>
                  <p className="text-slate-400"># Compiling Date Logic...</p>
                  <p className="text-slate-400"># Syncing with System Time...</p>
                  <p className="text-blue-400 font-bold">Successfully hooked into Ge'ez Calendar v1.0.0</p>
                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <p className="text-amber-500 font-bold">[ethiotime_shortcode slug="sidebar"]</p>
                    <p className="text-slate-500 mt-2 italic text-sm">// Output: ታኅሣሥ ፭, ፳፻፲፰</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const faqs: FaqItem[] = [
    {
      question: "Is the plugin translation ready?",
      answer: "Yes, the plugin is fully internationalized. It comes with default Amharic translations for all Ge'ez terms and is compatible with multi-lingual plugins like WPML."
    },
    {
      question: "Can I show both calendars simultaneously?",
      answer: "Absolutely. Our template tokens like [Day Amharic] can be used alongside standard Gregorian tokens to create side-by-side date displays."
    },
    {
      question: "Does it support the 'Pagume' month correctly?",
      answer: "Yes. The Ge'ez engine handles the 13th month and correctly identifies whether it should be 5 or 6 days based on the leap year cycle."
    },
    {
      question: "Can I use it in theme development?",
      answer: "Yes. Developers can call our logic classes directly or use do_shortcode() in their PHP template files for deeply integrated custom themes."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight uppercase">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 hover:bg-slate-900/50 transition-colors text-left"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 text-amber-500 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-slate-400 leading-relaxed font-medium">
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-8">
            <img src={LOGO_ICON} alt="EthioTime" className="w-10 h-10 shadow-xl" />
            <span className="text-2xl font-black text-white tracking-tighter">EthioTime</span>
          </div>
          <p className="text-slate-400 text-lg max-w-sm mb-10 leading-relaxed font-medium">
            Bridging cultures through precise, localized timekeeping for the modern WordPress ecosystem.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/ethioall/" target="_blank" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-800 hover:border-amber-500/50 transition-all text-slate-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://ethioall.com" target="_blank" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-800 hover:border-amber-500/50 transition-all text-slate-400 hover:text-white">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="#features" className="hover:text-amber-500 transition-colors">Key Features</a></li>
            <li><a href="#demo" className="hover:text-amber-500 transition-colors">API Demo</a></li>
            <li><a href="#screenshots" className="hover:text-amber-500 transition-colors">Screenshots</a></li>
            <li><a href="https://ethioall.com/donate_me" className="hover:text-amber-500 transition-colors">Donation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Development</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="https://github.com/ethioall/" className="hover:text-amber-500 transition-colors">GitHub Profile</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Join Review</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Coming Soon</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0 font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} ETHIOTIME BY ETHIOALL. GPLv2 LICENSED.</p>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-amber-500 transition-colors">Security</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Legal</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <LiveDemo />
      <FeaturesSection />
      <ScreenshotsSection />
      <Installation />
      <Faq />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-amber-500/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-16 md:p-24 rounded-[4rem] text-center relative group">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <img src={LOGO_ICON} className="w-40 h-40" alt="" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready for the Ge'ez<br/>Transition?</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Join the waiting list to be notified as soon as EthioTime clears the WordPress official review process.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-amber-500 text-slate-950 rounded-3xl font-black text-2xl hover:scale-105 transition-all flex items-center space-x-3 shadow-2xl shadow-amber-500/20">
                <Download size={24} />
                <span>Get Early Access</span>
              </button>
            </div>
            <div className="mt-14 flex items-center justify-center space-x-8 text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
               <span className="flex items-center space-x-2"><CheckCircle2 size={18} className="text-amber-500" /> <span>WordPress 6.9 Ready</span></span>
               <span className="flex items-center space-x-2 hidden sm:flex"><CheckCircle2 size={18} className="text-amber-500" /> <span>No Subscription</span></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
