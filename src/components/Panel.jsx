import React from 'react';

const Panel = ({ className = '', label, title, subtitle, onClick, children }) => {
  return (
    <div className={`panel ${className}`} onClick={onClick}>
      <div className="panel__inner">
        <div>
          <span className="panel__label">{label}</span>
        </div>
        <div>
          {title && <h2 className="panel__title">{title}</h2>}
          {subtitle && <p className="panel__subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>
      {onClick && <span className="panel__arrow">↗</span>}
    </div>
  );
};

export default Panel;
