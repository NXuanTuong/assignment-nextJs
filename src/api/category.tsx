import instance from "./instance";

export const removeCategory = (id: any) => {
    return instance.delete(`/category/${id}`)
}
export const addCategory = (category: any) => {
    return instance.post('/category',category)
}