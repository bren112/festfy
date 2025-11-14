import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">Nossa História</h2>
        <p className="about-subtitle">
          Uma experiência criada para sentir.
        </p>

        <p className="about-description">
          A Festa da Diretoria nasceu com uma ideia simples: oferecer uma noite 
          que combina música, ambiente e boas energias de um jeito elegante e 
          inesquecível. Sem excessos. Sem ruídos. Apenas aquilo que importa: 
          pessoas, momentos e atmosfera.
          <br /><br />
          Cada edição é pensada com cuidado — iluminação, ritmo, estética, 
          segurança e detalhes que você talvez nem veja, mas sente.
          <br /><br />
          O resultado? Uma experiência que não tenta ser grande. Ela apenas é.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <h3>243K</h3>
            <p>Pessoas Impactadas</p>
          </div>

          <div className="about-stat">
            <h3>480M</h3>
            <p>Memórias Criadas</p>
          </div>

          <div className="about-stat">
            <h3>+267%</h3>
            <p>Crescimento Anual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
