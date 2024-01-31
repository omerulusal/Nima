const SingleCart = () => {
    return (
        <div className="relative group cursor-pointer group overflow-hidden  text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
            <div className="w-56 h-72 bg-slate-600 text-gray-800">
                <div className="flex flex-row justify-between">
                </div>
            </div>
            <div className="absolute bg-gray-50 -bottom-16 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-slate-400 font-bold text-xs">MARKA ADI</span>
                <span className="text-gray-800 font-bold text-xl">Urun Adı</span>
                <p className="text-neutral-800">Urun acıklama bilgileri yer alacaktır</p>
            </div>
        </div>
    )
}

export default SingleCart