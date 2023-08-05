import { useEffect, useState } from "react";
import { CAROUSEL_IMG_CDN_URL,RESTAURANT_CARDS_URL} from "../constant";

const Carousel = () => {
  const [carouselCard, setCarouselCard] = useState([]);
  const [carouselStart, setCarouselStart] = useState(0);
  const [carouselEnd, setCarouselEnd] = useState(4);

  useEffect(() => {
    getCarouselCard();
  }, []);

  const getCarouselCard = async () => {
    const urlResponse = await fetch(RESTAURANT_CARDS_URL);
    const jsonData = await urlResponse.json();
    setCarouselCard(jsonData?.data?.cards[0]?.data?.data?.cards);
    console.log(carouselCard);
  };
  return carouselCard.length <= 4 ? (
    <></>
  ) : (
    <>
      <div className=" relative flex bg-slate-600 w-full h-94 px-16 p-8 justify-evenly">
        <div className=" absolute top-36 right-14 text-slate-300 text-5xl ">
          <i onClick={()=> {
            if (carouselEnd > carouselCard.length) {
              return null;
            };
            setCarouselEnd(carouselEnd+1);
            setCarouselStart(carouselStart+1);
          }} className="fa fa-arrow-circle-right cursor-pointer duration-200 hover:translate-x-1"></i>
        </div>
        <div className=" absolute top-36 left-14 text-slate-300 text-5xl ">
          <i onClick={()=> {
            if (carouselStart < 1) {
              return null;
            };
            setCarouselEnd(carouselEnd-1);
            setCarouselStart(carouselStart-1);
          }} className="fa fa-arrow-circle-left cursor-pointer  duration-200 hover:-translate-x-1"></i>
        </div>
        {carouselCard?.slice(carouselStart, carouselEnd).map((imageId, index) => {
          if (index === 4) {
            return null;
          }
          return (
            <img
              src={CAROUSEL_IMG_CDN_URL + imageId?.data?.creativeId}
              className="w-64 h-64 hover:w-70 hover:h-64"
            />
          );
        })}
      </div>
    </>
  );
};
export default Carousel;