const ProductCard = () => {
    return (
        <div className="">
            <div className="cursor-pointer w-56 h-64 bg-slate-600 text-gray-800">
                <div className="flex flex-row justify-between">
                </div>
            </div>
            <div className="absolute bg-gray-50 w-56 p-2 flex flex-col gap-1">
                <span className="text-slate-400 font-bold text-xs">MARKA ADI</span>
                <span className="text-gray-800 font-bold text-xl">Urun Adı</span>
                <p className="text-neutral-800">Urun acıklama bilgileri yer alacaktır</p>
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard