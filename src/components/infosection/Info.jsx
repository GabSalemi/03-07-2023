import styles from "./info.module.scss";
import { useRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";



const Info = ( ) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const prevVertRef = useRef(null)
    const nextVertRef = useRef(null)

    return <div className={styles.info__section}>
        <Swiper pagination={true} modules={[Pagination, Navigation]} spaceBetween={0} slidesPerView={1} className={styles.swiper} 
            navigation={{
                prevEl: prevRef.current ? prevRef?.current : undefined,
                nextEl: nextRef.current ? nextRef?.current : undefined,
                }} 
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                }}>
          <SwiperSlide>
            <div className={styles.worldSection}>
              <h2>World Section</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
                <Swiper pagination={true} modules={[Pagination, Navigation]} spaceBetween={0} slidesPerView={1} className={styles.swiper} direction="vertical"
                navigation={{
                    prevEl: prevVertRef.current ? prevVertRef?.current : undefined,
                    nextEl: nextVertRef.current ? nextVertRef?.current : undefined,
                    }} 
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevVertRef.current;
                    swiper.params.navigation.nextEl = nextVertRef.current;
                    }}>
                    <SwiperSlide>
                        <div className={styles.peoplesSection}>
                            <h3>People One</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.peoplesSection}> 
                            <h3>People Two</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.peoplesSection}> 
                        <h3>People Three</h3>
                        </div>
                    </SwiperSlide>
                    <div className={`${styles.verticalNavigation} ${styles.prevButton}`} ref={prevVertRef}></div>
                    <div className={`${styles.verticalNavigation} ${styles.nextButton}`} ref={nextVertRef}></div>
                </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.historySection}> 
            <h2>History Section</h2>
            </div>
          </SwiperSlide>
          <div className={`${styles.navigation} ${styles.prevButton}`} ref={prevRef}></div>
          <div className={`${styles.navigation} ${styles.nextButton}`} ref={nextRef}></div>
        </Swiper>
      
    </div>
}

export default Info;