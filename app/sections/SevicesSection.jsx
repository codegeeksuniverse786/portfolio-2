import ServicesCard from '../components/ServicesCard';
import { services } from '../utils/dataBase';

function SevicesSection() {
  return (
    <section className="max-w-6xl mx-auto md:my-[6rem]" id="services">
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        Services
      </h2>
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        {' '}
        I offer a range of UI/UX design services that prioritize
        user-friendly interfaces and visually striking designs. From
        web and mobile apps to branding solutions.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            imgSrc={service.imgSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default SevicesSection;
