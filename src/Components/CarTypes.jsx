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
    className="bg-gray-200 py-20 px-6 font-times md:px-12 overflow-x-hidden">
      {/* Title */}
      <h2 className="font-bold text-4xl mb-2 text-[#1c1536] ml-11">
        CAR TYPES <span className="text-[#d9b66c]">AVAILABLE</span>
      </h2>

      {/* Flex container */}
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Paragraph */}
        <div className="lg:w-1/3">
          <p className="text-gray-600 leading-relaxed text-sm mt-7 ml-11">
            Various car types available for rides include economy,<br />
            Estate, Executive, MVP and Minibus, catering to different<br />
            passenger needs and preferences. These options <br />
            ensure comfort, affordability, and style for all travelers.
          </p>
        </div>

        {/* Car Cards */}
        <div className="lg:w-2/3 flex flex-col">
          {/* First row: first two cards */}
          <div className="flex justify-end gap-6 mb-11 w-full">
            {cars.slice(0, 2).map((car, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-2xl mb-3 shadow hover:shadow-lg transition duration-300 min-w-[200px] h-[200px] flex-1"
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
                <h3 className="text-[#1c1536] text-xl font-bold mb-2">{car.name}</h3>

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
                <img src={car.image} alt={car.name} className="w-[30%] h-auto mb-2" />
              </div>
            ))}
          </div>
          {/* Second row:  */}
          <div className="flex justify-between w-full   gap-6 -ml-[250px] ">
            {cars.slice(2).map((car, i) => (
              <div
                key={i}
              className="relative bg-white p-6 rounded-2xl h-[220px] min-w-[350px] max-w-[400px] w-full shadow hover:shadow-lg transition duration-300"
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
                <h3 className="text-[#1c1536] text-xl font-bold mb-2">{car.name}</h3>

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
                <img src={car.image} alt={car.name} className="w-[50%] h-auto mb-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
}
