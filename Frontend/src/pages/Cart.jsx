import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/cartSlice';


const Cart = () => {

    const { carts } = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const deleteItem = (id) => {
        dispatch(removeFromCart(id))
    }
    const allDelete = () => {
        dispatch(clearCart())
    }
    console.log(carts, 'cartlar')


    const cartTotal = carts.reduce((total, item) => total + item.price * item.adet, 0)

    return (
        <div className="my-3 md:my-10">
            <div className="flex items-center border-b py-3 mb-5 text-center">
                <div className="w-1/5">Urun Resmi</div>
                <div className="w-1/5" >Urun Adı</div>
                <div className="w-1/5" >Urun Miktarı</div>
                <div className="w-1/5" >Urun Fiyatı</div>
                <div className="w-1/5" >Duzenle</div>
            </div>

            {carts.map((cart, ix) => (
                <div key={ix}>
                    <div className="flex items-center text-center ">
                        <div className="w-1/5 flex items-center justify-center my-2">
                            <img className="w-20 h-auto" src={cart.image} />
                        </div>
                        <div className="w-1/5" >{cart.name}</div>
                        <div className="w-1/5 flex items-center justify-center" >
                            {cart.adet}
                        </div>
                        <div className="w-1/5 text-lg  font-bold" >{cart.price}</div>
                        <div className="w-1/5">
                            <Button text="Urunu Sil" full onClick={() => deleteItem(cart?.id)} />
                        </div>
                    </div>
                </div>
            ))}


            <div className="flex items-center justify-between my-5 py-5 border-t">
                <button className="w-1/5 underline text-sm" onClick={() => allDelete()} >Sepeti Sil</button>
                <div className="text-lg md:text-2xl font-bold mr-10">Toplam Tutar:
                    <br />
                    {cartTotal}
                </div>
            </div>
        </div>
    )
}
export default Cart
