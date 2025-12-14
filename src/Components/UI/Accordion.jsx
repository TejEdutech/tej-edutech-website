import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

// Context
const AccordionContext = createContext();

export function Accordion({ children, type = "single", collapsible = true, className = "" }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (value) => {
    if (collapsible && openItem === value) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value, className = "" }) {
  const { openItem } = useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <div className={`border border-blue-100 rounded-xl overflow-hidden ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, value })
      )}
    </div>
  );
}

export function AccordionTrigger({ children, isOpen, value, className = "" }) {
  const { toggleItem } = useContext(AccordionContext);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={`w-full flex justify-between items-center py-5 px-4 text-left font-medium text-gray-900 hover:text-blue-600 transition-all ${className}`}
    >
      <span>{children}</span>
      <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

export function AccordionContent({ children, isOpen, className = "" }) {
  return (
    <div
      className={`px-4 pb-5 text-gray-600 transition-all overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100 pt-2" : "max-h-0 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
