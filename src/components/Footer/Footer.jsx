// Footer.jsx
export default function Footer() {
    return (
      <footer
        style={{
          padding: "25px 0",
          textAlign: "center",
          color: "black",
          opacity: 0.8,
          fontSize: "14px",
          marginTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        © 2023 Sistema de Ingressos Festfy — Sharkle  
        <br />
        Contato: <a href="tel:+5519983057540" style={{ color: "black" }}>
          (19) 98305-7540
        </a>
      </footer>
    );
  }
  