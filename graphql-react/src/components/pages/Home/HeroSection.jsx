export default function HeroSection() {
	return (
		<section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl">
            Explore a wide variety of books across genres. Whether you’re
            into fiction, science, or history, we have something for everyone.
            Borrow books with just a click!
          </p>
          <a
            href="/borrow"
            className="inline-block px-8 py-3 text-lg font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Borrow Now
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="hidden  -mt-10 items-center justify-center md:flex">
          <img
            src="/banner.png" // Replace with your banner image URL
            alt="Books Banner"
            className=" h-auto rounded-xl w-[300px] object-cover"
          />
        </div>
      </div>
    </section>
	)
}
