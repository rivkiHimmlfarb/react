import './Header.css'

/**
 * כותרת עליונה (Header) של היישום.
 */
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">my-app</span>
        <nav className="header__nav" aria-label="ניווט ראשי">
          <a className="header__link" href="#home">
            בית
          </a>
          <a className="header__link" href="#about">
            אודות
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
