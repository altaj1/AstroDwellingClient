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
        <SwiperSlide className="bg-[url('https://i.ibb.co/FVNgqh2/Angkor-Wat.jpg')]  bg-no-repeat bg-cover  min-w-full">
          <Slide
            // image={bgimg1}
            text='Get Your Web Development Projects Done in minutes'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            // image={bgimg2}
            text='Get Your Graphics Design Projects Done in minutes'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            // image={bgimg3}
            text='Start Your Digital Marketing Campaigns up n running'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
