import { useState, useEffect } from 'react'
import { supabase } from '../api/supabaseClient'
import { getSession } from '../api/auth'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. При загрузке приложения проверяем текущую сессию
    getSession()
      .then((session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Ошибка при получении сессии:', err)
        setLoading(false)
      })

    // 2. Слушаем изменения состояния авторизации в реальном времени (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    // 3. Функция очистки (cleanup) при размонтировании компонента
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { user, loading }
}