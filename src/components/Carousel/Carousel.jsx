// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'




export default function Carousel() {
  return (
    <div className='container mt-0 min-w-full bg-slate-400 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide className="bg-[url('https://i.ibb.co/T2YkXBW/images.jpg')]  bg-no-repeat bg-cover h-[600px] ">
          <Slide
            // image={bgimg1}
            text='Get Your Web Development Projects Done in minutes'
          />
        </SwiperSlide>
        <SwiperSlide  className="bg-[url('https://i.ibb.co/CnLnFhF/4ef286563c4eb0ec8d36d5c2bc943ceb.jpg')]  bg-no-repeat bg-cover  "  >
          <Slide
            // image={bgimg2}
            text='Get Your Graphics Design Projects Done in minutes'
          />
        </SwiperSlide>
        <SwiperSlide  className="bg-[url('https://i.ibb.co/3s0JJMG/full-hd.jpg')]  bg-no-repeat bg-cover  ">
          <Slide
            // image={bgimg3}
            text='Start Your Digital Marketing Campaigns up n running'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
