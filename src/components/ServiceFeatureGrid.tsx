interface FeatureGridProps {
  features: string[];
  benefits: string[];
  technologies: string[];
  customization: string[];
}

export const ServiceFeatureGrid = ({ features, benefits, technologies, customization }: FeatureGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="neobrutalism bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="neobrutalism bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="neobrutalism bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Technologies</h2>
        <ul className="space-y-3">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="neobrutalism bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Customization</h2>
        <ul className="space-y-3">
          {customization.map((custom, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
              {custom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};