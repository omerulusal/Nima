import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { login, register } from "../redux/userSlice"
import { useDispatch, useSelector } from "react-redux"

const Auth = () => {
    const [sign, setSign] = useState(false)
    const { user, isAuth } = useSelector(state => state.user)
    const [veri, setVeri] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginFunc = () => {
        dispatch(login(veri))
        console.log("login başarılı")
    }

    const registerFunc = () => {
        dispatch(register(veri))
        console.log("register başarılı")
    }

    const handleChange = (e) => {
        setVeri({ ...veri, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    }, [isAuth]);


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{sign ? "Sign Up" : "Login"}</h2>
                    <form className="flex flex-col">
                        {sign &&
                            <>
                                <input name="firstName" placeholder="First Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                                <input name="lastName" placeholder="Last Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                            </>}
                        <input name="email" placeholder="Email" onChange={handleChange} value={veri.email} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                        <input name="password" placeholder="Password" onChange={handleChange} value={veri.password} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />

                        {sign && <input name="confirmpassword" placeholder="Confirm Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />}

                        <div className="text-gray-900 mt-4"> {sign ? "Already have an account? " : "Create a new account "}
                            <a className="text-sm text-blue-500 -200 hover:underline mt-4 cursor-pointer" onClick={() => setSign(!sign)} >{sign ? "Login" : "Sign Up"}</a>
                            <div className='text-red-500 text-sm cursor-pointer my-4' onClick={() => navigate('/forgot')}>{sign ? "" : "Sifremi Unuttum"} </div>
                        </div>
                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" onClick={sign ? registerFunc : loginFunc} >
                            {sign ? "Sign Up" : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth