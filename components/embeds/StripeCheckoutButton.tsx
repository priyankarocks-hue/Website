import Button from "@/components/ui/Button";

// PLACEHOLDER INTEGRATION — replace with your real Stripe Payment Link
// (Dashboard → Payment Links) before launch.
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_placeholder";

export default function StripeCheckoutButton({
  label = "Enroll now",
  href = STRIPE_PAYMENT_LINK,
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Button href={href} external className="w-full sm:w-auto">
      {label}
    </Button>
  );
}
