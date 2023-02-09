export function convertToBrazilianDate(date: string): string {
  const dateObject = new Date(date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric"
  })
  return dateObject
}
