/* eslint-disable react/prop-types */
const Header = ({ text }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 drop-shadow-2xl text-left ml-5 mt-10 mb-10 ">
                {text}
            </h1>
        </div>
    )
}

export default Header