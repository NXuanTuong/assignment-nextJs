import instance from "./instance"

export const updateRole = (id:any,role:any)=>{
    return instance.patch(`/users/${id}`,role)
}