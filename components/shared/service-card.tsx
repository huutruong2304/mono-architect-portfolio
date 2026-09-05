import type { LucideIcon } from 'lucide-react';
import type { Service } from '@/types/portfolio';

export type ServiceCardProps = {
  service: Service;
  index: number;
  icon: LucideIcon;
};

const ServiceCard = ({ service, index, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-white/70 border border-line/80 hover:border-primary hover:shadow-lg transition-all group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-fira text-xs text-muted group-hover:text-primary font-semibold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        </div>
        <h3 className="font-jakarta font-bold text-base text-ink uppercase mb-3 tracking-wide">
          {service.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed mb-6">{service.description}</p>
      </div>
      <div className="pt-4 border-t border-line/60 text-[10px] font-fira text-muted flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span key={tag} className="bg-neutral-100 px-2 py-0.5 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
