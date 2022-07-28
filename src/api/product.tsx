import instance from "./instance"

export const add = (product: any) => {
    return instance.post("/products", product)
}
export const remove = (id: any) => {
    return instance.delete(`/products/${id}`)
}
export const update = (product: any) => {
    return instance.put(`/products/${product._id}`, product)
}
export const read = (id: any) => {
    return instance.get(`/products/${id}`)
}