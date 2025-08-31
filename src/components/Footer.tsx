import { motion } from 'framer-motion';

// Social Media Configuration
const socialMediaData = [
  {
    name: "Instagram",
    logo: "/images/logo-ig.avif",
    url: "https://instagram.com/almatheaaa", // Ganti dengan username Instagram yang sebenarnya
    hoverGradient: "from-pink-500 via-purple-500 to-yellow-500"
  },
  {
    name: "TikTok",
    logo: "/images/logo-tiktok.avif",
    url: "https://tiktok.com/@almatheaaa", // Ganti dengan username TikTok yang sebenarnya
    hoverGradient: "from-black via-gray-800 to-white"
  },
  {
    name: "LinkedIn",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230A66C2'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E", // SVG LinkedIn icon
    url: "https://linkedin.com/in/almathea-virdhausya-a-52b7a51b0",
    hoverGradient: "from-blue-600 to-blue-800"
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-section text-white py-8 sm:py-12 border-t border-purple-500/40 relative overflow-hidden section-transition">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-purple-500/25 rounded-full blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/25 rounded-full blur-lg"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-400/20 rounded-full blur-md"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary animate-shimmer">
              Almathea Virdhausya
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-base">Social Media Specialist & Content Creator</p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {socialMediaData.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center cursor-pointer border border-white/20 motion-glow group overflow-hidden"
                whileHover={{ 
                  scale: 1.15, 
                  y: -8, 
                  rotate: 8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                {/* Logo Image */}
                <motion.img
                  src={social.logo}
                  alt={social.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.2) saturate(1.2)"
                  }}
                  onError={(e) => {
                    // Fallback ke emoji jika gambar tidak ada
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.className = 'text-lg sm:text-xl text-white/90';
                    fallback.textContent = social.name === 'Instagram' ? '📱' : 
                                          social.name === 'TikTok' ? '🎵' : 
                                          social.name === 'LinkedIn' ? '💼' : '📺';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
                
                {/* Hover Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${social.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {social.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-purple-500/30 pt-4 sm:pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-white/80 text-xs sm:text-sm">
              © 2025 Almathea Virdhausya. All rights reserved.
            </p>
            <motion.p 
              className="text-white/70 text-xs mt-2 animate-shimmer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Crafted with passion for social media excellence
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}