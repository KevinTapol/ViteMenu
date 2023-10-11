import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
// import { RxDotFilled } from 'react-icons/rx'
import babka from '../src/assets/imgs/Babka_Baked.png'
import babka_crumb from '../src/assets/imgs/Babka_Crumb.png'
import babka_rolls from '../src/assets/imgs/Babka_Rolls.png'
import challah from '../src/assets/imgs/Challah_Baked.png'
import donuts_gnache from '../src/assets/imgs/Donuts_Gnache.jpg'
import donuts_hearts from '../src/assets/imgs/Donuts_Heart.png'
import hokkaido from '../src/assets/imgs/Hokkaido_Rolls.jpg'
import sd_crumb from '../src/assets/imgs/Sourdough_Crumb.jpg'
import sd_boule from '../src/assets/imgs/Sourdough_Boule.png'
import pumpkin from '../src/assets/imgs/Pumpkin_CR.jpg'
import philly from '../src/assets/imgs/philly.jpg'
import cali from '../src/assets/imgs/cali.jpg'
import special from '../src/assets/imgs/special.jpg'

function App() {
  const slides = [
    {
      url: babka,
      name: 'Ramsey Hot Chicken Sandwich',
      bread: 'Toasted Brioche Bun',
      ingredients: 'Tenders in Nashville Spice / Lettuce / Pickles'
    },
    {
      url: philly,
      name: 'Chicken Philly',
      bread: 'Toasted Brioche Bun',
      ingredients: 'GRILLED chicken tenders / Provolone / Peppers & Onions / Herb Garlic Aioli'
    },
    {
      url: babka_rolls,
      name: 'Ramsey Burger',
      bread: 'Toasted Brioche Bun',
      ingredients: 'Double Burger / Street Sauce / Caramelized Onions / Bacon / Cheese'
    },
    {
      url: challah,
      name: 'Lamb Gyro',
      bread: 'Toasted Pita',
      ingredients: 'Beef and Lamb / Onions / Tomato Relish / Lettuce / Tzatziki Sauce'
    },
    {
      url: donuts_gnache,
      name: 'HouseMade Tender',
      bread: 'No Bun',
      ingredients: 'Chicken Tender 4 count / Side / Two Sauces'
    },
    {
      url: donuts_hearts,
      name: 'Southern Grilled Cheese',
      bread: 'Toasted Sourdough Bread Slice',
      ingredients: 'Mac & Cheese / Bacon Jam'
    },
    {
      url: hokkaido,
      name: 'Grilled Tilapia',
      bread: 'No Bun',
      ingredients: 'Caribbean Spiced / Jalapeno Mango Salsa / Cilantro & Lime'
    },
    {
      url: sd_crumb,
      name: 'Chili Lime Beef Torta',
      bread: 'Toasted Ciabatta',
      ingredients: 'Churrasco Beef / Queso Fresco / Pickled Red Onion & Jalapenos / Chipotle Aioli / Guacamole'
    },
    {
      url: cali,
      name: 'California Chicken Club',
      bread: 'Toasted Ciabatta',
      ingredients: 'Grilled Chicken Breast / Guacamole / Bacon / Provolone / Cheese / Lettuce / Tomato'
    },
    {
      url: special,
      name: 'Special',
      bread: 'Toasted Ciabatta',
      ingredients: 'BBQ Shredded Beef / Cheddar Cheese / Apple / Jalapeno Slaw / French Onions'
    },
    {
      url: pumpkin,
      name: 'Sides',
      bread: '',
      ingredients: 'Fries / Sweet Potato Fries / Tater Tots'
    },
    // {
    //   url: 'http://placekitten.com/850/450',
    //   name: '',
    //   bread: '',
    //   ingredients: ''
    // },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[450px] h-[450px] w-full m-auto py-16 px-4 relative group">
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className='object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center text-xl '>
        {slides[currentIndex].name}
      </div>
      <div className='flex justify-center text-sm '>
          {slides[currentIndex].bread}
      </div>
      <div className='flex justify-center text-xs'>
        {slides[currentIndex].ingredients}
      </div>

      {/* <div className='grid gap-2 grid-cols-1'> */}
      <div className='flex flex-col gap-2 py-2'>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(0)} >Ramsey Hot Chicken Sandwich</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(1)} >Chicken Philly</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(2)} >Ramsey Burger</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(3)} >Lamb Gyro</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(4)} >HouseMade Tender</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(5)} >Southern Grilled Cheese</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(6)} >Grilled Tilapia</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(7)} >Chili Lime Beef Torta</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(8)} >California Chicken Club</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(9)} >Special</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='border-2 text-xs border-blue-500 rounded-full px-2 text-blue-500 cursor-pointer hover:text-purple-500 hover:border-purple-500 hover:scale-[120%] ease-in duration-200' onClick={() => goToSlide(10)} >Sides</h1>
        </div>
      </div>

      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-md px-1 cursor-pointer' >
            <RxDotFilled />
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default App;
