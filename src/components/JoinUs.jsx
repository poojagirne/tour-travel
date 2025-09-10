import { Handshake, DollarSign, Lightbulb, Target } from "lucide-react";

const JoinUsSection = () => {
  const opportunities = [
    {
      title: "Partnership Opportunities",
      description:
        "Collaborate with us to expand our reach and impact across new regions and services.",
      icon: Handshake,
    },
    {
      title: "Investment Potential",
      description:
        "Join our growth story with competitive returns and meaningful social impact.",
      icon: DollarSign,
    },
    {
      title: "Innovation Pipeline",
      description:
        "Be part of our upcoming digital platforms and service expansions.",
      icon: Lightbulb,
    },
    {
      title: "Shared Vision",
      description:
        "Help us create a transportation network that supports sustainable development.",
      icon: Target,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Darunga Tours and Travels stands at the intersection of tourism
            excellence and transportation innovation. Our proven business model
            demonstrates consistent growth while making meaningful contributions
            to India's economy and environment.
          </p>
        </div>

        {/* Cards - Same look as Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100"
              >
                {/* Icon Circle */}
                <div className="bg-orange-100 p-5 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                  <Icon className="h-10 w-10 text-orange-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
