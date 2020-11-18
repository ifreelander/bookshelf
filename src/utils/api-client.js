// export * from './api-client.final'
import React, {useState} from 'react'
export * from './api-client.exercise'

// 💯 handle failed requests
// export * from './api-client.extra-1'

const endpoint = `${process.env.REACT_APP_API_URL}/books?query=Voice%20of%20War`

const ClientAPI = () => {
  window
    .fetch(endpoint)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })

  React.useEffect(() => {
    ClientAPI()
  }, [])
}
