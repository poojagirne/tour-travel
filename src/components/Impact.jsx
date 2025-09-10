import {
  Users,
  Briefcase,
  HeadphonesIcon,
  Building,
  TreePine,
  Leaf,
  Route,
  Zap
} from "lucide-react";

const Impact = () => {
  const employmentStats = [
    { icon: Briefcase, title: "Tour Operations", count: "50+" },
    { icon: Users, title: "Logistics & Transportation", count: "75+" },
    { icon: HeadphonesIcon, title: "Customer Service", count: "30+" },
    { icon: Building, title: "Administrative", count: "25+" },
    { icon: Users, title: "Local Guides & Partners", count: "20+" },
  ];

  const environmentalInitiatives = [
    {
      icon: Route,
      title: "Route Optimization",
      description:
        "Implementing AI-powered logistics planning to reduce fuel consumption by identifying the most efficient delivery routes, minimizing vehicle idle time and unnecessary mileage.",
    },
    {
      icon: Zap,
      title: "Fleet Modernization",
      description:
        "Gradually transitioning to fuel-efficient and alternative energy vehicles, including electric options for urban areas and biodiesel capabilities for long-haul transportation.",
    },
    {
      icon: TreePine,
      title: "Carbon Offset Programs",
      description:
        "Partnering with environmental organizations to support reforestation projects that compensate for our carbon footprint, with over 10,000 trees planted in the past year.",
    },
    {
      icon: Leaf,
      title: "Sustainable Tourism Practices",
      description:
        "Educating travelers on responsible tourism, minimizing single-use plastics, and supporting conservation efforts at popular destinations in our tour packages.",
    },
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Employment Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Employment Generation{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            At Darunga Tours and Travels, we're proud to be creating meaningful employment opportunities across multiple sectors. 
            Our growth has generated over 200 direct jobs and supports approximately 500 indirect positions through our partner network.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-20">
          {employmentStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mx-auto mb-3 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.count}</div>
                <div className="text-sm font-medium text-gray-700">{stat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Environmental Initiatives */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Environmental Sustainability{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our environmental initiatives have reduced our carbon emissions by 18% year-over-year, 
            demonstrating our commitment to sustainable business practices that protect India's natural heritage for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {environmentalInitiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-green-400 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-600">{initiative.description}</p>
              </div>
            );
          })}
        </div>

        {/* Economic Growth Section */}
      </div>
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Economic Growth{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contribution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business model creates a virtuous economic cycle that benefits multiple sectors of the Indian economy. 
              By attracting tourists to lesser-known destinations, we help distribute economic benefits beyond traditional tourism hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Tourism Revenue Generation",
                desc: "Bringing visitors to diverse destinations across India",
                bg: "bg-primary",
              },
              {
                icon: Building,
                title: "Local Business Support",
                desc: "Partnering with small enterprises and artisans",
                bg: "bg-secondary",
              },
              {
                icon: Route,
                title: "Supply Chain Enhancement",
                desc: "Improving goods movement efficiency nationwide",
                bg: "bg-primary",
              },
              {
                icon: Briefcase,
                title: "Tax Contribution",
                desc: "Generating substantial revenue for government initiatives",
                bg: "bg-secondary",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default Impact;
