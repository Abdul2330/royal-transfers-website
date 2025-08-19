
import BG from '../assets/BG.png';

export default function Hero() {
  return (
    <div
    id='home'
      className="relative font-times min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Form */}
        <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-sm h-[340px] mt-[100px] space-y-6">
          <div className="mt-10">
            <label className="font-bold text-black uppercase text-xl">Pick Up Location</label>
            <input
              type="text"
              placeholder="City, Address"
              className="mt-1 w-full text-xl border rounded-md px-4 py-2 outline-none bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="font-bold text-black uppercase text-xl">Arrival Location</label>
            <input
              type="text"
              placeholder="City, Address"
              className="mt-1 w-full text-xl border rounded-md px-4 py-2 outline-none bg-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="bg-[#1c1536] text-white text-2xl w-full py-3 rounded-full font-medium">
            Get Quote
          </button>
        </div>

        {/* Car Image */}
        <div className="md:mt-0 md:ml-12">
          <img
            src="https://www.airportlondonuktaxi.co.uk/_next/static/media/taxi-hero.6d696aae.svg"
            alt="Luxury Car"
            className="w-full max-w-md mt-[250px] ml-10 md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
