import React, { useState } from "react";
import ContactModal from "./contactModal";


const Navbar = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 fixed top-0 left-0 w-full z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="#services">
              <img
                src="https://coupalcranes.com/logotype.png"
                alt="Logo"
                className="h-16 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-lg font-extrabold">
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-600 cursor-pointer"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#rental"
                  className="hover:text-orange-600 cursor-pointer"
                >
                  RENTAL
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-orange-600 cursor-pointer"
                >
                  TEAM
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-600 cursor-pointer"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + CTA */}
          <div className="md:flex items-center space-x-4 text-lg">
            <span> 📞(604) 942-7942</span>
            <button
              className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-400 transition rounded"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}

      {/* Hero Section */}
      <div className="relative w-full h-screen pt-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="./hero-vid.webm"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 px-4">
          <p className="text-[2rem] md:text-[5rem] font-bold text-gray-300 opacity-50">
            Vancouver’s
          </p>
          <h1 className="text-[3rem] md:text-[7rem] font-bold">
            Tower Crane Company
          </h1>
          <p className="text-[1rem] md:text-[2rem] font-bold text-gray-300 opacity-50">
            Providing rental service and support to the
            <br />
            construction industry since 1974.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center justify-center text-center py-7 gap-4 bg-[#edebe6] px-4">
        <h1 className="text-[1rem] md:text-[2rem] leading-relaxed">
          We provide reliable equipment, professional site maintenance,
          <br className="hidden md:block" />
          efficient service and friendly communication. Our 40+ year
          <br className="hidden md:block" />
          history of crane expertise speaks for itself.
        </h1>
        <img className="mx-auto w-32 md:w-auto" src="./1.svg" alt="" />
      </div>

      <div id="services" className="scroll-mt-20">
        {" "}
        {/* Tailwind class */}
        <div className="flex flex-col items-center justify-center text-center gap-3 my-4 mt-16 font-extrabold">
          <h1 className="text-gray-400 opacity-50 text-xl md:text-2xl">
            CRANE
          </h1>
          <h2 className=" text-2xl md:text-5xl">SERVICES</h2>
        </div>
        {/* section */}
        <section className="flex justify-center items-start gap-6 flex-wrap my-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <img
              className="h-[260px] w-[380px] object-cover"
              src="./s1.webp"
              alt="Erect / Dismantle"
            />
            <h2 className="text-xl md:text-2xl font-extrabold mt-6">
              ERECT / DISMANTLE
            </h2>
            <p className="text-[25px] md:text-[20px] text-gray-600 font-normal mt-2 px-4 leading-relaxed">
              Our crew works proficiently and effectively. Our pre-planning is
              unparalleled, giving you an efficient process from planning to
              dismantle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <img
              className="h-[260px] w-[380px] object-cover"
              src="./s2.webp"
              alt="Climb"
            />
            <h2 className="text-xl md:text-2xl font-extrabold mt-6">CLIMB</h2>
            <p className="text-[25px] md:text-[20px] text-gray-600 font-normal mt-2 px-4 leading-relaxed">
              With a large inventory of climbing units, tie-backs, and tower
              sections, our cranes can be customized to meet your building
              needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <img
              className="h-[260px] w-[380px] object-cover"
              src="./s3.webp"
              alt="Maintain"
            />
            <h2 className="text-xl md:text-2xl font-extrabold mt-6">
              MAINTAIN
            </h2>
            <p className="text-[25px] md:text-[20px] text-gray-600 font-normal mt-2 px-4 leading-relaxed">
              We mitigate down time with on-call service, large inventory,
              experienced staff, and a central location.
            </p>
          </div>
        </section>
      </div>

      <div id="rental" className="scroll-mt-20 scroll-smooth">
        {" "}
        {/* Tailwind class */}
        <div>
          {/* HERO SECTION */}
          <div className="relative">
            {" "}
            {/* Negative margin to pull up next section */}
            <img
              className="w-full h-[500px] object-cover"
              src="./rental.jpg"
              alt="Crane Rental"
            />
            {/* Softer Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            {/* Floating Text */}
            <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center text-center px-4">
              <h1 className="md:text-4xl font-semibold text-gray-200 opacity-20">
                CRANE
              </h1>
              <h2 className="md:text-5xl font-extrabold text-white">RENTALS</h2>
              <p className="md:text-xl font-medium text-gray-200 mt-4 max-w-[700px]">
                All of our tower cranes come complete with a
                <br />
                105 hp hoisting package.
              </p>
            </div>
          </div>
          {/* CARD SECTION */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-[1200px] px-4 pt-20 mt-[-200px]">
            {/* Card 1 */}
            <section className="flex flex-col items-center text-center">
              <img
                src="./r1.webp"
                className="w-full h-[310px] object-cover"
                alt="Crane"
              />
              <div className="bg-black text-white w-full p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4">
                  <h1 className="text-2xl font-bold">SK170</h1>
                  <a
                    href="https://coupalcranes.com/SK170_load-chart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 font-semibold uppercase tracking-wide hover:text-orange-900"
                  >
                    VIEW LOAD CHART
                  </a>
                </div>
                <p className="text-sm mt-2 px-4 max-w-[700px] mx-auto">
                  Boom length of up to 191 feet and can reach a maximum
                  freestanding height of up to approximately 223 feet. If
                  additional height is required, our cranes can be top climbed.
                </p>
              </div>
            </section>

            {/* Card 2 */}
            <section className="flex flex-col items-center text-center">
              <img
                src="./r2.webp"
                className="w-full h-[310px] object-cover"
                alt="Crane"
              />
              <div className="bg-black text-white w-full p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4">
                  <h1 className="text-2xl font-bold">SK180</h1>
                  <a
                    href="https://coupalcranes.com/SK10_load-chart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 font-semibold uppercase tracking-wide hover:text-orange-900"
                  >
                    VIEW LOAD CHART
                  </a>
                </div>
                <p className="text-sm mt-2 px-4 max-w-[700px] mx-auto">
                  Boom length of up to 196 feet and can reach a maximum
                  freestanding height of up to approximately 242 feet. If
                  additional height is required, our cranes can be top climbed.
                </p>
              </div>
            </section>
            {/* Card 3 */}
            <section className="flex flex-col items-center text-center">
              <img
                src="./r3.webp"
                className="w-full h-[310px] object-cover"
                alt="Crane"
              />
              <div className="bg-black text-white w-full p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4">
                  <h1 className="text-2xl font-bold">SK200</h1>
                  <a
                    href="https://coupalcranes.com/SK200_load-chart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 font-semibold uppercase tracking-wide hover:text-orange-900"
                  >
                    VIEW LOAD CHART
                  </a>
                </div>
                <p className="text-sm mt-2 px-4 max-w-[700px] mx-auto">
                  Boom length of up to 180’-6” and can reach a maximum
                  freestanding height of up to approximately 242 feet. If
                  additional height is required, our cranes can be top climbed.
                </p>
              </div>
            </section>

            {/* Card 4*/}
            <section className="flex flex-col items-center text-center">
              <img
                src="./r4.webp"
                className="w-full h-[310px] object-cover"
                alt="Crane"
              />
              <div className="bg-black text-white w-full p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4">
                  <h1 className="text-2xl font-bold">SK400</h1>
                  <a
                    href="https://coupalcranes.com/SK400_load-chart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 font-semibold uppercase tracking-wide hover:text-orange-900"
                  >
                    VIEW LOAD CHART
                  </a>
                </div>
                <p className="text-sm mt-2 px-4 max-w-[700px] mx-auto">
                  Boom length of up to 244’-6” and can reach a maximum
                  freestanding height of up to approximately 280 feet. If
                  additional height is required, our cranes can be top climbed.
                </p>
              </div>
            </section>

            <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center mt-8 gap-2">
              <h1 className="font-bold text-xl md:text-2xl">
                WANT TO PURCHASE A TOWER CRANE
              </h1>
              <p className="font-bold text-xl md:text-2xl text-gray-400">
                If you’re in the market to purchase a tower crane, please
                <span>contact us at</span>
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-xl md:text- xl mt-10
            hover:border-b hover:border-orange-500 hover:text-black"
              >
                info@coupalcranes.com
              </a>
            </div>
          </div>
          <div className="relative z-10 mt-20">
            <img
              src="./h1.jpg"
              className="w-full h-[510px] object-cover"
              alt=""
            />
          </div>
          {/* Centered Content Box */}
          {/* <div className="inset-0 flex items-center justify-center px-4 mt-[-50px]"> */}
          <div className="relative z-10 mt-[-200px] flex items-center justify-center px-4">
            <div className="bg-white bg-opacity-95 p-8 shadow-md max-w-2xl text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
                A HISTORY OF EXCELLENCE
              </h1>
              <p className="text-sm md:text-xl leading-relaxed text-gray-500 opacity-100">
                Established in 1974 by Val Coupal, a crane operator by trade,
                and his wife Irene, Coupal Climbing Cranes began with an
                opportunity. Seeing potential, as there were few independent
                crane owners in the industry, Val and Irene took a chance and
                purchased their first tower crane.
                <br />
                <br />
                For the first few years, through hard work and determination,
                Val and Irene ran our company themselves. Irene oversaw daily
                tasks while Val operated the crane by day, and tended to repairs
                and maintenance at night. In the first two years, they built a
                solid reputation of reliability allowing them to expand our
                business. Soon after, their sons, Gary and Remi joined the team.
                Today the brothers run our company and uphold the principle of
                providing excellent service that Coupal Climbing Cranes was
                founded on.
                <br />
                <br />
                Now, 50 years later, Coupal Climbing Cranes is one of the
                largest tower crane rental companies in the lower mainland with
                a fleet of over 20 cranes. Our cranes have been involved in many
                projects helping shape Vancouver’s skyline including BC
                Children’s Hospital, Olympic Village, the development of False
                Creek, and BC Place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="scroll-mt-20 scroll-smooth">
        {/* Divider */}
        <div className="w-full flex justify-center mt-6">
          <div className="w-[90%] border-b border-gray-300"></div>
        </div>
        {/* Heading and Description */}
        <div className="w-full flex flex-col justify-center items-center text-center mt-6 px-4">
          <h1 className="text-xl font-bold text-gray-500 mb-2">
            THE
            <br />
            <span className="text-black font-extrabold text-3xl sm:text-4xl">
              COUPAL TEAM
            </span>
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-500 max-w-2xl">
            Our highly qualified team is dedicated to provide exceptional
            service, industry expertise, and friendly customer relations.
          </p>
        </div>
        {/* Team Members */}
        <div className="w-full flex justify-center mt-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* Remi */}
            <div className="flex flex-col items-center text-center">
              <img
                src="./remi.webp"
                className="w-full h-[310px] object-cover rounded-lg shadow-lg"
                alt="Remi Coupal"
              />
              <h2 className="text-xl font-bold mt-2">Remi Coupal</h2>
              <p className="text-sm text-gray-500">Owner / General Manager</p>
              <a
                className="text-orange-500 hover:text-orange-400"
                href="mailto:remi@coupalcranes.com"
              >
                remi@coupalcranes.com
              </a>
              <a
                className="text-orange-500 hover:text-orange-400"
                href="tel:+16046574042"
              >
                (604) 657-4042
              </a>
            </div>

            {/* Gary */}
            <div className="flex flex-col items-center text-center">
              <img
                src="./gary.webp"
                className="w-full h-[310px] object-cover rounded-lg shadow-lg"
                alt="Gary Coupal"
              />
              <h2 className="text-xl font-bold mt-2">Gary Coupal</h2>
              <p className="text-sm text-gray-500">
                Owner / Operations Manager
              </p>
              <a
                className="text-orange-500 hover:text-orange-400"
                href="mailto:gary@coupalcranes.com"
              >
                gary@coupalcranes.com
              </a>
              <a
                className="text-orange-500 hover:text-orange-400"
                href="tel:+16046448692"
              >
                (604) 644-8692
              </a>
            </div>

            {/* Stephanie */}
            <div className="flex flex-col items-center text-center">
              <img
                src="./step.webp"
                className="w-full h-[310px] object-cover rounded-lg shadow-lg"
                alt="Stephanie Sochting"
              />
              <h2 className="text-xl font-bold mt-2">Stephanie Sochting</h2>
              <p className="text-sm text-gray-500">
                Office Manager / Controller
              </p>
              <a
                className="text-orange-500 hover:text-orange-400"
                href="mailto:stephanie@coupalcranes.com"
              >
                stephanie@coupalcranes.com
              </a>
            </div>
          </div>
        </div>
        {/* Work With Us Section */}
        <div className="relative w-full mt-12 bg-black h-auto py-12 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-2xl font-bold mb-2">Want To Work With Us?</h1>
          <p className="mb-2 max-w-xl">
            We’re always looking for hardworking, dedicated people to join our
            team. Please email your resume to:
          </p>
          <a
            className="text-orange-500 hover:text-orange-400"
            href="mailto:info@coupalcranes.com"
          >
            info@coupalcranes.com
          </a>
        </div>
        {/* Testimonial Section */}
        <div className="relative w-full">
          <img
            className="w-full object-cover h-[500px] sm:h-auto"
            src="./rd1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <img
              src="mn.jpg"
              className="mb-4 w-24 h-24 object-cover border-4 border-white shadow-lg rounded-full"
              alt=""
            />
            <p className="max-w-2xl text-white bg-black bg-opacity-70 p-6 text-sm sm:text-lg font-extrabold leading-relaxed rounded-md">
              I first worked with Coupal Cranes in 1979. After 37 years, they
              are still the best tower crane company in the lower mainland. We
              deal exclusively with them. Their erections and dismantles are
              always professional and safe. Their support means we are never
              without a crane for more than a few hours—and breakdowns rarely
              occur with carefully prepared equipment before it arrives on site.
              We look forward to many more years of successful business
              together.
            </p>
            <h1 className="text-lg md:text-2xl text-white font-bold mt-4">
              Ron Karras
              <br />
              <span className="text-lg md:text-xl font-bold text-gray-300">
                Owner, RMG Formwork
              </span>
            </h1>
          </div>
        </div>
        <div>
          <div id="contact" className="scroll-mt-20 scroll-smooth">
            {/* Contact CTA */}
            <div className="relative w-full mt-12 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-2xl font-bold mb-2">
                Need To Rent A Tower Crane?
              </h1>
              <p className="mb-2 max-w-xl">
                We are standing by, ready to assist you and help you determine
                which crane will be the best fit for your project needs.
              </p>
              <button
                className="border py-2 px-6 mt-4 mb-16 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-500 transition duration-300"
                onClick={() => setContactModalOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="location relative w-full h-[500px]">
            {/* Background Map (fixed height) */}
            <img
              src="./map2.jpg"
              alt="Base Map"
              className="w-full h-full object-cover"
            />

            {/* Overlay Map (centered) */}
            <div className="absolute inset-0 flex justify-center  items-center pointer-events-none">
              <div className="bg-black flex flex-col bg-opacity-60 px-6 py-3 shadow-sm text-center gap-3">
                <h1 className="text-orange-400 text-sm md:text-xl">
                  405-1952 Kingsway Ave, Port Coquitlam, BC V3C 6C2 (604)
                  942-7942 info@coupalcranes.com
                </h1>
                <p className="text-orange-400 text-sm md:text-xl">
                  © Coupal Climbing Cranes Ltd. Crafted by Form Meets Function &
                  Matt Farley
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
