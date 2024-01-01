import './Footer.css'
export default function Footer() {
  return (
    <footer style={{color:'white'}}>
      {/* Designed &amp; Developed by Zhandos Brown */}
      <p>&copy; 2020 - {(new Date()).getFullYear()} Zhandos Brown</p>
    </footer>
  )
}
