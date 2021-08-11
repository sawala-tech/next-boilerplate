const toRupiah = (rp?: number, emptyLabel?: string) => {
  if (!rp || rp < 0) return emptyLabel ?? ''
  return `Rp ${parseFloat(rp?.toString())?.toLocaleString('id')}`
}

export default toRupiah
