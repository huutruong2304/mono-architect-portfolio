import { CloudCog, CodeXml, Network, Server, type LucideIcon } from 'lucide-react';
import type { Service } from '@/types/portfolio';
import SectionTitle, { SectionDescription } from '../shared/section-title';
import ServiceCard from '../shared/service-card';

type Props = {
  services: Service[];
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  frontend: CodeXml,
  backend: Server,
  cloud: CloudCog,
  architecture: Network,
};

const Services = ({ services }: Props) => {
  return (
    <section
      id="services"
      className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 border-b border-line/80 scroll-mt-20"
    >
      <SectionTitle
        title="Services Offered"
        subtitle="Engineering Capabilities"
        rightElement={
          <SectionDescription
            content="
          From concept to production rollout, delivering battle-tested engineering across the entire software development lifecycle."
          />
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = SERVICE_ICONS[service.type] ?? CodeXml;
          return <ServiceCard key={service.title} service={service} index={index} icon={Icon} />;
        })}
      </div>
    </section>
  );
};

export default Services;
