import instance from "./instance"

export const signup = (user: any) => {
    return instance.post("/auth/signup", user)
}

export const signin = (user: any) => {
    return instance.post("/auth/signin", user)
}