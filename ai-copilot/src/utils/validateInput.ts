export function validateInput(query: string) {
  if (!query || query.trim().length < 2) {
    return 'Please enter a more detailed question.'
  }

  if (query.length > 500) {
    return 'Query is too long.'
  }

  return null
}