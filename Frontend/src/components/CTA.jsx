/* eslint-disable react/jsx-key */
import { CiCalendarDate } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { ImTruck } from "react-icons/im";
import { BsBox2Fill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
const Cta = () => {
    return (
        <div className="bg-gray-100 py-1 text-center text-gray-800 font-bold mt-40 ">
            <ul className="flex flex-row justify-between mx-10 my-10">
                <li className="flex flex-col items-center gap-2 text-center text-xl font-bold">
                    <BsBox2Fill size={32} />
                    <h3 className="text-md">Kargo Bedava</h3>
                </li>
                <li className="flex flex-col items-center gap-2 text-center text-xl font-bold">
                    <ImTruck size={32} />
                    <h3 className="text-md">Standart Teslimat</h3>
                </li>
                <li className="flex flex-col items-center gap-2 text-center text-xl font-bold">
                    <TbTruckDelivery  size={32}/>
                    <h3 className="text-md">Hızlı Teslimat</h3>
                </li>
                <li className="flex flex-col items-center gap-2 text-center text-xl font-bold">
                    <CiCalendarDate size={32} />
                    <h3 className="text-md">Kolay Iade</h3>
                </li>
                <li className="flex flex-col items-center gap-2 text-center text-xl font-bold">
                    <BiPhoneCall size={32} />
                    <h3 className="text-md">Telefonla Sipariş</h3>
                </li>
            </ul>
        </div>
    )
}

export default Cta