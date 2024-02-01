/* eslint-disable react/prop-types */
const Button = ({ text, onClick, right, full }) => {
    return (
        <button onClick={onClick} className={` font-bold py-2 px-4 rounded mt-4 
        ${right ? `${full ? "w-full bg-black text-white hover:bg-white hover:text-black border-none" : "w-[130px]"}  h-[40px] mt-10 border-b mr-11 hover:border-b-blue-200 hover:border-b-8 shadow-md transition-all` :
                "text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-indigo-600 hover:to-blue-600 border transition ease-in-out duration-150"}`} >
            {text}
        </button>
    )
}

export default Button