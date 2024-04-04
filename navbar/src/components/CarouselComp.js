import React from 'react'
import Slider from "react-slick";
import image from "../Assets/logo.png";

const CarouselComp = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 3,
        speed: 500,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <>
            <div className="w-3/4 m-auto">
                <div className="mt-20">
                    <Slider {...settings} className="">
                        {data.map((d) => (
                            <div className="bg-white h-[450px] text-black rounded-xl">
                                <div className="h-56 rounded-t-xl bg-gray-300 flex justify-center items-center">
                                    {/* <img src={d.img} alt="Im" className=""></img> */}
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <p>{d.review}</p>
                                    <button className="bg-slate-500 text-white text-lg px-6 py-1 rounded-xl">Read more</button>
                                </div>
                            </div>
                        )
                        )}
                    </Slider>
                </div>
            </div>
        </>
    );
}

const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev" style={{ left: '-30px', backgroundColor: 'black' }}>Previous</button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next" style={{ right: '-30px', backgroundColor: 'black' }}>Next</button>
);

const data = [
    {
        name: "Shreya",
        img: image,
        review: "1",
    },
    {
        name: "Shreya",
        img: image,
        review: "2",
    },
    {
        name: "Shreya",
        img: image,
        review: "3",
    },
    {
        name: "Shreya",
        img: image,
        review: "4",
    },
    {
        name: "Shreya",
        img: image,
        review: "5",
    },
    {
        name: "Shreya",
        img: image,
        review: "6",
    },
    {
        name: "Shreya",
        img: image,
        review: "7",
    },
    {
        name: "Shreya",
        img: image,
        review: "8",
    },
    {
        name: "Shreya",
        img: image,
        review: "9",
    }
];

export default CarouselComp