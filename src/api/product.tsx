import instance from "./instance"

export const add = (product: any) => {
    return instance.post("/products", product)
}