import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Star, FlaskConical, ShoppingBag, ExternalLink, X, Flame, Droplets, Wind, Leaf, Eye, BookOpen, ChevronDown } from 'lucide-react';

// --- GALLERY IMAGES DATA ---
const GALLERY_ITEMS = [
  { 
    id: "main",
    label: "The Apothecary", 
    sublabel: "Main Screenshot",
    image: "/screenshots/main.png", // Add your screenshot here
    icon: Moon,
    colSpan: 2,
    rowSpan: 2,
    featured: true
  },
  { 
    id: "crafting",
    label: "Potion Crafting", 
    image: "/screenshots/recipebook.png", // Add your screenshot here
    icon: Droplets,
    colSpan: 2,
    rowSpan: 1,
    iconColor: "text-cyan-500/50"
  },
  { 
    id: "ingredients",
    label: "Ingredients", 
    image: "/screenshots/shop_order.png", // Add your screenshot here
    icon: Wind,
    colSpan: 1,
    rowSpan: 1,
    iconColor: "text-emerald-500/50"
  },
  { 
    id: "market",
    label: "Night Market", 
    image: "/screenshots/market.png", // Add your screenshot here
    icon: Star,
    colSpan: 1,
    rowSpan: 1,
    iconColor: "text-amber-500/50"
  }
];

// --- GAME FEATURES DATA ---
const FEATURES = [
  { 
    title: "Precise Alchemy System", 
    desc: "Every herb has its weight. Master the art of grinding, timing, and temperature to craft potions of legendary potency.",
    icon: FlaskConical,
    color: "purple"
  },
  { 
    title: "Mystical Ingredients", 
    desc: "Harvest moonlit herbs, capture ethereal essences, and discover rare components hidden in the shadows.",
    icon: Leaf,
    color: "emerald"
  },
  { 
    title: "Shop Management", 
    desc: "Serve mysterious travelers, manage your inventory, and grow your reputation as the realm's finest alchemist.",
    icon: ShoppingBag,
    color: "amber"
  },
  { 
    title: "Atmospheric World", 
    desc: "Immerse yourself in a hand-crafted 2D world where every shadow tells a story and magic lingers in the air.",
    icon: Eye,
    color: "cyan"
  }
];

// --- FRAMER MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 30px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)",
      "0 0 50px rgba(147, 51, 234, 0.6), 0 0 100px rgba(147, 51, 234, 0.3)",
      "0 0 30px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)"
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleWishlist = () => {
    setShowModal(true);
  };

  const openLightbox = (item) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/30 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/30 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[40%] left-[50%] w-[40%] h-[40%] bg-violet-800/20 blur-[120px] rounded-full" 
        />
      </div>

      {/* NAVBAR - GLASSMORPHISM */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-2xl font-bold tracking-tight text-purple-400 cursor-pointer"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <Moon size={28} fill="currentColor" className="text-purple-400" /> 
            <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">MOONBREW</span>
          </motion.div>
          
          <div className="hidden md:flex gap-10 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            {['About', 'Gallery'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                whileHover={{ color: '#a78bfa', y: -2 }}
                className="transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <span className="text-purple-400/40 cursor-not-allowed">Coming Soon</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWishlist}
            className="hidden sm:block bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-purple-900/30 border border-purple-400/20"
          >
            Follow Development
          </motion.button>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl z-10"
        >
          {/* Floating Icon */}
          <motion.div 
            variants={fadeInUp}
            className="float inline-block mb-8"
          >
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-5 bg-purple-500/10 rounded-3xl border border-purple-500/20 backdrop-blur-xl shadow-[0_0_50px_rgba(147,51,234,0.2)]"
            >
              <Sparkles className="text-purple-400" size={44} />
            </motion.div>
          </motion.div>
          
          {/* Main Title with Shimmer */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-black mb-8 leading-[0.95] tracking-tight"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <span className="shimmer-text block">Mystery is brewing</span>
            <span className="bg-gradient-to-b from-white via-purple-200 to-purple-500 bg-clip-text text-transparent block">under the moonlight.</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl lg:text-2xl mb-14 leading-relaxed font-light"
          >
            Step into the shoes of a lunar alchemist. Craft rare essences, serve eccentric travelers, and manage your very own <span className="text-purple-400 font-medium">mystical apothecary</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            {/* Primary CTA with Pulse Animation */}
            <motion.button 
              onClick={handleWishlist}
              variants={glowPulse}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-2xl font-black text-lg md:text-xl transition-all flex items-center justify-center gap-3 border border-purple-400/30"
            >
              <span style={{ fontFamily: 'Cinzel, serif' }}>Wishlist on Steam</span>
              <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            {/* Secondary CTA */}
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 bg-white/5 backdrop-blur-xl rounded-2xl font-bold text-lg md:text-xl border border-white/10 transition-all flex items-center justify-center gap-2 hover:border-purple-500/30"
            >
              <BookOpen size={22} className="text-purple-400" />
              <span>Explore the World</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform text-gray-500" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 scroll-indicator"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* ABOUT THE GAME SECTION */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">The Experience</span>
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Your Cauldron, Your Legacy
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              A 2D atmospheric alchemy simulation made in Unity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Description + Features */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 border-l-2 border-purple-500/50 pl-6 italic">
                "Moonbrew combines precise potion crafting mechanics with shop management. Measure ingredients, control heat levels, and time your brews perfectly, then sell them to customers who visit your shop."
              </blockquote>
              
              {/* Feature Cards - Parchment Style */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {FEATURES.map((feature, i) => {
                  const IconComponent = feature.icon;
                  const colorClasses = {
                    purple: "group-hover:text-purple-400 group-hover:rotate-12",
                    emerald: "group-hover:text-emerald-400 group-hover:-rotate-12",
                    amber: "group-hover:text-amber-400 group-hover:rotate-12",
                    cyan: "group-hover:text-cyan-400 group-hover:-rotate-12"
                  };
                  
                  return (
                    <motion.div 
                      key={i}
                      variants={scaleIn}
                      whileHover={{ y: -5, borderColor: "rgba(167, 139, 250, 0.4)" }}
                      className="group parchment-card p-5 rounded-2xl cursor-default transition-all duration-300 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-purple-500/10 transition-all">
                          <IconComponent 
                            size={22} 
                            className={`text-gray-500 transition-all duration-300 ${colorClasses[feature.color]}`} 
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right: Preview Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full group-hover:bg-purple-600/30 transition-all duration-700" />
              
              {/* Preview Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[16/10] bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-[32px] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.2)] backdrop-blur-xl"
              >
                {/* Background Image - Add your gameplay preview here */}
                <img 
                  src="/screenshots/preview.png"
                  alt="Gameplay Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
                
                {/* Placeholder (shown when no image) */}
                <div className="absolute inset-0 flex-col items-center justify-center z-10 hidden" style={{ display: 'flex' }}>
                  <Flame className="text-purple-500/50 mb-4" size={48} />
                  <span className="text-gray-500 tracking-[0.4em] uppercase text-xs font-medium">Gameplay Preview</span>
                  <span className="text-purple-400/50 text-[10px] mt-2 tracking-wider">Coming Soon</span>
                </div>
                
                {/* Overlays */}
                <div className="absolute inset-0 grain-overlay scanlines pointer-events-none" />
                
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/30 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-500/30 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-500/30 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/30 rounded-br-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* GALLERY - BENTO GRID */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-32 relative">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">Gallery</span>
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Atmosphere & Ambience
            </h2>
            <p className="max-w-xl mx-auto text-gray-500">
              Glimpses into the moonlit world of alchemy and wonder
            </p>
          </motion.div>
          
          {/* Bento Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
          >
            {GALLERY_ITEMS.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  variants={scaleIn}
                  whileHover={{ scale: item.featured ? 1.02 : 1.05 }}
                  onClick={() => openLightbox(item)}
                  className={`
                    ${item.colSpan === 2 ? 'md:col-span-2' : ''} 
                    ${item.rowSpan === 2 ? 'md:row-span-2' : ''} 
                    relative group cursor-pointer
                  `}
                >
                  {/* Special glow for featured tile */}
                  {item.featured && (
                    <div className="absolute inset-0 bg-purple-600/30 blur-[60px] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  )}
                  
                  <div className={`
                    relative h-full rounded-3xl border overflow-hidden backdrop-blur-xl transition-all
                    ${item.featured 
                      ? 'bg-gradient-to-br from-purple-900/40 to-indigo-900/30 border-purple-500/20 shadow-[0_0_50px_rgba(147,51,234,0.2)] group-hover:border-purple-400/40' 
                      : 'bg-white/5 border-white/10 hover:border-purple-500/30'
                    }
                  `}>
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                      onLoad={(e) => { e.target.style.opacity = '1'; e.target.parentElement.querySelector('.placeholder-content').style.opacity = '0'; }}
                    />
                    
                    {/* Scanline & Grain Overlay */}
                    <div className="absolute inset-0 grain-overlay scanlines pointer-events-none" />
                    
                    {/* Placeholder Content (shown when no image) */}
                    <div className="placeholder-content absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-500">
                      <IconComponent 
                        className={`mb-2 ${item.featured ? 'text-purple-400/60' : item.iconColor}`} 
                        size={item.featured ? 56 : item.colSpan === 2 ? 32 : 28} 
                        fill={item.featured ? "currentColor" : "none"}
                      />
                      <span className={`tracking-[0.2em] uppercase font-medium ${item.featured ? 'text-gray-400 text-sm' : 'text-gray-600 text-xs'}`}>
                        {item.label}
                      </span>
                      {item.sublabel && (
                        <span className="text-purple-400/40 text-xs mt-2">{item.sublabel}</span>
                      )}
                    </div>
                    
                    {/* Hover Overlay with Label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
                      <span className="text-white font-semibold tracking-wider uppercase text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* WISHLIST MODAL - CRYSTAL BALL STYLE */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 40, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="crystal-modal p-10 md:p-12 rounded-[40px] max-w-lg w-full text-center relative overflow-hidden"
            >
              {/* Background Orb */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full" />
              
              {/* Close Button */}
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowModal(false)} 
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </motion.button>
              
              {/* Icon */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.2)]"
              >
                <Star className="text-amber-400" size={44} fill="currentColor" />
              </motion.div>
              
              {/* Content */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-white to-purple-200 bg-clip-text text-transparent"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                The Stars Are Not Yet Aligned
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                The Steam page is currently brewing in the cauldron. <span className="text-purple-400 font-semibold">Moonbrew</span> is a highschool graduation project in active development. Stay tuned for updates!
              </p>
              
              {/* Action Button */}
              <motion.button 
                whileHover={{ scale: 1.03, backgroundColor: "#e9d5ff" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-white text-[#0f0518] font-black rounded-2xl transition-all uppercase tracking-[0.15em] text-sm"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                I Shall Wait
              </motion.button>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-purple-500/20 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-purple-500/20 rounded-br-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* IMAGE LIGHTBOX MODAL */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all z-10"
            >
              <X size={24} />
            </motion.button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[85vh] cursor-default"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-3xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(147,51,234,0.3)]">
                <img 
                  src={lightboxImage.image} 
                  alt={lightboxImage.label}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black/50"
                />
                
                {/* Corner Decorations */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-purple-500/40 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-purple-500/40 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-purple-500/40 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-purple-500/40 rounded-br-lg" />
              </div>
              
              {/* Label */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-6"
              >
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {lightboxImage.label}
                </h3>
                {lightboxImage.sublabel && (
                  <p className="text-purple-400/60 text-sm tracking-wider">{lightboxImage.sublabel}</p>
                )}
              </motion.div>
            </motion.div>

            {/* Click anywhere hint */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 text-xs tracking-wider"
            >
              Click anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER */}
      {/* ══════════════════════════════════════════════════════════════════════════════ */}
      <footer className="py-16 text-center relative">
        <div className="absolute inset-x-0 top-0 section-divider" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex justify-center gap-8 mb-8">
            {[Moon, Star, FlaskConical].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, color: "#a78bfa" }}
                className="text-gray-600 cursor-pointer transition-colors"
              >
                <Icon size={22} />
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-600 uppercase tracking-[0.25em] text-[10px] md:text-xs mb-4">
            © 2026 Moonbrew — A Highschool Graduation Project
          </p>
          <p className="text-gray-700 text-[10px] tracking-wider">
            Made with React • Tailwind CSS • Framer Motion • Unity
          </p>
        </motion.div>
      </footer>
    </div>
  );
}