import { supabase } from './supabaseClient'

// 1. Регистрация нового пользователя
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) throw error
  return data
}

// 2. Вход существующего пользователя
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

// 3. Выход из системы
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// 4. Получение текущей сессии (залогинен ли пользователь сейчас)
export async function getSession() {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  return data.session
}