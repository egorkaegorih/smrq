import './ServiceContentTemplate.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ServiceContentTemplate = (props) => {
    return (
        <>
        <section className="service-content">
            <div className="service-content__inner">
                {
                    !props.dir ? 
                    <div className="service-content__slider">
                        <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev.prev1',
                            nextEl: '.next.next1'
                        }}
                        loop={true}>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/01618e109513697.601f76a8bd140.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9448ca114504385.603ce1fc442cf.jpeg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/77f55a113187333.6022cf9938437.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1a1310135352735.61e69e45b50b9.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cd41dd144372145.628ba07bd164b.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                        </Swiper>
                        <div className="prev prev1">
                        <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.08612e-05 27.0001L11.6233 0.000161194L20 0.000162341C16.8158 7.40812 13.6212 14.8047 10.4371 22.2127C10.4266 22.224 9.50053 24.3908 9.49012 24.4022L9.36526 24.6971C9.03227 25.4572 8.70969 26.2287 8.3767 26.9887C8.67847 27.6808 8.98024 28.3841 9.28201 29.0761C9.29242 29.1102 9.30282 29.1442 9.32363 29.1669L10.3122 31.4698L20 54L11.6233 54L1.92509 31.4812L0.936536 29.1782C0.92613 29.1555 0.915723 29.1215 0.894912 29.0875L1.08612e-05 27.0001Z" fill="#1B1A17" fillOpacity="0.25"/>
                        </svg>
                        </div>
                        <div className="next next1">
                        <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26.9999L8.37667 53.9998L-1.75874e-05 53.9998C3.18417 46.5919 6.37876 39.1953 9.56295 31.7873C9.57335 31.776 10.4995 29.6092 10.5099 29.5978L10.6347 29.3028C10.9677 28.5428 11.2903 27.7713 11.6233 27.0113C11.3215 26.3192 11.0198 25.6159 10.718 24.9239C10.7076 24.8898 10.6972 24.8558 10.6764 24.8331L9.68782 22.5302L0 0L8.37669 2.84567e-07L18.0749 22.5188L19.0635 24.8218C19.0739 24.8445 19.0843 24.8785 19.1051 24.9125L20 26.9999Z" fill="#1B1A17" fillOpacity="0.25"/>
                        </svg>
                        </div>
                    </div> :
                    null
                }
                <div className="service-content__data">
                    <div className="service-content__name">{props.name}</div>
                    <div className="service-content__descr">{props.descr}</div>
                </div>
                {
                    props.dir ? 
                    <div className="service-content__slider">
                        <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev.prev2',
                            nextEl: '.next.next2'
                        }}
                        loop={true}>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9448ca114504385.603ce1fc442cf.jpeg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/01618e109513697.601f76a8bd140.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/77f55a113187333.6022cf9938437.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1a1310135352735.61e69e45b50b9.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                            <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/cd41dd144372145.628ba07bd164b.jpg" alt="Slide" className="service-content__slide" /></SwiperSlide>
                        </Swiper>
                        <div className="prev prev2">
                        <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.08612e-05 27.0001L11.6233 0.000161194L20 0.000162341C16.8158 7.40812 13.6212 14.8047 10.4371 22.2127C10.4266 22.224 9.50053 24.3908 9.49012 24.4022L9.36526 24.6971C9.03227 25.4572 8.70969 26.2287 8.3767 26.9887C8.67847 27.6808 8.98024 28.3841 9.28201 29.0761C9.29242 29.1102 9.30282 29.1442 9.32363 29.1669L10.3122 31.4698L20 54L11.6233 54L1.92509 31.4812L0.936536 29.1782C0.92613 29.1555 0.915723 29.1215 0.894912 29.0875L1.08612e-05 27.0001Z" fill="#1B1A17" fillOpacity="0.25"/>
                        </svg>
                        </div>
                        <div className="next next2  ">
                        <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26.9999L8.37667 53.9998L-1.75874e-05 53.9998C3.18417 46.5919 6.37876 39.1953 9.56295 31.7873C9.57335 31.776 10.4995 29.6092 10.5099 29.5978L10.6347 29.3028C10.9677 28.5428 11.2903 27.7713 11.6233 27.0113C11.3215 26.3192 11.0198 25.6159 10.718 24.9239C10.7076 24.8898 10.6972 24.8558 10.6764 24.8331L9.68782 22.5302L0 0L8.37669 2.84567e-07L18.0749 22.5188L19.0635 24.8218C19.0739 24.8445 19.0843 24.8785 19.1051 24.9125L20 26.9999Z" fill="#1B1A17" fillOpacity="0.25"/>
                        </svg>
                        </div>
                    </div> :
                    null
                }
            </div>
        </section>
        </>
    )
}  

export default ServiceContentTemplate;