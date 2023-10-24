import { Link, useLocation, useNavigate } from 'react-router-dom';

const ScrollToTopLink = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Hace que el scroll sea suave
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Si ya estás en la ruta de inicio, haz scroll suave al inicio de la página.
      scrollToTop();
    } else {
      // Si no estás en la ruta de inicio, navega a la ruta de inicio.
      navigate('/');
    }
  };

  return (
    <Link to="/" className="link underline-hover" onClick={handleClick}>
      Inicio
    </Link>
  );
};

export default ScrollToTopLink;

