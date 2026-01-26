interface authEmailLoginDto {
  email?: string
  password?: string
  twoFactorAuthenticationCode?: string
}

interface resetPasswordDto {
  password: string
  oldPassword?: string
}
