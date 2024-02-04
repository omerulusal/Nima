import { useDispatch, useSelector } from "react-redux"
import { getProductDetail } from "../redux/productSlice"
import { useEffect, useState } from "react";

const Comments = () => {

    const { product, loading } = useSelector(state => state.products)
    console.log("Comment alanı", product?.product?.reviews?.[0].name)

    return (
        <div>
            {loading ? "Loading..." :
                <div>
                    {product?.product?.reviews?.map((review, ix) => (
                        <div className="flex flex-col gap-2 max-w-md w-full  text-black p-5 rounded-md mt-8 shadow-md duration-150" key={ix}>
                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-row justify-between w-full">
                                    <p className="text-xs">{review.name}</p>
                                    <p className="text-xs">June 1, 2000</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <h3 className="text-xl font-bold">Great Experience!</h3>

                                <div className="text-xs">
                                    <div className="flex flex-row">
                                        {review.rating}
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm">
                                {review.comment}
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Comments