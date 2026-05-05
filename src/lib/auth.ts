// src/lib/auth.ts

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'mayor' | 'admin' | 'staff';
}

const MOCK_USER: User = {
  id: '1',
  email: 'mayor@cityhall.gov',
  name: 'Executive Mayor',
  role: 'mayor',
};

export async function login(email: string, password: string): Promise<User | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === 'mayor@cityhall.gov' && password === 'password') {
    return MOCK_USER;
  }
  return null;
}

export function getSession() {
  if (typeof window === 'undefined') return null;
  const session = localStorage.getItem('mayor_session');
  return session ? JSON.parse(session) : null;
}

export function logout() {
  localStorage.removeItem('mayor_session');
  window.location.href = '/';
}
