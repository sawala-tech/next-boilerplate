const calculatePrice = (price: number | string, dividen?: number | string) => {
  if (!price && !dividen) return 0
  if (!dividen) return parseInt(price.toString())
  let calculatePrice = 0
  if (price) {
    calculatePrice = parseInt(price.toString())
    if (dividen) {
      calculatePrice = Math.floor(parseInt(price.toString()) - parseInt(dividen.toString()))
    }
  }
  return calculatePrice
}

export default calculatePrice
