import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePaystackPayment } from "react-paystack";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email is required").max(255),
  address: z.string().trim().min(5, "Delivery address is required").max(500),
  createAccount: z.boolean().optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const PAYSTACK_PUBLIC_KEY = "pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckoutForm | null>(null);

  const form = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      createAccount: false,
    },
  });

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const onSuccess = () => {
    toast.success("Payment successful! Your order has been placed.");
    clearCart();
    navigate("/");
  };

  const onClose = () => {
    toast.info("Payment cancelled.");
  };

  const PaystackButton = ({ email }: { email: string }) => {
    const config = {
      reference: `ATL-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      email,
      amount: totalPrice * 100, // Paystack uses kobo
      publicKey: PAYSTACK_PUBLIC_KEY,
      currency: "NGN",
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: formData?.fullName || "",
          },
          {
            display_name: "Phone",
            variable_name: "phone",
            value: formData?.phone || "",
          },
          {
            display_name: "Delivery Address",
            variable_name: "delivery_address",
            value: formData?.address || "",
          },
        ],
      },
    };

    const initializePayment = usePaystackPayment(config);

    return (
      <Button
        type="button"
        className="w-full gradient-brand text-primary-foreground font-display tracking-wider py-7 text-lg"
        onClick={() => initializePayment({ onSuccess, onClose })}
      >
        Proceed to Payment →
      </Button>
    );
  };

  const onSubmit = (data: CheckoutForm) => {
    setFormData(data);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate("/shop")}>Continue Shopping</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        {/* Order Summary */}
        <div className="bg-card shadow-product p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-display font-bold gradient-brand-text mb-6">
            Order Summary ({totalItems} {totalItems === 1 ? "item" : "items"})
          </h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between py-2">
                <span className="text-sm font-body text-foreground">
                  {item.product.name} x {item.quantity}
                </span>
                <span className="text-sm font-display font-medium text-foreground">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-4 pt-4">
            <p className="text-lg font-display font-bold gradient-brand-text">
              Total: {formatPrice(totalPrice)}
            </p>
          </div>
        </div>

        {/* Customer Details Form */}
        <div className="bg-card shadow-product p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          className="bg-secondary/50 border-border h-12 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          className="bg-secondary/50 border-border h-12 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="bg-secondary/50 border-border h-12 font-body"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Delivery Address"
                        className="bg-secondary/50 border-border min-h-[120px] font-body"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="createAccount"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <span className="text-sm font-body text-muted-foreground">
                      Create account for faster checkout next time? (Optional)
                    </span>
                  </FormItem>
                )}
              />

              {!formData ? (
                <Button
                  type="submit"
                  className="w-full gradient-brand text-primary-foreground font-display tracking-wider py-7 text-lg"
                >
                  Proceed to Payment →
                </Button>
              ) : (
                <PaystackButton email={formData.email} />
              )}
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
