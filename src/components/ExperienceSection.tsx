import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ExperienceSection() {
  const workExperience = [
    {
      company: "Kampung Inggris Language Center",
      position: "Social Media Specialist",
      description: "Kampung Inggris LC, founded in 2015, is a leading English course. I managed social media strategies on Instagram, TikTok, and YouTube to enhance engagement and reach.",
      duration: "Jan 2024 – Present",
      logo: "/images/logo-lc.webp"
    },
    {
      company: "Rombak Media (Kok Bisa)",
      position: "Content Writer Intern)",
      description: "Developing creative content strategies and producing engaging multimedia content for various brands.",
      duration: "Feb – May 2023",
      logo: "/images/logo-kok-bisa.jpg"
    },
    {
      company: "Ruangguru",
      position: "Social Media Intern",
      description: "Developing creative content strategies and producing engaging multimedia content for various brands.",
      duration: "June – Sep 2022",
      logo: "/images/logo-ruang-guru.jpeg"
    },
    {
      company: "Aku Pintar Indonesia",
      position: "Edu Content Creator Intern",
      description: "Developing creative content strategies and producing engaging multimedia content for various brands.",
      duration: "Aug 2021 – Feb 2022",
      logo: "/images/logo-aku-pintar.png"
    }
  ];

  const education = [
    {
      institution: "University of Muhammadiyah Malang (UMM)",
      field: "Bachelor of Education, Majoring in English Education",
      duration: "2018 – 2022",
      logo: "/images/logo-umm.png"
    }
  ];

  const tools = {
    "Content Research": [
      { name: "TikTok", logo: "/images/logo-tiktok.avif" },
      { name: "Instagram", logo: "/images/logo-ig.avif" },
      { name: "X", logo: "/images/logo-x.avif" },
      { name: "Pinterest", logo: "/images/logo-pinterest.avif" }
    ],
    "Analytics": [
      { name: "Meta", logo: "/images/logo-meta.png" },
      { name: "Youtube Studio", logo: "/images/logo-yt-studio.png" },
      { name: "Tiktok Analytics", logo: "/images/logo-tiktok.avif" }
    ],
    "Content Planner": [
      { name: "Google Docs", logo: "/images/logo-gdocs.jpg" },
      { name: "Google Sheets", logo: "/images/logo-gsheets.png" }
    ],
    "Quick Editing": [
      { name: "Canva", logo: "/images/logo-canva.png" },
      { name: "Capcut", logo: "/images/logo-capcut.webp" },
    ]
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-section relative overflow-hidden section-transition">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/25 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/25 rounded-full blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"
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
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary animate-shimmer">
              Experience
            </span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg">My professional journey and expertise</p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient-primary">Work Experience</h3>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.015, 
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "spring",
                    stiffness: 600,
                    damping: 25
                  }
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    delay: index * 0.08
                  }
                }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 h-full ultra-smooth-card border-purple-500/40">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.img 
                      src={job.logo} 
                      alt={job.company}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 silky-image"
                      whileHover={{ 
                        scale: 1.08, 
                        rotate: 3,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">{job.company}</h4>
                      <p className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">{job.position}</p>
                      <p className="text-white/90 mb-3 text-sm sm:text-base leading-relaxed">{job.description}</p>
                      <span className="text-xs sm:text-sm text-white/80 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/40">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient-primary">Education</h3>
          <div className="max-w-md">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.015, 
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "spring",
                    stiffness: 600,
                    damping: 25
                  }
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    delay: index * 0.08
                  }
                }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 ultra-smooth-card border-purple-500/40">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.img 
                      src={edu.logo} 
                      alt={edu.institution}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 silky-image"
                      whileHover={{ 
                        scale: 1.08, 
                        rotate: 3,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.institution}</h4>
                      <p className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">{edu.field}</p>
                      <span className="text-xs sm:text-sm text-white/80 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/40">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient-primary">Tools & Technologies</h3>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(tools).map(([category, toolList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    delay: categoryIndex * 0.08
                  }
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.015,
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }
                }}
              >
                <Card className="p-4 sm:p-6 h-full ultra-smooth-card border-purple-500/40">
                  <h4 className="text-base sm:text-lg font-bold text-purple-300 mb-4">{category}</h4>
                  <div className="space-y-3">
                    {toolList.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-500/25"
                        whileHover={{ 
                          x: 4, 
                          scale: 1.01,
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
                      >
                        <motion.img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-8 h-8 rounded-lg object-cover flex-shrink-0 silky-image"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }
                          }}
                        />
                        <span className="text-white/90 font-medium text-sm sm:text-base">{tool.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}