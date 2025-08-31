import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

// Tab Categories Configuration - Easy to modify
const tabCategories = [
  {
    key: 'shortVideos',
    label: 'Short Videos',
    icon: '🎬'
  },
  {
    key: 'youtube', 
    label: 'YouTube',
    icon: '📺'
  },
  {
    key: 'contentPlan',
    label: 'Content Plan', 
    icon: '📋'
  },
  {
    key: 'insightAnalyst',
    label: 'Insights',
    icon: '📊'
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: '📷'
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    icon: '🎵'
  },
  {
    key:'infographic',
    label:'Infographic Content',
    icon:'📊'
  },
  {
    key:'caption',
    label:'Caption',
    icon:'📝'
  },
  {
    key:'scriptBrief',
    label:'Script Brief',
    icon:'📝'
  }
];

export default function PortfolioSection() {
  // Get available tabs for a company based on its sections
  const getAvailableTabs = (companyData: any) => {
    return tabCategories.filter(tab => 
      Object.keys(companyData.sections).includes(tab.key)
    );
  };

  // Get tab configuration by key
  const getTabConfig = (tabKey: string) => {
    return tabCategories.find(tab => tab.key === tabKey) || { key: tabKey, label: tabKey, icon: '' };
  };

  const companies = [
    {
      id: "company1",
      name: "Kampung Inggris LC",
      description: "Kampung Inggris LC is one of the largest English courses in Kampung Inggris, established in 2015. With a strong digital presence and impactful content across platforms, it has become a top choice for learners. I handle organic social media strategy on Instagram, TikTok, and YouTube to boost engagement and expand audience reach.",
      heroImage: "/images/logo-lc.webp",
      sections: {
        shortVideos: {
          description: "Creative short-form content for Instagram Reels, TikTok, and YouTube Shorts that engage our audience and showcase our English learning programs.",
          images: Array(6).fill("https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center")
        },
        youtube: {
          description: "Educational YouTube content including tutorials, student testimonials, and course previews that help potential students understand our programs.",
          images: Array(4).fill("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=300&fit=crop&crop=center")
        },
        contentPlan: {
          description: "Strategic content planning and scheduling across all social media platforms to maintain consistent brand presence and engagement.",
          images: Array(5).fill("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=300&fit=crop&crop=center")
        },
        insightAnalyst: {
          description: "Data-driven analysis of social media performance, audience behavior, and content effectiveness to optimize our digital marketing strategy.",
          images: Array(4).fill("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center")
        }
      }
    },
    {
      id: "company2",
      name: "Rombak Media (Kok Bisa)",
      description: "Kok Bisa is an online media platform that focuses on science content packaged in animated form. Kok Bisa publishes its content from animated videos on YouTube, and animated infographic content on Instagram, and TikTok.Always prioritizes accurate information about the latest science and technology and still packs it in a light and fun way.",
      heroImage: "/images/logo-kok-bisa.jpg",
      sections: {
        infographic: {
          description: "Infographic content simplifies complex science and education topics into clear, engaging posts. It involves research from credible sources, copywriting, and visual design to attract and interact with audiences..",
          images: Array(8).fill("https://images.unsplash.com/photo-1611262588024-d12430b98920?w=300&h=300&fit=crop&crop=center")
        },
        tiktok: {
          description: "This TikTok project transforms complex science topics into fun, easy-to-digest one-minute videos. By researching credible scientific sources, I created engaging scripts and collaborated with talents and editors to deliver content that is both educational and entertaining.",
          images: Array(8).fill("https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center")
        },
        youtube: {
          description: "Created YouTube content with 3–5 minute scripts that simplify complex science topics into fun and easy-to-understand storytelling. The process included research from credible scientific sources and collaboration with talents and editors to deliver engaging concepts and visuals.",
          images: Array(8).fill("https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center")
        },
        scriptBrief: {
          description: "Created script briefs for short-form videos, including video ideas, themes, and target audiences. The script briefs helped in creating engaging and relevant content for the platform.",
          images: Array(8).fill("https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center")
        },
        caption: {
          description: "Created captions for videos, including engaging scripts and hashtags. The captions helped in increasing video engagement and reach.",
          images: Array(8).fill("https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center")
        }
      }
    },
    {
      id: "company3",
      name: "Alta School Social Media Management ",
      description: "Managed @altaschool.id Instagram account as part of Ruangguru’s homeschooling program for kids. Responsibilities included creating and uploading content, engaging with the audience, handling DMs, reposting tags, and managing interactive Instagram Stories.",
      heroImage: "/images/logo-ruang-guru.jpeg",
      sections: {
        infographic: {
          description: "Infographic content designed for Alta School to share parenting tips, showcase products, and boost engagement through trends, games, and interactive visuals.",
          images: Array(7).fill("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop&crop=center")
        },
        tiktok: {
          description: "This image shows a social media portfolio project focused on creating TikTok content for children. The objective was to produce engaging and informative videos on topics such as kids' DIY projects, parenting, and early childhood education. The process involved conducting content research, creating scripts, and producing the final TikTok videos.",
          images: Array(5).fill("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=300&fit=crop&crop=center")
        },
        caption: {
          description: "Created captions for videos, including engaging scripts and hashtags. The captions helped in increasing video engagement and reach.",
          images: Array(6).fill("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=300&fit=crop&crop=center")
        }
      }
    }
  ];

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
            duration: 22,
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
            duration: 28,
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
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary animate-shimmer">
              Portfolio
            </span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg">Detailed work showcase across different companies</p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 lg:space-y-20">
          {companies.map((company, companyIndex) => (
            <motion.div
              key={company.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-purple-500/40 motion-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: companyIndex * 0.2, ease: "easeOut" }}
            >
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
                <motion.div
                  className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img 
                    src={company.heroImage} 
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1 text-center lg:text-left px-2 sm:px-0">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gradient-primary mb-2 sm:mb-3 lg:mb-4 leading-tight">{company.name}</h3>
                  <p className="text-white/90 text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed">{company.description}</p>
                </div>
              </div>

              {/* Company Sections */}
              {(() => {
                const availableTabs = getAvailableTabs(company);
                const firstTabKey = availableTabs[0]?.key || 'shortVideos';
                const [activeTab, setActiveTab] = useState(firstTabKey);
                
                return (
                  <div className="w-full">
                    {/* Mobile-optimized tab list */}
                    {availableTabs.length <= 2 ? (
                      <div 
                        className="grid w-full mb-4 sm:mb-6 lg:mb-8 bg-purple-500/20 border border-purple-500/40 h-auto min-h-[44px] sm:min-h-[48px] rounded-lg"
                        style={{ gridTemplateColumns: `repeat(${availableTabs.length}, 1fr)` }}
                      >
                        {availableTabs.map((tab) => (
                          <motion.button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`text-xs xs:text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:py-3 min-h-[40px] sm:min-h-[44px] rounded-lg transition-all duration-200 ${
                              activeTab === tab.key 
                                ? 'text-purple-300 bg-purple-500/40' 
                                : 'text-white/80 hover:text-white hover:bg-purple-500/20'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-xs xs:text-sm sm:text-base">{tab.icon}</span>
                            <span className="truncate text-xs xs:text-sm sm:text-base leading-tight">{tab.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    ) : (
                      // Scrollable tabs for mobile when there are many tabs
                      <div className="mb-4 sm:mb-6 lg:mb-8">
                        <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2 sm:pb-3 px-1">
                          {availableTabs.map((tab) => (
                            <motion.button
                              key={tab.key}
                              onClick={() => setActiveTab(tab.key)}
                              className={`text-xs xs:text-sm sm:text-base flex items-center gap-1 sm:gap-2 px-2 xs:px-3 sm:px-4 py-2 sm:py-3 border border-purple-500/40 rounded-lg whitespace-nowrap flex-shrink-0 min-w-fit transition-all duration-200 ${
                                activeTab === tab.key 
                                  ? 'text-purple-300 bg-purple-500/40' 
                                  : 'text-white/80 bg-purple-500/20 hover:text-white hover:bg-purple-500/30'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span className="text-xs xs:text-sm sm:text-base">{tab.icon}</span>
                              <span className="text-xs xs:text-sm sm:text-base">{tab.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                {Object.entries(company.sections).map(([sectionKey, section]) => {
                  if (sectionKey !== activeTab) return null;
                  
                  return (
                    <motion.div
                      key={sectionKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-3 sm:p-4 lg:p-6 glass-card border-purple-500/40 motion-glow">
                        <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 capitalize px-1 sm:px-0">
                          {sectionKey.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-white/90 mb-3 sm:mb-4 lg:mb-6 text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed px-1 sm:px-0">
                          {section.description}
                        </p>
                        
                        {/* Image Grid - Portrait Layout - Mobile optimized */}
                        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
                          {section.images.map((image, imageIndex) => (
                            <motion.div
                              key={imageIndex}
                              className="aspect-[3/4] bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group relative ultra-smooth-card"
                              whileHover={{ 
                                scale: 1.015, 
                                rotate: 0.5,
                                y: -2,
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
                              initial={{ opacity: 0, scale: 0.95, y: 15 }}
                              whileInView={{ 
                                opacity: 1, 
                                scale: 1, 
                                y: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 25,
                                  delay: imageIndex * 0.05
                                }
                              }}
                              viewport={{ once: true, margin: "-30px" }}
                            >
                              <motion.img 
                                src={image} 
                                alt={`${sectionKey} ${imageIndex + 1}`}
                                className="w-full h-full object-cover silky-image"
                                loading="lazy"
                                whileHover={{
                                  scale: 1.015,
                                  transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                  }
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-500/10 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ 
                                  opacity: 1,
                                  transition: {
                                    duration: 0.6,
                                    ease: [0.19, 1, 0.22, 1]
                                  }
                                }}
                              />
                            </motion.div>
                          ))}
                          
                          {/* Add more placeholder */}
                          <motion.div
                            className="aspect-[3/4] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-dashed border-purple-500/50 cursor-pointer group relative overflow-hidden ultra-smooth-card"
                            whileHover={{ 
                              scale: 1.015,
                              y: -2,
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
                          >
                            <motion.span 
                              className="text-purple-300 text-lg xs:text-xl sm:text-2xl relative z-10"
                              whileHover={{ 
                                rotate: 180,
                                scale: 1.1,
                                color: "rgb(196 181 253)",
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20
                                }
                              }}
                            >
                              +
                            </motion.span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ 
                                opacity: 1,
                                scale: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 25
                                }
                              }}
                            />
                          </motion.div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
                  </div>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
