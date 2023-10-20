const API_URL = 'https://sheet.best/api/sheets/b8d9acfa-65bd-446c-bf1e-a2d99a73c518'

export const getTimetable = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}