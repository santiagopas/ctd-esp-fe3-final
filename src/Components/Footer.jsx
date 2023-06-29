import '../assets/styles/components/Footer.css';

const Footer = () => {

  return (
    <footer className="footer-container">
      <p>
        &copy;  Desarrollado por Santiago Pasciullo
        <span> {new Date().getFullYear()} </span>
      </p>
    </footer>
  );
};

export default Footer;
