import instance from "./instance";

export const removeCategory = (id: any) => {
    return instance.delete(`/category/${id}`)
}