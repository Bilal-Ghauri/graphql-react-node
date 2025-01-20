export default function AboutSection() {
    return (
      <section className="bg-white text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading and Description */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            About Our Library
          </h2>
          <p className="text-lg md:text-xl">
            Welcome to our digital library platform! Our mission is to make books accessible to everyone, enabling easy access to a wide range of literature. Explore, borrow, and enjoy reading at your convenience.
          </p>
        </div>

        {/* Image and Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Image */}
          <div className="hidden  items-center justify-center  md:flex">
            <img
              src="/about-us-home.png" // Replace with your desired image URL
              alt="Library"
              className="w-5/6 h-auto rounded-xl  object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">
              Why Choose Our Library?
            </h3>
            <p className="text-lg md:text-xl text-gray-800">
              We offer a diverse collection of books across genres. From classic novels to the latest bestsellers, our collection caters to all types of readers. Our easy-to-use platform allows you to borrow books effortlessly, ensuring a seamless reading experience.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Wide variety of books across different genres.</li>
              <li>Seamless borrowing process with quick access.</li>
              <li>Responsive platform designed for all devices.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <a
            href="/borrow"
            className="inline-block px-8 py-3 text-lg font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Start Borrowing Now
          </a>
        </div>
      </div>
    </section>
    );
  }
  