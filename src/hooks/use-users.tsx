import React from 'react'
import useSWR from 'swr'


const useUser = () => {
    const {data,error,mutate} = useSWR("/users")
  return{
    data,
    error
  }
}

export default useUser