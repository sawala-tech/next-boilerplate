import type { User } from 'next-auth'

import api from '@/services/api'

import { AUTH_ENDPOINTS } from './constants'

export async function authEmailLogin(payload: authEmailLoginDto): Promise<User | null> {
  try {
    delete api.defaults.headers.Authorization
    const { data } = await api.post<LoginResponse>(AUTH_ENDPOINTS.emailLogin, payload)

    return {
      id: data?.user?.id.toString(),
      refreshToken: data?.refreshToken,
      token: data?.token,
      tokenExpires: data?.tokenExpires,
      user: data?.user
    }
  } catch (err) {
    let message: string | undefined = 'Login gagal, silakan coba lagi'
    const error = err as ApiResponse
    const errorMessage = error?.response?.data?.message
    const errorsMessage = error?.response?.data?.errors
    if (errorMessage) {
      message = errorMessage
    } else if (errorsMessage && typeof errorsMessage === 'object') {
      const values = Object.values(errorsMessage)
      if (values.length > 0 && typeof values[0] === 'string') {
        message = values[0]
      }
    }
    const transformMessage = message
    console.error({ err: error?.response?.data, message })
    throw new Error(transformMessage)
  }
}

export async function resetPassword(payload: resetPasswordDto): Promise<void> {
  try {
    await api.patch(AUTH_ENDPOINTS.resetPassword, payload)
  } catch (err) {
    throw new Error((err as ApiResponse)?.response?.data?.message || 'Gagal mengatur ulang password')
  }
}
