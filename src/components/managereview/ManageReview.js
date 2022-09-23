import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import SingleReview from '../singleReview/SingleReview';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ManageReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(`https://pacific-chamber-54725.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })

    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return (
        <Container>
            <h1 className="text-center my-5"> Our client Says</h1>
           
                

                 <Slider {...settings} sm={1} md={3} className="my-5 pb-5">
                    {
                        reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>)
                    }
                </Slider>
       


        </Container>
    );
};

export default ManageReview;
