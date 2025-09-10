import { Truck, Target, Network, Shield } from "lucide-react";
import logisticsImage from "../assets/logistics-fleet.jpg";

const Logistics = () => {
  const features = [
    {
      icon: Target,
      title: "Premium Service Quality",
      description: "Industry-leading delivery reliability and customer satisfaction",
    },
    {
      icon: Network,
      title: "Optimized Logistics Network",
      description: "Advanced route planning and coordination across regions",
    },
    {
      icon: Shield,
      title: "Extensive Transportation Fleet",
      description: "Diverse vehicles equipped for various cargo needs",
    },
  ];

  return (
    <section id="logistics" className="py-20 bg-gray-50">
      <div className="container  mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Transportation{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our transportation division operates with military precision, utilizing advanced technology to track 
              shipments and optimize delivery routes. This sophisticated approach has enabled us to reduce delivery 
              times by an average of 22% compared to industry standards.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fleet Performance Box */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="font-semibold text-gray-800">Fleet Performance</span>
              </div>
              <p className="text-gray-600">
                By maintaining a diverse fleet of vehicles and implementing rigorous quality control measures, 
                we ensure that goods arrive at their destination safely and on schedule, regardless of the 
                challenges posed by India's varied terrain and infrastructure.
              </p>
            </div>
          </div>

          {/* Image with Badges */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={logisticsImage}
                alt="Logistics Operations"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/90 text-secondary text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    22% Faster Delivery
                  </span>
                  <span className="bg-white/90 text-secondary text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    99.5% Reliability
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold">Advanced Fleet Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
