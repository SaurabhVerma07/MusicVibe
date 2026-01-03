import { createContext, useContext, useState, useEffect } from 'react'
import { loginUser, registerUser, logoutUser } from '../services/api'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [sessionToken, setSessionToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem('jamifyUser') || sessionStorage.getItem('jamifyUser')
    const storedToken = localStorage.getItem('jamifySession') || sessionStorage.getItem('jamifySession')
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser))
        setSessionToken(storedToken)
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        localStorage.removeItem('jamifyUser')
        localStorage.removeItem('jamifySession')
        sessionStorage.removeItem('jamifyUser')
        sessionStorage.removeItem('jamifySession')
      }
    }
    setLoading(false)
  }, [])

  const login = async (username, password, rememberMe = false) => {
    try {
      const data = await loginUser(username, password)
      
      if (data.success) {
        setUser(data.user)
        setSessionToken(data.sessionToken)
        
        const storage = rememberMe ? localStorage : sessionStorage
        storage.setItem('jamifyUser', JSON.stringify(data.user))
        storage.setItem('jamifySession', data.sessionToken)
        
        return { success: true }
      } else {
        return { success: false, message: data.message }
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  const register = async (userData) => {
    try {
      const data = await registerUser(userData)
      
      if (data.success) {
        return { success: true, userId: data.userId }
      } else {
        return { success: false, message: data.message }
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  const logout = async () => {
    try {
      if (sessionToken) {
        await logoutUser(sessionToken)
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
    
    setUser(null)
    setSessionToken(null)
    localStorage.removeItem('jamifyUser')
    localStorage.removeItem('jamifySession')
    sessionStorage.removeItem('jamifyUser')
    sessionStorage.removeItem('jamifySession')
  }

  const value = {
    user,
    sessionToken,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

