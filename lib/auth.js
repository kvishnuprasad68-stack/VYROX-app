export function getUser() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('vyrox_user')
}

export function login(email) {
  if (typeof window === 'undefined') return
  localStorage.setItem('vyrox_user', email)
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('vyrox_user')
}
