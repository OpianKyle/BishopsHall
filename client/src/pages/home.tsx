import { useQuery } from "@tanstack/react-query";
import { PropertyCard } from "@/components/PropertyCard";
import type { Property } from "@shared/schema";

export default function Home() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  return (
    <div>
      {/* Hero Video Section */}
      <div className="relative h-screen">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        >
          <source src="/luxury-estate.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198"
              alt="Luxury Interior"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Luxury is a state of mind</h2>
            <p className="text-muted-foreground leading-relaxed">
              Experience unparalleled luxury in our carefully curated collection of premium properties. 
              Each estate is selected for its exceptional quality, stunning location, and world-class amenities.
              Your journey to extraordinary living begins here.
            </p>
            <div className="flex gap-4">
              <a href="/tour" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                View Virtual Tour
              </a>
              <a href="/properties" className="inline-flex items-center justify-center rounded-md border border-input px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Browse Properties
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12">Featured Properties</h2>
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties?.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}