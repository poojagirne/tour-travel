import { Camera, Mountain, Calendar } from "lucide-react";
import culturalImage from "../assets/cultural-heritage.jpg";
import natureImage from "../assets/nature-expedition.jpg";

const Tourism = () => {
  const tourTypes = [
    {
      icon: Camera,
      title: "Cultural Heritage Tours",
      description:
        "Immerse yourself in India's rich historical tapestry through carefully curated visits to iconic monuments, ancient temples, and living cultural traditions. Our expert guides provide context and stories that bring these experiences to life.",
      image: culturalImage,
    },
    {
      icon: Mountain,
      title: "Nature Expeditions",
      description:
        "From the snow-capped Himalayas to Kerala's serene backwaters, our nature packages showcase India's diverse landscapes. These tours combine adventure activities with opportunities to witness unique ecosystems and wildlife.",
      image: natureImage,
    },
    {
      icon: Calendar,
      title: "Festival & Cultural Immersions",
      description:
        "Experience India's vibrant festivals and traditions firsthand. Our immersive cultural packages allow travelers to participate in celebrations, learn traditional crafts, and connect with local communities.",
      image: culturalImage,
    },
  ];

  return (
    <section id="tourism" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tourism Experiences:{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Discover India's Wonders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each travel package is thoughtfully designed to provide authentic experiences that cater to different interests, 
            group sizes, and comfort levels, ensuring memorable journeys for all our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tourTypes.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image with overlay and icon */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {tour.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {tour.description}
                  </p>
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
