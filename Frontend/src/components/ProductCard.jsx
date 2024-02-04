/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/productSlice"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import textClip from "../utils/textClip";
import { getAnahtar } from '../redux/generalSlice'


const ProductCard = ({ bestSelling }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { urunlerArr, loading } = useSelector(state => state.products)
    const { anahtar } = useSelector(state => state.general)
    useEffect(() => {
        dispatch(getProducts(),
            getAnahtar());//henuz kullanamadım
    }, [dispatch]);

    console.log(urunlerArr, loading, 'urunler!!!!')
    console.log(anahtar, 'ANAHTARRRR')

    return (
        <div className="">
            {loading ? "Loading..." :
                <div>
                    {urunlerArr.products &&
                        <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5" >
                            {
                                urunlerArr?.products?.map((product, id) => (
                                    <div key={id} className="flex flex-col border w-56 max-h-[250px]" onClick={() => navigate(`/products/${product?._id}`)}>
                                        <div className="cursor-pointer w-56 h-64 text-gray-800">
                                            <img className="h-[90px] object-cover" src={product.images[0].public_id} alt="" />
                                        </div>
                                        <div className="relative bg-gray-50 p-2 flex min-h-[170px] mb-96 flex-col justify-center gap-2" >
                                            <span className="text-slate-400 font-bold text-xs">{product.category}</span>
                                            <span className="text-gray-800 font-bold text-lg scroll-pb-1">{product.name}</span>
                                            {bestSelling ? <></> : <>
                                                <p className="text-neutral-800 pb-5">{textClip(`${product?.desc}`)}</p>
                                                <div className="flex flex-row absolute bottom-1 right-1 pt-5 item-center justify-between mt-1">
                                                    <h1 className="text-gray-700 text-left w-24 font-bold text-xl">{product.price}TL</h1>
                                                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Basket</button>
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default ProductCard