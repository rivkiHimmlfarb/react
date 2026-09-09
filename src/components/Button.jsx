import './Button.css'

/**
 * כפתור בסיסי לשימוש חוזר.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children תוכן הכפתור
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant] סגנון הכפתור
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props.rest] יתר המאפיינים
 */
function Button({ children, variant = 'primary', ...rest }) {
  return (
    <button type="button" className={`button button--${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
