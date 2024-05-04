import React from 'react';
import Layout from '../components/layouts/Layout';

const About = () => {
  return (
    <Layout>
      <div>
        <header className="py-8 bg-gray-800">
          <div className="container mx-auto">
            <div className="relative overflow-hidden h-[50vh]">
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path/to/your/image.jpg')",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">Your Title Here</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-center mb-8">Your subtitle or description here</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Call to Action
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-lg leading-relaxed">
                  {/* Insert your story text here */}
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="about-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional sections (Team, Mission, etc.) */}
      </div>
    </Layout>
  )
}

export default About;