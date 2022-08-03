import useSWR from "swr";

const useCart = () => {
    const { data, error, mutate } = useSWR("/cart");
    const increase = (id: any) => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cartItems.find((item:any) => item._id === id);
        cartItem.quantity++
        mutate(localStorage.setItem('cart', JSON.stringify(cartItems)));
    }
    const decrease = (id: any) => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cartItems.find((item:any) => item._id === id);
        cartItem.quantity--
        mutate(localStorage.setItem('cart', JSON.stringify(cartItems)));
    }
    return {
        data,
        error,
        increase,
        decrease
    }
}
export default useCart;