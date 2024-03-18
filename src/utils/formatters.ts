export const formatDescription = (description: string) => {
  if (description.length > 160) {
    return description.slice(0, 157) + '...'
  }

  return description
}

export const formatDescriptionCardRestaurant = (description: string) => {
  if (description.length > 230) {
    return description.slice(0, 227) + '...'
  }

  return description
}

export const formatPrice = (price: number = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
