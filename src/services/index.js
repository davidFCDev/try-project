const API_URL = 'https://sheetdb.io/api/v1/py0g1vrjnctrh'

export const getTimetable = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}