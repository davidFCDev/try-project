const API_URL = 'https://sheet.best/api/sheets/124384e5-548a-4a4c-97d0-4b3d8444fc34'

export const getTimetable = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}