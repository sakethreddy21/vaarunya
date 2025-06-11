import React from 'react';
import { Globe, Award, Users, Truck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-secondary mb-6">About Vaarunya</h2>
            <p className="text-md text-gray-700 leading-relaxed">
              At Vaarunya Global Exim, we don't just facilitate trade we build lasting partnerships that drive mutual growth and success. Our transparent approach, competitive pricing, and unwavering commitment to client satisfaction have made us the trusted choice for businesses across continents.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
            We bridge continents by connecting verified suppliers with serious buyers worldwide, making global trade accessible, secure, and rewarding for businesses of all sizes. We partner exclusively with certified farmers, established manufacturers, and reputable wholesalers who share our commitment to excellence. Every product in our portfolio undergoes rigorous quality checks. From the first inquiry to final delivery, our experienced trade specialists provide end-to-end support, ensuring every transaction exceeds your expectations. 
            </p>
            
         
          </div>
          
          <div className="lg:order-first">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="About Varunaya"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20 text-center lg:text-left">
  <p className="text-2xl italic text-primary font-medium flex justify-center">
    "Join us as we shape the future of global trade — one successful transaction at a time."
  </p>
</div>

        {/* Why Varunaya Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Varunaya?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, reliability, and innovation to deliver exceptional export solutions
            that drive your business forward in the global marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Globe,
              title: 'Global Network',
              description: 'Extensive worldwide connections enabling seamless international trade across multiple continents.'
            },
            {
              icon: Award,
              title: 'Quality Assurance',
              description: 'Rigorous quality control processes ensuring every product meets international standards.'
            },
            {
              icon: Users,
              title: 'Flexible Pricing Models',
              description: 'Experienced professionals dedicated to providing personalized service and support.'
            },
            {
              icon: Truck,
              title: 'Reliable Logistics',
              description: 'Advanced logistics network ensuring timely and secure delivery of your products.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:bg-opacity-20 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;