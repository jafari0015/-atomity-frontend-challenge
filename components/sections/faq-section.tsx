import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FAQS } from "@/lib/constants";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions, answered"
        />
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}
