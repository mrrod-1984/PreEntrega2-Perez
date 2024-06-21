import data from './products.json'

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 10)
  })
}


export const getItemById = (id) => {
  return new Promise((resolve, reject) => {

      const item = data.find((item) => item.id === id)
      if (item){
        resolve(item)
      }else{
        reject({error: 'No se encontro el item'})
      }
  })
}

