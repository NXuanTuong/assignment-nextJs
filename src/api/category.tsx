import instance from "./instance";

export const removeCategory = (id: any) => {
    return instance.delete(`/category/${id}`)
}
export const addCategory = (category: any) => {
    return instance.post('/category',category)
}
export const updateCategory = (category: any) => {
    return instance.put(`/category/${category._id}`, category)
}
export const readCategory = (id: any) => {
    return instance.get(`/category/${id}`)
}