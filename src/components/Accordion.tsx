import React, { useState } from 'react';

import './Accordion.css';

interface AccordionItem { href: string, title: string };


interface AccordionProps {
  title: string,
  items: Array<AccordionItem>,
};

const Accordion: React.FC<AccordionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='accordion-container'>
      <a className='accordion-button' onClick={() => setIsOpen(!isOpen)}>
        {title}
      </a>
      <div className={`accordion ${isOpen ? 'accordion-active' : ''}`}>
        <div className='accordion-pad' />
        {items.map((item, index) => {
          return (<a key={index} className='accordion-item' href={item.href}>{item.title}</a>)
        })}
      </div>
    </div>
  );
};

export default Accordion;
