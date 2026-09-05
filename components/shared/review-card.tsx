import { Star } from 'lucide-react';
import type { Review } from '@/types/portfolio';

export type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="p-6 bg-white/70 border border-line/80 rounded-none flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center space-x-1 text-amber-500 mb-4">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={`w-3 h-3 ${index < review.rating ? 'fill-amber-500' : ''}`}
            />
          ))}
        </div>
        <p className="text-xs sm:text-[13px] text-ink leading-relaxed italic mb-6">
          “{review.quote}”
        </p>
      </div>

      <div className="flex items-center space-x-3 pt-4 border-t border-line/60">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-playfair font-bold text-xs">
          {review.name
            .split(' ')
            .map((part) => part[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <div className="font-jakarta font-bold text-xs uppercase text-ink">
            {review.name}
          </div>
          <div className="text-[10px] text-muted">{review.role}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
