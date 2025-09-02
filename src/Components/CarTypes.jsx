// CarTypes.jsx
import { FaUserFriends, FaSuitcase, FaSuitcaseRolling} from "react-icons/fa";

const cars = [
    {
        name: "ECONOMY",
        rating: 4,
        passenger: 3,
        large: 2,
        small: 1,
        image:"https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feconomy.bcfc3273.png&w=384&q=75",
    },
     {
        name: "ESTATE",
        rating: 5,
        passenger: 4,
        large: 4,
        small: 0,
        image:"https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Festate.1585d962.png&w=384&q=75",
    },
    {
        name: "EXECUTIVE",
        rating: 5,
        passenger: 3,
        large: 2,
        small: 2,
        image:"https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexecutive.4444c80a.png&w=384&q=75",
    },
    {
        name: "MPV",
        rating: 5,
        passenger: 3,
        large: 3,
        small: 2,
        image:"https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmpv.882ea1a0.png&w=384&q=75",
    },
    {
        name: "MINIBUS",
        rating: 5,
        passenger: 8,
        large: 8,
        small: 1,
        image:"https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmini-bus.15527e29.png&w=384&q=75",
    },
];
export default function CarTypes(){
    return(
    <section id="cartypes"
    className="bg-gray-200 py-16 md:py-20 px-4 md:px-12 font-times overflow-x-hidden">
      {/* Title */}
      <h2 className="font-bold text-3xl md:text-4xl mb-2 text-[#1c1536] ml-0 md:ml-11 text-center md:text-left">
        CAR TYPES <span className="text-[#d9b66c]">AVAILABLE</span>
      </h2>

      {/* Flex container */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 md:mt-10">
        {/* Paragraph */}
        <div className="lg:w-1/3">
          <p className="text-gray-600 leading-relaxed text-sm mt-4 md:mt-7 ml-0 md:ml-11 text-center md:text-left">
            Various car types available for rides include economy,<br />
            Estate, Executive, MVP and Minibus, catering to different<br />
            passenger needs and preferences. These options <br />
            ensure comfort, affordability, and style for all travelers.
          </p>
        </div>

        {/* Car Cards */}
        <div className="lg:w-2/3 flex flex-col">
          {/* First row: first two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 md:mb-11 w-full">
            {cars.slice(0, 2).map((car, i) => (
              <div
                key={i}
                className="relative bg-white p-5 md:p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 h-[200px]"
              >
                {/* Info */}
                <div className="absolute top-4 right-4 text-[#1c1536] space-y-1 text-xs text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <FaUserFriends />
                    <span>{car.passenger} Passengers</span>
                  </div>
                  <div className="flex items-center gap-1 pr-7 justify-end">
                    <FaSuitcase />
                    <span>{car.large} Large</span>
                  </div>
                  <div className="flex items-center gap-1 pr-7 justify-end">
                    <FaSuitcaseRolling />
                    <span>{car.small} Small</span>
                  </div>
                </div>

                {/* Car Name */}
                <h3 className="text-[#1c1536] text-lg md:text-xl font-bold mb-2">{car.name}</h3>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(car.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-500">★</span>
                  ))}
                  {[...Array(5 - car.rating)].map((_, idx) => (
                    <span key={idx} className="text-gray-300">★</span>
                  ))}
                </div>

                {/* Image */}
                <img src={car.image} alt={car.name} className="w-1/3 h-auto mb-2" />
              </div>
            ))}
          </div>
          {/* Second row:  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
            {cars.slice(2).map((car, i) => (
              <div
                key={i}
              className="relative bg-white p-5 md:p-6 rounded-2xl h-[220px] w-full shadow hover:shadow-lg transition duration-300"
  >
                {/* Info */}
                <div className="absolute top-4 right-4 text-[#1c1536] space-y-1 text-xs text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <FaUserFriends />
                    <span>{car.passenger} Passengers</span>
                  </div>
                  <div className="flex items-center gap-1 pr-7 justify-end">
                    <FaSuitcase />
                    <span>{car.large} Large</span>
                  </div>
                  <div className="flex items-center gap-1 pr-7 justify-end">
                    <FaSuitcaseRolling />
                    <span>{car.small} Small</span>
                  </div>
                </div>

                {/* Car Name */}
                <h3 className="text-[#1c1536] text-lg md:text-xl font-bold mb-2">{car.name}</h3>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(car.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-500">★</span>
                  ))}
                  {[...Array(5 - car.rating)].map((_, idx) => (
                    <span key={idx} className="text-gray-300">★</span>
                  ))}
                </div>

                {/* Image */}
                <img src={car.image} alt={car.name} className="w-1/2 h-auto mb-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
}
