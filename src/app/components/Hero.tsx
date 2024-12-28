'use client'
import Carousel  from "./Carousel";

export default function Hero() {

  return (
    <section>
      {/* Container*/}
      <div className="container mx-auto bg-orange-400 p-5">
        {/* For Flex Div */}
        <div className="flex flex-col justify-between mt-5 md:flex-row md:mt-0">
          {/* Left Div */}
          <div className="basis-[40%] py-3 px-10 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold text-stone-100  mb-6">
              Browse & <br /> Select E-Books
            </h1>
            <p className="text-stone-700 mb-6 text-[20px]">
              Find the best e-books from your favorite writers, explore hundreds
              of books with all possible categories, take advantage of the 50%
              discount and much more.
            </p>
            <button  className="bg-orange-600 text-stone-200 font-semibold shadow-xl px-4 py-2 rounded-sm hover:animate-bounce transition duration-500">
              Explore Now
            </button>
          </div>
          {/* End Left Div */}
          {/* Right Div */}
          <div className="basis-[60%] bg-pink flex justify-center items-center">
              <Carousel/>
             {/*<Image src={"/book-10.jpg"} alt="book" width={200} height={200} className='cursor-grab hover:animate-pulse'/> */}
        
          </div>{/* End Right Div */}
          
        </div>{/*End For Flex Div */}
        
      </div>
    </section>
  );
}