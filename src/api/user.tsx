import instance from "./instance"

export const updateRole = (id:any,role:any)=>{
    return instance.patch(`/users/${id}`,role)
}
export const updateStatus = (id:any,status:any)=>{
    return instance.patch(`/users/${id}`,status)
}
export const updateUserId = (user:any)=>{
    return instance.patch(`/users/${user._id}`,user)
}
export const getUser = (id: any) => {
    return instance.get(`users/${id}`)
}