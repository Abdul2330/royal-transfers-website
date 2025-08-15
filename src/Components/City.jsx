import React, { useEffect, useRef, useState } from "react";

const fetchCities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "READING",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freading.4f8cf68f.png&w=1920&q=75",
        },
        {
          name: "MILTON KEYNES",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmilton-keynes.282a8044.png&w=1920&q=75",
        },
        {
          name: "CENTRAL LONDON",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcentral-london.0e6941cd.png&w=1920&q=75",
        },
        {
          name: "GREATER MANCHESTER",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreater-manchester.ed2142a7.png&w=1920&q=75",
        },
        {
          name: "BIRMINGHAM",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbirmingham.2f85ec69.png&w=1920&q=75",
        },
        {
          name: "HEATHROW",
          image: "https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheathrow.15e147aa.png&w=1920&q=75",
        },
      ]);
    }, 1000); // 1 second delay to simulate API call
  });
};

const City = () => {
  const [cities, setCities] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // ✅ Fetch data using a Promise
    fetchCities()
      .then((data) => {
        // Set data in state
        setCities([...data, ...data]); // duplicate for smooth scrolling
      })
      .catch((error) => {
        console.error("Error loading cities:", error);
      });
  }, []);

  useEffect(() => {
    if (!cities.length) return;

    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    const cardWidth = 200;
    const gap = 20;
    const visibleCards = 4;
    const totalWidthPerScroll = cardWidth + gap;
    const totalCards = cities.length;
    const totalScrollableWidth =
      totalCards * totalWidthPerScroll - visibleCards * gap;

    const interval = setInterval(() => {
      scrollPosition += totalWidthPerScroll;
      if (scrollPosition >= totalScrollableWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cities]);

  return (
    <section id="cities" className="py-10 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1c1536] text-center mb-4">
        SERVING <span className="text-[#d9b66c]">MULTIPLE LOCALITIES</span>
      </h2>
      <p className="text-gray-500 text-center mt-7 mb-6 text-sm md:text-base">
        Royal Transfers proudly serves towns, villages, and cities throughout the UK.
      </p>

      <div
        ref={scrollRef}
        className="max-w-[860px] mx-auto flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ width: "860px" }}
      >
        {cities.map((city, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[200px] bg-white rounded-lg shadow-md relative"
            style={{ flex: "0 0 auto" }}
          >
            <div className="h-16 flex items-center justify-center bg-white bg-opacity-90">
              <h3 className="text-[#1c1536] text-lg font-bold text-center px-2">
                {city.name}
              </h3>
            </div>
            <div className="h-[100px]">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover rounded-b-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default City;
