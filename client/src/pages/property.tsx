import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { Property } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function PropertyPage() {
  const [, params] = useRoute("/property/:id");
  const { toast } = useToast();

  const { data: property, isLoading } = useQuery<Property>({
    queryKey: [`/api/properties/${params?.id}`],
  });

  const handleInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await apiRequest("POST", "/api/inquiries", {
        propertyId: Number(params?.id),
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      });
      
      toast({
        title: "Success",
        description: "Your inquiry has been sent. We'll contact you soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!property) return <div>Property not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyGallery images={property.images} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-2xl text-primary mb-4">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground mb-6">{property.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>{property.location}</p>
            </div>
            <div>
              <h3 className="font-semibold">Square Feet</h3>
              <p>{property.squareFeet.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-semibold">Bedrooms</h3>
              <p>{property.bedrooms}</p>
            </div>
            <div>
              <h3 className="font-semibold">Bathrooms</h3>
              <p>{property.bathrooms}</p>
            </div>
          </div>

          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {property.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Schedule Viewing</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule a Viewing</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleInquiry} className="space-y-4">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" placeholder="Phone Number" required />
                <Textarea
                  name="message"
                  placeholder="Message"
                  className="min-h-[100px]"
                  required
                />
                <Button type="submit" className="w-full">
                  Send Request
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
