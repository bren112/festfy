import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png'
import Header from './components/Header/Header';
import lotePromocional from './images/lotePromocional.png'

const App = () => {
    
  const [count, setCount] = useState(0);
  const target = 1000; // número final
  const duration = 2000; // duração da animação em ms

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const interval = setInterval(() => {
      start += 1;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
     <Header /> 
    
    <br />
     <br />
     <br />

    <div className="logoCenter">
      <img src={logo} alt="" srcset="" />
    </div>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
           Mais uma festa nossa!  
          </h1>
          <p className="hero-subtitle">
            Money should be easy. It's time to say goodbye to banks & financial services companies that don't work for you
          </p>
          <button className="hero-cta">
            Digitize Now
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-content">
          <div className="stat-item">
            <h3>2023</h3>
            
            <p>+2 anos de histórias</p>
          </div>
          
         <div className="bank-cards">
  {/* Lote Promocional */}
  <div className="bank-card available">
    <div className="card-header">
      <span className="circle red"></span>
      <span className="circle yellow"></span>
      <span className="circle green"></span>
    </div>
    <div className="card-img">
      <img src={lotePromocional} alt="Lote Promocional" />
    </div>
    <span className="card-title">Lote Promocional</span>
    <div className="card-number">(Disponível)</div>
    <button className="buy-btn">Comprar</button>
  </div>

  {/* Primeiro Lote */}
  <div className="bank-card unavailable">
    <div className="card-header">
      <span className="circle red"></span>
      <span className="circle yellow"></span>
      <span className="circle green"></span>
    </div>
    <div className="card-img">
      <img src={lotePromocional} alt="Lote Promocional" />
    </div>
    <span className="card-title">Primeiro Lote</span>
    <div className="card-number">(Indisponível)</div>
  </div>

  {/* Segundo Lote */}
  <div className="bank-card unavailable">
    <div className="card-header">
      <span className="circle red"></span>
      <span className="circle yellow"></span>
      <span className="circle green"></span>
    </div>
    <div className="card-img">
      <img src={lotePromocional} alt="Lote Promocional" />
    </div>
    <span className="card-title">Segundo Lote</span>
    <div className="card-number">(Indisponível)</div>
  </div>
</div>

          
          <div className="stat-item">
            <h3>+{count}</h3>
            <p>ingressos vendidos</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-content">
          <h2 className="features-title">
            Se você tem 🔞
          </h2>
          <p style={{textAlign: 'center'}}>
           Agora para o controle e bem de vocês, pessoas <br/> de menores devem imprimir e levar a autorização assinada!
          </p>

          <br />

          <div className="features-buttons">
            <button className="features-cta">Get Started</button>
            <button className="features-learn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon protection"></div>
            <h3>Protection</h3>
            <p>Data protection guarantees</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon tracking"></div>
            <h3>Tracking</h3>
            <p>Track all your financial transactions</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon flexibility"></div>
            <h3>Flexibility</h3>
            <p>Eashless</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon delivery"></div>
            <h3>Delivery through multiple channels</h3>
            <p>Feel free to transact anywhere, anytime</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">Get to know more about carty</p>
          <p className="about-description">
            We are customer-focused digital bank that provides complete financial solutions to meet your entire financial needs
          </p>
          
          <div className="about-stats">
            <div className="about-stat">
              <h3>243K</h3>
            </div>
            <div className="about-stat">
              <h3>480M</h3>
            </div>
            <div className="about-stat">
              <h3>267%</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;