import { updateRole } from '@/api/user'
import React from 'react'
import useSWR from 'swr'


const useUser = () => {
    const {data,error,mutate} = useSWR("/users")
    const updateRoleUser = async (id:any,role:any)=>{
      await updateRole(id,{
        role:role
      });
        mutate(data.map((item: any) => (item.id === id ? item.role :item.role)));
    }
  return {
    data,
    updateRoleUser,
    error
  }
}

export default useUser