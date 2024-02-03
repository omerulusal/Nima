import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux"
import { getProductDetail } from "../redux/productSlice"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice'


const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product, loading } = useSelector(state => state.products)
    useEffect(() => {
        if (id) {
            dispatch(getProductDetail(id))
            console.log("id gitti")
        }
    }, [dispatch, id]);
    console.log(product?.product, loading, 'urunler!!!!')


    const [adet, setAdet] = useState(1)
    if (adet < 1) {
        setAdet(1)
    }
    if (adet > product?.product?.stock) {
        setAdet(adet - 1)
    }
    if (adet > 5) {
        alert("En fazla 5 adet sepete ekleyebilirsiniz")
        setAdet(5)
    }


    const sepeteEkle = () => {
        const veri = {
            id: product?.product?._id,
            name: product?.product?.name,
            price: product?.product?.price,
            image:product?.product?.images[0].public_id,
            adet: adet
        }
        dispatch(addToCart(veri))
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-4 p-10 h-[450px]">
                    {loading ? "Loading..." :
                        <>
                            <img className="w-1/2 h-full object-cover" src={product?.product?.images[0].public_id} alt="Product" />
                            <div className="w-1/2 grid grid-rows-2 gap-4">
                                <div className="flex flex-row gap-4">
                                    {product?.product?.images.slice(1, 3).map((img, ix) => (
                                        <span key={ix}>
                                            <img className="w-full h-full object-cover" src={img.public_id} alt="Product" />
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-row gap-4">
                                    {product?.product?.images.slice(3).map((img, ix) => (
                                        <span key={ix}>
                                            <img className="w-full h-full object-cover" src={img.public_id} alt="Product" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>
            <div className="flex flex-row items-center w-full p-10 gap-10">
                {loading ? "Loading..." :
                    <div className="sol w-1/2">
                        <h1 className="text-2xl font-bold mt-4">{product?.product?.name}</h1>
                        <p className="text-lg mt-2">{product?.product?.desc}</p>
                    </div>
                }
                <div className="sag w-1/2 flex flex-col items-center justify-center gap-4 p-4 border border-gray-300 rounded shadow ">
                    <div className="mt-2">
                        <div className="text-xl font-bold">{product?.product?.price}TL</div>
                        <span className="text-yellow-400">★★★☆☆ ({product?.product?.reviews[0].rating} stars)</span>
                        <span className="text-sm">({product?.product?.reviews.length} reviews)</span>
                    </div>
                    <div className="mt-4">
                        <label className="mr-2">Variant:</label>
                        <select className="border p-2">
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option disabled>43</option>
                            <option>44</option>
                        </select>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-4">
                        <div className="text-2xl cursor-pointer" onClick={() => setAdet(adet - 1)}> - </div>
                        <div className="text-xl bg-slate-200 rounded-md w-10 text-center"> {adet} </div>
                        <div className="text-2xl cursor-pointer" onClick={() => setAdet(adet + 1)}> + </div>
                    </div>
                    <div className="mt-4 mr-14">
                        <label className="mr-2">
                            Stock:
                        </label>
                        <span className="text-sm text-gray-500 font-bold mr-2 border p-2 rounded border-gray-300 bg-gray-100 ">{product?.product?.stock}</span>
                    </div>
                    <div className="mt-4 flex flex-col w-full">
                        <Button text={"Add To Cart"} right full onClick={sepeteEkle} />
                        <Button text={"Buy Now"} right full onClick={() => { }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;