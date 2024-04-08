import React from 'react'
import Marquee from "react-fast-marquee";
import Sliderone from '../assets/Slider.jpg'
import Slidertwo from '../assets/slider 2.jpg'
import Sliderthree from '../assets/slider 3.jpg'
import Sliderfour from '../assets/slider 4.jpg'
import Sliderfive from '../assets/slider 5.jpg'
import Slidersix from '../assets/slider 6.jpg'
import Sliderseven from '../assets/slider 7.jpg'
import Slidereight from '../assets/slider 8.jpg'



const sliders = () => {

  const sliderImage = [
    {
      img: Sliderone,
      id: 1,
    },
    {
      img: Slidertwo,
      id: 2,
    },
    {
      img: Sliderthree,
      id: 3,
    },
    {
      img: Sliderfour,
      id: 4,
    },
    {
      img: Sliderfive,
      id: 5,
    },
    {
      img: Slidersix,
      id: 6
    },
    {
      img: Sliderseven,
      id: 7
    },
    {
      img: Slidereight,
      id: 8
    }
  ]


  return (
    <div className='mt-20'>
      <div className='text-center my-16'>
      <p className='font-bold text-4xl md:text-5xl mb-2'>Moments</p>
      <p className='text-slate-500 px-5'>These are the moments we cherish and we'd love to relive again</p>
      </div>
      
      <Marquee autoFill pauseOnClick>
      <div className=' flex justify-center flex-wrap items-center'>
        {sliderImage.map((slide, index) => (
          <div className=' h-[300px] ' key={index}>
            <div className='rounded-lg ml-6'>
              <img className=' rounded-xl h-72 w-72' src={slide.img}  alt={`Slide ${index}`}
              style={{ borderRadius: '10% 20% / 10% 20%' }} />
            </div>
          </div>
        ))}
      </div>
      </Marquee>
    </div>
  )
}

export default sliders
