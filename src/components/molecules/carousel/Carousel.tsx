import React, { Children } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {
  children: React.ReactNode;
}

const Carousel = (props: Props) => {
  const { children } = props;
  const settings: any = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    dots: false,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
