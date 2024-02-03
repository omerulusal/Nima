import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {

    const { carts } = useSelector(state => state.cart);
    const dispatch = useDispatch()

    console.log(carts, 'cartlar')

    return (
        <div className="my-3 md:my-10">
            <div className="flex items-center border-b py-3 mb-5 text-center">
                <div className="w-1/5">Urun Resmi</div>
                <div className="w-1/5" >Urun Adı</div>
                <div className="w-1/5" >Urun Miktarı</div>
                <div className="w-1/5" >Urun Fiyatı</div>
                <div className="w-1/5" >Duzenle</div>
            </div>
            <div>
                <div className="flex items-center text-center ">
                    <div className="w-1/5 flex items-center justify-center my-2">Resim</div>
                    <div className="w-1/5" >{carts[1]?.name}</div>
                    <div className="w-1/5 flex items-center justify-center" >
                        {carts[1]?.adet}
                    </div>
                    <div className="w-1/5 text-lg  font-bold" >{carts[1]?.price}</div>
                    <div className="w-1/5">
                        <Button text="Urunu Sil" full />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between my-5 py-5 border-t">
                <button className="w-1/5 underline text-sm">Sepeti Sil</button>
                <div className="text-lg md:text-2xl font-bold">
                    Toplam {carts[1]?.price} TL
                </div>
            </div>
        </div>
    )
}
export default Cart
