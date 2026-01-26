import api from '@/services/api'

import { USER_ENDPOINTS } from './constants'

export async function inviteUser(userData: createUserDto): Promise<void> {
  try {
    await api.post(USER_ENDPOINTS.inviteUser, userData)
  } catch (err) {
    throw new Error((err as ApiResponse)?.response?.data?.message || 'Failed to invite user')
  }
}
