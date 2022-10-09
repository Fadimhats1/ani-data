import axios from 'axios'

export async function getFromApi(urlApi){
  const res = await axios.get(urlApi);
  return res.data
}