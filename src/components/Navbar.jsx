import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Jamify" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link id="links" to="/">Home</Link>
        <a id="links" href="#playlists">Playlists</a>
        <Link id="links" to="/trending">Trending</Link>
        <Link id="links" to="/feedback">Feedback</Link>
        <Link id="links" to="/contact">Contact</Link>
        
        {isAuthenticated ? (
          <span id="userSection">
            <span style={{ color: 'rgb(13, 118, 199)', marginRight: '10px' }}>
              <i className="fas fa-user-circle"></i> {user?.username}
            </span>
            <a id="links" href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
              Logout
            </a>
          </span>
        ) : (
          <span id="userSection">
            <Link id="links" to="/login">Login</Link>
            <Link id="links" to="/signup">Sign Up</Link>
          </span>
        )}
      </div>
    </nav>
  )
}

export default Navbar

