import React, { useState, useEffect } from 'react';
import './App.css';
import logo from "./images/logoCarnaval.png";
import Header from './components/Header/Header';
import lotePromocional from './images/lotePromocional.png';
import loteEsgotado from './images/esgotado.png';
import Modal from "react-modal";
import Palco3d from './components/3d/Palco';
import Footer from './components/Footer/Footer';
import autoriza from "./images/autoriza.pdf";
import atracao from "./images/atraCarnaval.png";
import Confetti from 'react-confetti';

Modal.setAppElement("#root");

const App = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openMenores, setOpenMenores] = useState(false);

  const [windowDimension, setWindowDimension] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  const detectSize = () => {
    setWindowDimension({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, []);

  return (
    <div className="app" style={{ position: 'relative', overflowX: 'hidden' }}>
      
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        numberOfPieces={80}
        gravity={0.03}
        colors={['#A855F7', '#FF8C00', '#FFD700', '#EC4899', '#00BFFF']}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: -1
        }} 
      />

      <Header />

      <br /><br /><br />

      <div className="logoCenter">
        <img src={logo} alt="Logo Carnaval" />
      </div>

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
                zIndex: 1000
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
                Local: <strong>Mahal Musica Bar (Tambaú)</strong><br />
                Horário: <strong>21:00</strong>
              </p>

              <br />

              <h3 style={{ color: "white" }}>Regras Gerais</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                <li>É proibida a entrada com bebidas.</li>
                <li>É obrigatória a apresentação de documento com foto.</li>
                <li>Respeite as orientações da equipe de segurança.</li>
                <li>Proibido som externo no evento.</li>
                <li>Proibida a entrada com qualquer tipo de cigarro ou fumo.</li>
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

      <section className="stats">
        <div className="stats-content">
          <div className="stat-item">
            <h3>2023</h3>
            <p>+3 anos de histórias</p>
          </div>

          <div className="bank-cards">
            
            <div className="bank-card available">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} alt="Lote Promocional" /></div>
              <span className="card-title">Lote Promocional</span>
              <div className="card-number">(Disponível)</div>
                <br />
              <a className="buy-btn" href='https://festfy.cloud/pagamento/'>ADQUIRIR!</a>
            </div>

            <div className="bank-card unavailable">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} alt="Primeiro Lote" /></div>
              <span className="card-title">Primeiro Lote</span>
              <div className="card-number">(Indisponível)</div>
            </div>

            <div className="bank-card unavailable">
              <div className="card-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
              </div>
              <div className="card-img"><img src={lotePromocional} alt="Segundo Lote" /></div>
              <span className="card-title">Segundo Lote</span>
              <div className="card-number">(Indisponível)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-content">

          <h2 className="features-title">Se você tem 🔞</h2>

          <p style={{ textAlign: "center" }}>
            Agora para o controle e bem de vocês, pessoas menores de 18 anos devem
            imprimir e levar a autorização assinada pelo responsável para o evento!
          </p>

          <br />

          <div className="features-buttons">
            <a href={autoriza} download className="features-cta">Baixar</a>

            <button className="features-learn" onClick={() => setOpenMenores(true)}>
              Ler Sobre
            </button>

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
                  zIndex: 1000
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
              <p>Menores de 18 anos precisam de autorização formal dos pais ou responsáveis para participar do evento.</p>
              <p style={{ marginTop: "14px" }}>Essa exigência é feita para garantir segurança e responsabilidade.</p>
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

      <section className="services">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon protection">
              <img src={atracao} id="divulgacao" alt="Atração 1" />
            </div>
            <h3>EM BREVE</h3>
            <p>Em breve será divulgado!</p>
          </div>

          <div className="service-card">
            <div className="service-icon tracking">
              <img src={atracao} id="divulgacao" alt="Atração 2" />
            </div>
            <h3>EM BREVE</h3>
            <p>Em breve será divulgado!</p>
          </div>

          <div className="service-card">
            <div className="service-icon flexibility">
              <img src={atracao} id="divulgacao" alt="Atração 3" />
            </div>
            <h3>EM BREVE</h3>
            <p>Em breve divulgado!</p>
          </div>
        </div>
      </section>

      <br />

      <h1 style={{ textAlign: "center" }}>Palco Profissional!</h1>
      <Palco3d />

      <Footer />
    </div>
  );
};

export default App;