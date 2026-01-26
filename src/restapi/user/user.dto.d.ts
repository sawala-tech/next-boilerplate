interface createUserDto {
  firstName: string
  lastName?: string
  email?: string
  password?: string
  autoGeneratePassword?: boolean
  permissions?: Record<string, Partial<Record<'read' | 'create' | 'update' | 'delete' | 'export', boolean>>>
  regionAssignment: {
    postalCode?: string
    villageCode: string
    subDistrictCode: string
    cityCode: string
    provinceCode: string
    targetType: string
    hamletCode?: string
  }
  status: {
    id: number
  }
  role: {
    id: number
  }
}
