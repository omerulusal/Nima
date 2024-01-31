import Slider from "react-slick";
const Home = () => {
    const ayarlar = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="overflow-x-clip mt-5 drop-shadow-2xl mb-10">
            <Slider {...ayarlar}>
                <div>
                    <img className="w-full h-[420px] object-cover opacity-90" src="/sale1.jpeg" alt="sale" />
                </div>
                <div>
                    <img className="w-full h-[420px] object-cover opacity-90" src="/sale2.jpeg" alt="sale" />
                </div>
                <div>
                    <img className="w-full h-[420px] object-cover opacity-90" src="/sale3.jpeg" alt="sale" />
                </div>
            </Slider>
        </div>
    )
}

export default Home