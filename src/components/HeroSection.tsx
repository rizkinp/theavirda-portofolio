import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/30 rounded-full blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400/25 rounded-full blur-md"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 px-1 xs:px-2 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-4 sm:mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide motion-glow">
                SOCIAL MEDIA
              </span>
            </motion.div>
            
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight break-words"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-gradient-primary block animate-shimmer">
                PORT
              </span>
              <span className="text-white block">FOLIO</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-gentle"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-xl">✱</span>
              </motion.div>
              {/* <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gradient-primary">Almathea's 2025 Social</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">Media Portfolio</h3>
              </div> */}
            </motion.div>

            <motion.p
              className="text-gray-200 text-sm xs:text-base sm:text-lg leading-relaxed max-w-full xs:max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              A social Media Specialist with experiences in social media and content creative since 2021. I’ve developed a strong understanding of content strategy, and audience engagement throughout my career. Currently, I manage and optimize social media platforms at Kampungi ingate iC, applying my skills to create impactful content and drive online presence. I’m passionate about staying updated with the latest trends in social media and continuously improving my expertise to deliver the best results.
            </motion.p>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 px-2 xs:px-4 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-52 xs:h-60 sm:h-72 md:h-80 lg:h-88 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl sm:rounded-3xl overflow-hidden relative glass-purple motion-scale"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Photo */}
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="/images/profil.jpeg" 
                    alt="Almathea Profile Photo"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center';
                      fallback.innerHTML = `
                        <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-scale-pulse">
                          <span class="text-white text-3xl">📸</span>
                        </div>
                      `;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Name badge */}
                <motion.div
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full motion-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-bold text-base sm:text-lg">THEA</span>
                </motion.div>
              </motion.div>

              {/* Enhanced decorative elements around photo */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-amber-400/30 rounded-full animate-rotate-slow"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-pink-400/30 rounded-full animate-rotate-slow"
                style={{ animationDirection: 'reverse' }}
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400/40 rounded-full animate-bounce-gentle"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}