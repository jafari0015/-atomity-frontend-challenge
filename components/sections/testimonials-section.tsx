import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Customers
            </span>
            <h2
              id="testimonials-heading"
              className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            >
              Trusted by leaders in Europe&rsquo;s digital future
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:pb-2">
            Regional governments and institutions use Opsera to keep control of
            critical infrastructure while cutting cloud cost.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
