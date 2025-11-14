import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import Header from './components/Header/Header';
import lotePromocional from './images/lotePromocional.png';
import Modal from "react-modal";
import dj1 from "./images/dj1.png";
import dj2 from "./images/dj2.png";
import atracao from "./images/misterio.png";
import atracaoDois from "./images/misteriof.png";
import Palco3d from './components/3d/Palco';
import Footer from './components/Footer/Footer';

Modal.setAppElement("#root");

const App = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openMenores, setOpenMenores] = useState(false);

  const [count, setCount] = useState(0);
  const target = 1000;
  const duration = 3000;

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

      <br /><br /><br />

      <div className="logoCenter">
        <img src={logo} alt="" />
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Mais uma festa da Diretoria!
          </h1>

          <p className="hero-subtitle">
            Uma experiência única feita para quem gosta de exclusividade, organização e zero complicação.
          </p>

          <button className="hero-cta" onClick={() => setOpenAbout(true)}>
            Sobre esse evento
          </button>

          {/* MODAL — SOBRE O EVENTO */}
          <Modal
            isOpen={openAbout}
            onRequestClose={() => setOpenAbout(false)}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              content: {
                width: "520px",
                maxWidth: "92%",
                maxHeight: "75vh",
                overflowY: "auto",
                inset: "unset",
                padding: "0",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.20)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                boxShadow: "inset 0 0 40px rgba(255,255,255,0.25), inset 0 0 120px rgba(255,255,255,0.08), 0 8px 35px rgba(0,0,0,0.35)",
              }
            }}
          >

            {/* Header Apple Style */}
            <div style={{ display: "flex", gap: "8px", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#FF5F57" }}></div>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#FFBD2E" }}></div>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#28C840" }}></div>
            </div>

            <div style={{ padding: "30px", color: "white" }}>
              <h2 style={{ textAlign: "center", color: "white", marginBottom: "14px" }}>
                Sobre este Evento
              </h2>

              <p>
                Este evento foi planejado para oferecer uma experiência única, segura e organizada — mantendo a tradição das festas da Diretoria.
                <br /><br />
                Local: <strong>Divulgado em breve</strong><br />
                Horário: <strong>A confirmar</strong>
              </p>

              <br />

              <h3 style={{ color: "white" }}>Regras Gerais</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                <li>É proibida a entrada com bebidas.</li>
                <li>É obrigatória a apresentação de documento com foto.</li>
                <li>Respeite as orientações da equipe de segurança.</li>
                <li>Proibido som externo no evento.</li>
              </ul>

              <br />

              <h3 style={{ color: "white" }}>Menores de Idade</h3>
              <p>
                Pessoas menores de 18 anos devem apresentar autorização assinada pelo responsável legal.
              </p>

              <br />

              <button
                onClick={() => setOpenAbout(false)}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "14px",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </div>
          </Modal>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-content">
          <div className="stat-item">
            <h3>2023</h3>
            <p>+2 anos de histórias</p>
          </div>

          {/* Cards */}
          <div className="bank-cards">
            
            <div className="bank-card available">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} /></div>
              <span className="card-title">Lote Promocional</span>
              <div className="card-number">(Disponível)</div>
              <button className="buy-btn">EM BREVE!</button>
            </div>

            <div className="bank-card unavailable">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} /></div>
              <span className="card-title">Primeiro Lote</span>
              <div className="card-number">(Indisponível)</div>
            </div>

            <div className="bank-card unavailable">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} /></div>
              <span className="card-title">Segundo Lote</span>
              <div className="card-number">(Indisponível)</div>
            </div>
          </div>

          <div className="stat-item">
          <p className="contador notranslate" translate="no">
              {ingressosVendidos}
            </p>

            <p>ingressos vendidos</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features-content">

          <h2 className="features-title">Se você tem 🔞</h2>

          <p style={{ textAlign: "center" }}>
            Agora para o controle e bem de vocês, pessoas menores de 18 anos devem
            imprimir e levar a autorização assinada pelo responsável para o evento!
          </p>

          <br />

          <div className="features-buttons">
            <a href="/autoriza.pdf" download className="features-cta">Baixar</a>

            <button className="features-learn" onClick={() => setOpenMenores(true)}>
              Ler Sobre
            </button>

            {/* MODAL — MENORES */}
            <Modal
              isOpen={openMenores}
              onRequestClose={() => setOpenMenores(false)}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: {
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(6px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                content: {
                  width: "450px",
                  maxHeight: "70vh",
                  overflowY: "auto",
                  padding: "25px",
                  borderRadius: "16px",
                  inset: "unset",
                  border: "none",
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  color: "white",
                }
              }}
            >
              <h2>Informações Importantes</h2>

              <p>
                Menores de 18 anos precisam de autorização formal dos pais ou responsáveis para participar do evento.
              </p>

              <p style={{ marginTop: "14px" }}>
                Essa exigência é feita para garantir segurança e responsabilidade.
              </p>

              <p style={{ marginTop: "14px", opacity: 0.8 }}>
                <strong>Base legal:</strong><br />
                Estatuto da Criança e do Adolescente (ECA), Lei 8069/1990 — Art. 4°, 22 e 74.
              </p>

              <button
                onClick={() => setOpenMenores(false)}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "rgba(0,0,0,0.7)",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </Modal>
          </div>
        </div>
      </section>

      {/* DJs */}
      <section className="services">
        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon protection">
              <img src={dj1} id="divulgacao" />
            </div>
            <h3>DJ 1</h3>
            <p>Em breve será divulgado!</p>
          </div>

          <div className="service-card">
            <div className="service-icon tracking">
              <img src={dj2} id="divulgacao" />
            </div>
            <h3>DJ 2</h3>
            <p>Em breve será divulgado!</p>
          </div>

          <div className="service-card">
            <div className="service-icon flexibility">
              <img src={atracao} id="divulgacao" />
            </div>
            <h3>Atrações</h3>
            <p>Em breve divulgado!</p>
          </div>

          <div className="service-card">
            <div className="service-icon delivery">
              <img src={atracaoDois} id="divulgacao" />
            </div>
            <h3>Atrações</h3>
            <p>Em breve divulgado!</p>
          </div>

        </div>
      </section>

      <br />

      <h1 style={{ textAlign: "center" }}>Palco 360!</h1>
      <Palco3d />

      <Footer />
    </div>
  );
};

export default App;
