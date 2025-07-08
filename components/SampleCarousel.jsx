import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export const SampleCarousel = ({ samples, serviceType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSample, setSelectedSample] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % samples.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + samples.length) % samples.length);
  };

  const openSample = (sample) => {
    if (serviceType === 'web-design' && sample.url) {
      setSelectedSample(sample);
    }
  };

  const isVideo = (url) => {
    return url?.toLowerCase().endsWith('.mp4') || 
           url?.toLowerCase().endsWith('.webm') || 
           url?.toLowerCase().endsWith('.ogg');
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {samples.map((sample, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div 
                className="relative h-80 md:h-96 bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openSample(sample)}
              >
                {isVideo(sample.image) ? (
                  <video
                    src={sample.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  {serviceType === 'web-design' && sample.url && (
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">{sample.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute text-gray-600 left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute text-gray-600  right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {samples.map((sample, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex ? 'ring-4 ring-[#e6471f] ring-opacity-70' : 'opacity-70 hover:opacity-100'
            }`}
          >
            {isVideo(sample.image) ? (
              <video
                src={sample.image}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            ) : (
              <img
                src={sample.image}
                alt={sample.title}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {/* Web Design Preview Modal */}
      {selectedSample && serviceType === 'web-design' && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{selectedSample.title}</h3>
              <button
                onClick={() => setSelectedSample(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 rounded-xl p-4 mb-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-96 md:h-[500px]">
                    <iframe
                      src={selectedSample.url}
                      className="w-full h-full border-0"
                      title={selectedSample.title}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => window.open(selectedSample.url, '_blank')}
                  className="bg-[#e6471f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d63916] transition-colors duration-300"
                >
                  Visit Live Site
                </button>
                <button
                  onClick={() => setSelectedSample(null)}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};