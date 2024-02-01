import Slider from "react-slick";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';



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
        "/sale3.jpeg"
    ]
    return (

        <div className="overflow-x-clip mt-5 drop-shadow-2xl mb-10">
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
        </div>
    )
}

export default Home