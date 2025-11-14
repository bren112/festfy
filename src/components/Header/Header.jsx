// HeaderApple.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="apple-header">
      <div className="apple-header-content">
        {/* Bolinhas do macOS no canto superior esquerdo */}
        <div className="window-controls">
          <div className="control-btn close"></div>
          <div className="control-btn minimize"></div>
          <div className="control-btn maximize"></div>
        </div>

        {/* Menu centralizado igual Apple */}
        <nav className="apple-nav">
          <div className="nav-item">Reveillon da Diretoria</div>
        </nav>
      </div>
    </header>
  );
};


export default Header;