import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { signOut } from './api/auth'
import { LoginForm } from './components/auth/LoginForm'
import { SignupForm } from './components/auth/SignupForm'

function App() {
  const { user, loading } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (err) {
      console.error('Ошибка при выходе:', err)
    }
  }

  // 1. Индикатор загрузки при старте приложения
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Загрузка сессии...</p>
      </div>
    )
  }

  // 2. Экран залогиненного пользователя (заглушка планера)
  if (user) {
    return (
      <div className="p-8 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Привет, {user.email}! 👋</h1>
        <p className="mb-6 text-gray-600">
          Авторизация работает. Здесь будет наш планер.
        </p>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Выйти
        </button>
      </div>
    )
  }

  // 3. Формы авторизации / регистрации
  return (
    <div className="pt-10">
      {isSignUp ? (
        <SignupForm onToggleForm={() => setIsSignUp(false)} />
      ) : (
        <LoginForm onToggleForm={() => setIsSignUp(true)} />
      )}
    </div>
  )
}

export default App