/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

const ResetPassword = () => {
    const [bak, setBak] = useState("")
    const mesaj = () => {
        if (bak.length == 0 || bak == undefined) {
            alert("Email adresinizi giriniz")
        }
        if (bak.length > 0) {
            alert("Sifre sıfırlama mesajı mail adresinize gönderildi")
        }
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Reset Password</h3>
            <Input type="email" placeholder={"Email adresinizi giriniz"} value={bak} onChange={(e) => setBak(e.target.value)} />
            <Button text="Gönder" onClick={() => mesaj()} />
        </div>
    )
}

export default ResetPassword