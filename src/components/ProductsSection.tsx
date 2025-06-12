import { ArrowRight, Wheat, Milk, Coffee, Mountain, Beef, Fish, Apple, Palette, Flame ,  ShoppingCart, FileText, CheckCircle, Package, Truck, MapPin, ArrowDown} from 'lucide-react';
import agro from '../../product_categories_images/agro_commodities_logo.png';
import coffee from '../../product_categories_images/coffee_logo.png';
import dairy from '../../product_categories_images/dairy_pdts_logo.png';
import fruits from '../../product_categories_images/fruits_and_veg_logo.png'
import seafood from '../../product_categories_images/seafood_logo.png'
import spices from '../../product_categories_images/spices_logo.png'

const ProductsSection = () => {
  const productCategories = [
    {
      icon: Wheat,
      title: 'Agro-commodities',
      description: 'Premium quality agricultural products including grains, pulses, and raw materials for global markets.',
      image: agro  },
    {
      icon: Milk,
      title: 'Dairy Products',
      description: 'Fresh and processed dairy products meeting international quality standards and certifications.',
      image: dairy   },
    {
      icon: Flame,
      title: 'Spices',
      description: 'Authentic Indian spices and seasonings that bring flavor and aroma to cuisines worldwide.',
      image: spices },
    {
      icon: Coffee,
      title: 'Coffee & Tea',
      description: 'Premium coffee beans and tea leaves sourced from the finest plantations across India.',
      image: coffee  },
    {
      icon: Mountain,
      title: 'Marbles',
      description: 'Exquisite natural marble and stone products for construction and decorative applications.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Beef,
      title: 'Meat',
      description: 'High-quality meat products processed under strict hygiene standards for international markets.',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Fish,
      title: 'Seafood',
      description: 'Fresh and frozen seafood products from coastal regions, maintaining cold chain integrity.',
      image: seafood   },
    {
      icon: Apple,
      title: 'Fruits and Vegetables',
      description: 'Farm-fresh fruits and vegetables packed with nutrients and delivered with optimal freshness.',
      image: fruits   },
    {
      icon: Palette,
      title: 'Handicrafts',
      description: 'Traditional Indian handicrafts and artisanal products showcasing rich cultural heritage.',
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];


  const processingSteps = [
    {
      step: 1,
      icon: ShoppingCart,
      title: 'Receiving Customer Order',
      description: 'We carefully review and analyze your product requirements, specifications, and delivery expectations.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Quotation',
      description: 'Detailed quotation with competitive pricing, terms, and delivery timeline is prepared and shared.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50'
    },
    {
      step: 3,
      icon: CheckCircle,
      title: 'Order Confirmation & Contract Signing',
      description: 'Upon agreement, we formalize the partnership with comprehensive contracts and order confirmation.',
      color: 'bg-green-500',
      lightColor: 'bg-green-50'
    },
    {
      step: 4,
      icon: Package,
      title: 'Purchasing & Packaging Inspection',
      description: 'Quality sourcing from trusted suppliers followed by rigorous packaging and quality inspection.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50'
    },
    {
      step: 5,
      icon: Truck,
      title: 'Shipping & Customs Clearance',
      description: 'Professional handling of shipping logistics and customs documentation for smooth transit.',
      color: 'bg-red-500',
      lightColor: 'bg-red-50'
    },
    {
      step: 6,
      icon: MapPin,
      title: 'Final Delivery to Customer',
      description: 'Timely delivery to your destination with complete tracking and delivery confirmation.',
      color: 'bg-teal-500',
      lightColor: 'bg-teal-50'
    }
  ];

    return (
        <section id="products" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Our Product Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of premium export products, carefully sourced and 
                quality-assured to meet international standards and exceed customer expectations.
              </p>
            </div>
    
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {productCategories.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-lg flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
    
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <button className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-yellow-600 transition-colors duration-300 group/btn">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Product Processing Steps - Theme Consistent */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-secondary mb-6">Order Processing Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Experience our streamlined 6-step process that ensures quality, transparency, 
                  and timely fulfillment of your export requirements.
                </p>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
    
              {/* Enhanced Processing Steps - Theme Consistent */}
              <div className="relative max-w-6xl mx-auto">
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-3 gap-8">
                    {processingSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Step Card */}
                        <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                          {/* Subtle Background Effect */}
                          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                          
                          {/* Step Number Badge */}
                          <div className="absolute -top-4 -right-4 z-10">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                              <span className="text-white font-bold text-lg">{step.step}</span>
                            </div>
                          </div>
    
                          <div className="p-8">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:bg-opacity-20 transition-all duration-300">
                              <step.icon className="w-8 h-8 text-primary" />
                            </div>
    
                            {/* Content */}
                            <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
    
                          {/* Hover Effect Border */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
    
                        {/* Connecting Arrow */}
                        {index < processingSteps.length - 1 && (index + 1) % 3 !== 0 && (
                          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                            <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        )}
    
                        {/* Down Arrow for Row Break */}
                        {(index + 1) % 3 === 0 && index < processingSteps.length - 1 && (
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                              <ArrowDown className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary opacity-30"></div>
    
                    <div className="space-y-12">
                      {processingSteps.map((step, index) => (
                        <div key={index} className="relative flex items-start">
                          {/* Timeline Node */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-primary">
                              <span className="text-xs font-bold text-primary">{step.step}</span>
                            </div>
                          </div>
    
                          {/* Content Card */}
                          <div className="ml-6 flex-1">
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1 border border-gray-100">
                              <h3 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors duration-300">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Process Completion Banner */}
             
            </div>
    
            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Ready to Explore Our Products?
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Get detailed information about our product specifications, certifications, 
                  and export capabilities. Our team is ready to assist you with your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Request Product Catalog
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default ProductsSection;
