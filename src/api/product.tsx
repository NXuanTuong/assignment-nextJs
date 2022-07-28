import instance from "./instance"

export const add = (product: any) => {
    return instance.post("/products", product)
}
export const remove = (id: any) => {
    return instance.delete(`/products/${id}`)
}