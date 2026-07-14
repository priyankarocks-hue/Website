import Button from "@/components/ui/Button";
import { STRIPE_PAYMENT_LINK } from "@/lib/site";

// Reads the Stripe Payment Link from lib/site.ts. Until it's set,
// enrolment routes to the contact form instead of a dead checkout.
export default function StripeCheckoutButton({ label = "Enroll now" }: { label?: string }) {
  if (!STRIPE_PAYMENT_LINK) {
    return (
      <Button href="/contact" className="w-full sm:w-auto">
        Ask about enrolment
      </Button>
    );
  }

  return (
    <Button href={STRIPE_PAYMENT_LINK} external className="w-full sm:w-auto">
      {label}
    </Button>
  );
}
