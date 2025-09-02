
import BG from '../assets/BG.png';

export default function Hero() {
  return (
    <div
    id='home'
      className="relative font-times min-h-[80vh] md:min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="pt-28 md:pt-32 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Form */}
        <div className="bg-white p-5 md:p-6 rounded-3xl shadow-md w-full max-w-md md:max-w-sm md:h-[340px] mt-8 md:mt-[100px] space-y-4 md:space-y-6">
          <div className="mt-10">
            <label className="font-bold text-black uppercase text-lg md:text-xl">Pick Up Location</label>
            <input
              type="text"
              placeholder="City, Address"
              className="mt-1 w-full text-base md:text-xl border rounded-md px-3 md:px-4 py-2 outline-none bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="font-bold text-black uppercase text-lg md:text-xl">Arrival Location</label>
            <input
              type="text"
              placeholder="City, Address"
              className="mt-1 w-full text-base md:text-xl border rounded-md px-3 md:px-4 py-2 outline-none bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="bg-[#1c1536] text-white text-lg md:text-2xl w-full py-3 rounded-full font-medium">
            Get Quote
          </button>
        </div>

        {/* Car Image */}
        <div className="md:mt-0 md:ml-12 w-full flex justify-center">
          <img
            src="https://www.airportlondonuktaxi.co.uk/_next/static/media/taxi-hero.6d696aae.svg"
            alt="Luxury Car"
            className="w-4/5 sm:w-3/4 md:w-full max-w-xs sm:max-w-md md:max-w-lg mt-6 md:mt-0 lg:mt-16 xl:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
