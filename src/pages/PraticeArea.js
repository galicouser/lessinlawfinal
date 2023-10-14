import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styled-components/HeaderStyles';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { getPracticeAreasData } from '../utils/practiceAreasAPI';

const PraticeArea = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getPracticeAreasData();
                setData(responseData.data[0].metavalue);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="PraticeAreaHolder">
                <GlobalStyles />
                <div className="PraticeInner">
                    <p className="TitleText">Pratice Area</p>
                    <p className="TextPassage">
                        Lessin Law, LLC is dedicated to delivering cost-efficient, outcome-driven
                        legal advocacy for clients engaged in a diverse range of legal issues. We
                        operate as a comprehensive boutique litigation firm with extensive
                        expertise in handling cases in Federal Court, Pennsylvania's trial and
                        appellate courts, administrative entities, and alternative dispute
                        resolution procedures, such as mediations and arbitrations.
                    </p>
                    <p className="TextPassage">
                        We are dedicated to delivering results for our clients. Our legal
                        professionals have established a robust history of achievement, thanks to
                        their thorough preparation, unwavering attention to detail, and tireless
                        efforts. With over 100 cases taken to verdict, we are experienced trial
                        attorneys who pool our abilities, expertise, and resources to advocate for
                        clients in diverse practice areas, encompassing:{' '}
                    </p>
                </div>

                {loading ? ( // Render loading message while data is being fetched
                    <></>
                ) : (
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="PraticeAreaSwiper"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className="PraticeSlide">
                                <img src={item.image} className="PraticeSwiperImage" />
                                <div className="PraticeOpacityBackground"></div>
                                <div className="PraticeOpacityBackground2"></div>
                                <div className="PraticeTextHolder">
                                    <p className="PraticeTitle">{item.title}</p>
                                    <p className="PraticeDescription">{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            <Footer />
        </>
    );
};
export default PraticeArea
