export function debounce(fn: Function, delay: number) {
  let timeout: any

  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}