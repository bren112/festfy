import React from 'react';
import './App.css';
import logo from './logo.png'
import Header from './components/Header/Header';
const App = () => {
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
            <p>+3 anos</p>
            <p>Fazendo a alegria do povo</p>
          </div>
          
          <div className="bank-cards">
            <div className="bank-card card-1">
              <div className="card-circle"></div>
              <span>carty</span>
              <div className="card-number">(1)</div>
            </div>
            
            <div className="bank-card card-2">
              <div className="card-circle"></div>
              <span>Carty</span>
              <div className="card-number">(2)</div>
            </div>
            
            <div className="bank-card card-3">
              <div className="card-circle"></div>
              <span>Carty</span>
              <div className="card-number">(3)</div>
            </div>
          </div>
          
          <div className="stat-item">
            <h3>+1000</h3>
            <p>ingressos ja comprado</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-content">
          <h2 className="features-title">
            Best features provided by carty
          </h2>
          <p className="features-description">
            Carty is more of a mindset than technology or industry, our product is designed by industry veterans to solve these problems. It will save you time, money, and heartache
          </p>
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