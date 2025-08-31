import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Contact data configuration
const contactData = [
  {
    type: 'whatsapp',
    label: 'Phone',
    value: '+6282229026711',
    displayValue: '+6282229026711',
    icon: '📞',
    gradient: 'from-purple-500 to-pink-500',
    action: () => {
      try {
        // WhatsApp deep link - works on both mobile and desktop
        const phoneNumber = '628222902671'; // Remove + for WhatsApp API
        const message = 'Hi! I saw your portfolio and would like to discuss a project.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Add subtle feedback
        console.log('Opening WhatsApp...');
        window.open(whatsappUrl, '_blank');
      } catch (error) {
        console.error('Failed to open WhatsApp:', error);
        // Fallback: copy number to clipboard
        navigator.clipboard?.writeText('+628222902671');
      }
    }
  },
  {
    type: 'email',
    label: 'Email',
    value: 'almatheaaa@gmail.com',
    displayValue: 'almatheaaa@gmail.com',
    icon: '✉️',
    gradient: 'from-pink-500 to-purple-500',
    action: () => {
      // Email deep link
      const subject = 'Portfolio Inquiry';
      const body = 'Hi Almathea,\n\nI saw your portfolio and would like to discuss a potential collaboration.\n\nBest regards,';
      const emailUrl = `mailto:almatheaaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = emailUrl;
    }
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'almathea-virdhausya',
    displayValue: 'Almathea Virdhausya A',
    icon: '💼',
    gradient: 'from-blue-500 to-purple-500',
    action: () => {
      // LinkedIn messaging deep link
      const linkedinProfile = 'almathea-virdhausya-a-310835217';
      // Try mobile app first, then fallback to web
      const mobileUrl = `linkedin://messaging/compose?recipient=${linkedinProfile}`;
      const webUrl = `https://www.linkedin.com/in/${linkedinProfile}/`;
      
      // Check if LinkedIn app is available (mobile)
      if (navigator.userAgent.match(/Android|iPhone|iPad/)) {
        // Try mobile app first
        window.location.href = mobileUrl;
        // Fallback to web after a short delay
        setTimeout(() => {
          window.open(webUrl, '_blank');
        }, 1000);
      } else {
        // Desktop - open web version
        window.open(webUrl, '_blank');
      }
    }
  }
];

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 relative overflow-hidden section-transition">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-white/20 rounded-full blur-xl"
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/15 rounded-full blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-md"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Decorative Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Enhanced decorative flower elements */}
              <motion.div
                className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 text-white/40 text-4xl sm:text-6xl animate-rotate-slow"
                whileHover={{ scale: 1.3, rotate: 720 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                ✻
              </motion.div>
              <motion.div
                className="absolute top-16 sm:top-20 -right-3 sm:-right-5 text-white/40 text-2xl sm:text-4xl animate-rotate-slow"
                style={{ animationDirection: 'reverse' }}
                whileHover={{ scale: 1.3, rotate: -720 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                ✦
              </motion.div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                THANK
                <br />
                <span className="text-white/95">YOU!</span>
              </h2>
              
              {/* Enhanced decorative arrow */}
              <motion.div
                className="text-white text-2xl sm:text-4xl animate-bounce-gentle"
                whileHover={{ scale: 1.3, rotate: 45 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                ↗
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="glass backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/40 motion-glow">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">LET'S WORK TOGETHER!</h3>
                
                <div className="space-y-4">
                  {contactData.map((contact, index) => (
                    <motion.div
                      key={contact.type}
                      className="flex items-center gap-3 p-3 bg-white/20 rounded-xl cursor-pointer backdrop-blur-sm ultra-smooth-card group"
                      onClick={contact.action}
                      whileHover={{ 
                        scale: 1.02, 
                        x: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: {
                          type: "spring",
                          stiffness: 600,
                          damping: 30
                        }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + (index * 0.1),
                        ease: "easeOut" 
                      }}
                    >
                      <motion.div 
                        className={`w-10 h-10 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }
                        }}
                      >
                        <span className="text-lg">{contact.icon}</span>
                      </motion.div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-white/90">{contact.label}</p>
                        <p className="font-semibold text-white text-sm sm:text-base truncate group-hover:text-white/95 transition-colors">
                          {contact.displayValue}
                        </p>
                      </div>
                      {/* Hover indicator */}
                      <motion.div
                        className="w-0 h-0 opacity-0 group-hover:w-2 group-hover:h-2 group-hover:opacity-100 bg-white rounded-full transition-all duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}