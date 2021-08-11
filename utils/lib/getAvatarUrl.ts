export const getAvatarUrl = (text?: string): string | undefined => {
  if (!text) return
  return `https://ui-avatars.com/api/?background=E72683&color=fff&rounded=true&format=svg&name=${text}`
}
