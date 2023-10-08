import React from 'react'
import { FaStar } from 'react-icons/fa'
import { reviews } from '../utils/data.js'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
    height: 275px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media (max-width: 768px) {
       height:500px;
    .mySwiper {
        width: 100%;
    }
    .stars {
        margin-left: 0%;
    }
    .SwiperSlide
    }
    .CenteringDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    .mySwiper {
        width: 75%;
        padding-top: 1%;   
    }
    .SwiperSlide {
        padding-left: 10%;
    }
    .ReviewName {
        margin-left: 0%;
        font-size: 30px;
        font-weight: 700;
        text-align:left;
        margin-bottom:0%;
    }
    .stars {
        margin-left: 0%;
        padding-left: 0%;
        color: gold;
        display:flex;
        justify-content:left;
        margin-top:0%;
    }

    .ReviewTextHolder{
        display: flex;
        margin-top:0px;
        height:100%;
    }
    .ReviewText {
        
        font-size: 18px;
        font-weight: 100;
        width: 100%;
        height:100%;
        margin-left: 0%;
        text-align:center;
    }
`

const ReviewsComponent = () => {
    return (
        <Wrapper>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} className="SwiperSlide">
                           
                            <Grid container spacing={2}>
                                <Grid item lg={11}>
                                    <div>
                                        <Grid container spacing={2}>
                                            
                                                    <Grid item lg={12}>
                                                        <div>
                                                            <p className="ReviewName">
                                                                {review.name}
                                                            </p>
                                                        </div>
                                                    </Grid>
                                                    <Grid item lg={12}>
                                                        <div>
                                                            <div className="stars">
                                                                {[
                                                                    ...Array(5),
                                                                ].map(
                                                                    (
                                                                        _,
                                                                        starIndex
                                                                    ) => (
                                                                        <FaStar
                                                                            key={
                                                                                starIndex
                                                                            }
                                                                            size={
                                                                                20
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item lg={12} >
                                                <div className='ReviewTextHolder'>
                                                    <div className="ReviewText">
                                                        {review.text}
                                                    </div>
                                                </div>
                                            </Grid>
                                                </Grid>
                                           
                                    </div>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
                 
              
        </Wrapper>
    )
}

export default ReviewsComponent
