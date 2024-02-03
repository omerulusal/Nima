import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const [sign, setSign] = useState(false)
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{sign ? "Sign Up" : "Login"}</h2>
                    <form className="flex flex-col">
                        {sign &&
                            <>
                                <input placeholder="First Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                                <input placeholder="Last Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                            </>}
                        <input placeholder="Email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                        <input placeholder="Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />

                        {sign && <input placeholder="Confirm Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />}

                        <p className="text-gray-900 mt-4"> {sign ? "Already have an account? " : "Create a new account "}
                            <a className="text-sm text-blue-500 -200 hover:underline mt-4 cursor-pointer" onClick={() => setSign(!sign)} >{sign ? "Login" : "Sign Up"}</a>
                            <div className='text-red-500 text-sm cursor-pointer my-4' onClick={() => navigate('/forgot')}>{sign ? "" : "Sifremi Unuttum"} </div>
                        </p>
                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">{sign ? "Sign Up" : "Login"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth