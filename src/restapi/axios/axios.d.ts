interface ApiResponse<T = undefined> {
  data?: T
  status: number
  response: {
    data?: {
      message: string
      statusCode: number
      status
      error?: string
      errors?: IndetifierError & FormModuleError
    }
  }
}

interface IndetifierError {
  email?: string
  password?: string
  twoFactorAuthenticationCode?: string
  twoFactorAuthentication?: string
}

interface FormModuleError {
  form: string
  message: string
}
