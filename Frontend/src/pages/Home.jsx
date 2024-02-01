import Slider from "react-slick";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import TopluCard from "../components/TopluCard";

const Home = () => {

    const navigate = useNavigate();
    const ayarlar = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slideData = [
        "/sale1.jpeg",
        "/sale2.jpeg",
        "/sale3.jpeg",
    ]
    return (
        <div className="overflow-x-clip mt-5 drop-shadow-2xl my-96">
            <Slider {...ayarlar}>
                {slideData.map((item, id) => (
                    <div key={id}>
                        <img className="w-full h-[420px] object-cover opacity-90" src={item} alt="sale" />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-row justify-between">
                <Title text={"Tum Urunler"} />
                <Button right text={"Hepsini Gör"} onClick={() => navigate("/products")} />
            </div>
            <p className="text-sm text-gray-500 -mt-8 mb-14 ml-5 mr-5 text-justify w-3/4 md:w-1/2" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <TopluCard ikili />

            <div className="flex flex-row justify-between mt-52">
                <Title text={"Size Ozel Urunler"} />
                <Button right text={"Detaylar"} onClick={() => navigate("/products")} />
            </div>
        </div>
    )
}

export default Home