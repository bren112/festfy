import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png'
import Header from './components/Header/Header';
import lotePromocional from './images/lotePromocional.png'
import Modal from "react-modal";
import dj1 from "./images/dj1.png"
import dj2 from "./images/dj2.png"
import atracao from "./images/misterio.png"
import atracaoDois from "./images/misteriof.png"
Modal.setAppElement("#root");
const App = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const target = 1000; // número final
  const duration = 3000; // duração da animação em ms

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
           Mais uma festa da Diretoria!  
          </h1>
          <p className="hero-subtitle">
          Uma experiência única feita para quem gosta de exclusividade, organização e zero complicação.
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
          <div style={{textAlign: 'center'}}>
          <p >
           Agora para o controle e bem de vocês, pessoas <br/> menores de 18 anos devem imprimir e levar  a autorização <br/> assinada  pelo responsável para o evento!
          </p>
          </div>
          <br />

          <div className="features-buttons">
          <a href="/autoriza.pdf" download className="features-cta">
            Baixar
        </a>
        <button className="features-learn" onClick={() => setOpen(true)}>
        Ler Sobre
      </button>

       <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s ease-in-out",
          },
          content: {
            width: "450px",
            maxHeight: "70vh",
            overflowY: "auto",
            borderRadius: "18px",
            padding: "25px",
            inset: "unset",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            border: "none",
            animation: "modalIn 0.25s ease",
          },
        }}
      >
        <h2 style={{ marginBottom: "10px", fontWeight: "600" }}>
          Informações Importantes
        </h2>

        <p style={{ lineHeight: "1.5" }}>
          Menores de 18 anos precisam de autorização formal dos pais ou
          responsáveis legais para participar de eventos, fazer cadastros,
          assinar termos ou realizar qualquer atividade que envolva
          responsabilidade civil.
        </p>

        <p style={{ marginTop: "15px", lineHeight: "1.5" }}>
          O objetivo desta regra é garantir proteção, segurança e que o menor
          esteja acompanhado ou autorizado por um responsável legal.
        </p>

        <p style={{ marginTop: "15px", opacity: 0.8, fontSize: "14px" }}>
          <strong>Base legal:</strong><br />
          Estatuto da Criança e do Adolescente (ECA), Lei nº 8.069/1990 —
          Artigos 4º, 22 e 74.
        </p>

        <button
          onClick={() => setOpen(false)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "#111",
            color: "#fff",
            fontSize: "15px",
          }}
        >
          Fechar
        </button>
      </Modal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon protection">
              <img src={dj1} alt="" srcset="" id='divulgacao'/>
            </div>
            <h3>DJ 1</h3>
            <p>Em breve será divulgado!</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon tracking">
            <img src={dj2} alt="" srcset="" id='divulgacao'/>

            </div>
            <h3>Dj 2 </h3>
            <p>Em breve será divulgado!</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon flexibility">
            <img src={atracao} alt="" srcset="" id='divulgacao'/>
            </div>
            <h3>Atrações </h3>
            <p>Em breve divulgado!</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon delivery">
            <img src={atracaoDois} alt="" srcset="" id='divulgacao'/>
            </div>
            <h3>Atrações </h3>
            <p>Em breve divulgado!</p>
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