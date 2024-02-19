export const formatDescription = (description: string) => {
  if (description.length > 120) {
    return description.slice(0, 117) + '...'
  }

  return description
}
