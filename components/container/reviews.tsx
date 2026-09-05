import type { Review } from '@/types/portfolio';
import SectionTitle from '../shared/section-title';
import ReviewCard from '../shared/review-card';

type Props = {
  reviews: Review[];
};

const Reviews = ({ reviews }: Props) => {
  return (
    <section
      id="reviews"
      className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 border-b border-line/80 scroll-mt-20"
    >
      <SectionTitle title="Client Reviews" subtitle="Testimonials" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.role}`} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
