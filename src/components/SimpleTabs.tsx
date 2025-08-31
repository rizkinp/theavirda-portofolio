import { motion } from 'framer-motion';
import { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  icon: string;
}

interface SimpleTabsProps {
  tabs: Tab[];
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface SimpleTabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface SimpleTabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

interface SimpleTabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab: string;
}

export function SimpleTabs({ tabs, defaultValue, children, className = '' }: SimpleTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab } as any);
        }
        return child;
      })}
    </div>
  );
}

export function SimpleTabsList({ children, className = '' }: SimpleTabsListProps) {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  );
}

export function SimpleTabsTrigger({ 
  value, 
  children, 
  className = '', 
  isActive, 
  onClick 
}: SimpleTabsTriggerProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`${className} ${isActive ? 'active' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

export function SimpleTabsContent({ value, children, activeTab }: SimpleTabsContentProps) {
  if (value !== activeTab) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}