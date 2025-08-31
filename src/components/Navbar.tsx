import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 navbar-smooth"
      variants={{
        visible: { 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 1
          }
        },
        hidden: { 
          y: "-100%",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }
      }}
      animate={hidden ? "hidden" : "visible"}
    >
      <div className="glass-navbar mx-2 xs:mx-4 mt-2 xs:mt-4 rounded-xl xs:rounded-2xl border border-purple-500/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ 
                scale: 1.03,
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
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-primary">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium relative group"
                    whileHover={{ 
                      scale: 1.02,
                      y: -1,
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
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        delay: index * 0.08
                      }
                    }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-white p-2 rounded-lg"
                whileHover={{ 
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: {
                    type: "spring",
                    stiffness: 600,
                    damping: 30
                  }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: isOpen ? 180 : 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }
                  }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1
              }
            }}
          >
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white/90 hover:text-white px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-500/20"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -15,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      delay: isOpen ? index * 0.05 : 0
                    }
                  }}
                  whileHover={{ 
                    scale: 1.01, 
                    x: 2,
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
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
