import './Footer.css'

/**
 * תחתית העמוד (Footer).
 */
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} my-app — כל הזכויות שמורות</p>
    </footer>
  )
}

export default Footer
