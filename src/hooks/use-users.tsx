import { updateRole, updateStatus } from '@/api/user'
import React from 'react'
import useSWR from 'swr'


const useUser = () => {
    const {data,error,mutate} = useSWR("/users")
    const updateRoleUser = async (id:any,role:any)=>{
      await updateRole(id,{
        role:role
      });
        mutate(data.map((item: any) => (item.id === id ? item.role = role :item.role)));
    }
    const updateStatusUser = async (id:any,status:any)=>{
        await updateStatus(id,{
          status:status
        });
          mutate(data.map((item: any) => (item.id === id ? item.status = status :item.status)));
      }
  return {
    data,
    updateRoleUser,
    updateStatusUser,
    error
  }
}

export default useUser