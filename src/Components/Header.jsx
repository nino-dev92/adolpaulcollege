import "../Styles/Header/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">LOGO</div>
      <div className="header-links">
        <a href="/">Home</a>
        <a href="/.#about">About</a>
        <a href="/programs">Programs</a>
        <a href="/admissions">Admissions</a>
        <a href="/facilities">Facilities</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="header-btn-container">
        <a href="/admissions">
          <button className="header-btn">Apply Now</button>
        </a>
      </div>
    </header>
  );
}
export default Header;
