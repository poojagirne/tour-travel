import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      title: "Phone",
      details: "+91 98765 43210",
      subDetails: "+91 87654 32109",
      icon: Phone,
    },
    {
      title: "Email",
      details: "info@darungatours.com",
      subDetails: "support@darungatours.com",
      icon: Mail,
    },

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey with us? Whether you're planning a tour
            or need logistics solutions, our team is here to help you every step
            of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500 mb-6">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>

              <form className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                   <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                      <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    className="w-full p-3 border rounded-md min-h-[120px] focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                </div>

                {/* Message */}
            

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-600 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subDetails}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
