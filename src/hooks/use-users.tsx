import { getUser, updateRole, updateStatus, updateUserId } from '@/api/user'
import React from 'react'
import useSWR from 'swr'
import { toast } from "react-toastify";

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
    const updateUser = async (user: any)=>{
      await updateUserId(user)
      mutate(data.map((item: any) => item.id === data.id ? user : item ));
      
    }
    const readUser = async (id:any) => {
        const getUserById = await getUser(id)
        return getUserById
    }
  return {
    data,
    updateRoleUser,
    updateStatusUser,
    readUser,
    updateUser,
    error
  }
}

export default useUser