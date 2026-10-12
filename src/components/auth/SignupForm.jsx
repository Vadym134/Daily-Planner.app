import { useState } from 'react'
import { signUp } from '../../api/auth'

export function SignupForm({ onToggleForm }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setLoading(true)

    try {
      await signUp(email, password)
      setMessage('Регистрация успешна! Проверьте почту для подтверждения или войдите.')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Регистрация</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-50"
      >
        {loading ? 'Создание аккаунта...' : 'Зарегистрироваться'}
      </button>

      <p className="mt-4 text-sm text-center">
        Уже есть аккаунт?{' '}
        <button
          type="button"
          onClick={onToggleForm}
          className="text-blue-600 underline"
        >
          Войти
        </button>
      </p>
    </form>
  )
}