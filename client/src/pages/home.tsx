import { useQuery } from "@tanstack/react-query";
import { PropertyCard } from "@/components/PropertyCard";
import type { Property } from "@shared/schema";

export default function Home() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative h-screen">
        <img 
          src="/client/assets/image04.jpg"
          alt="Luxury Villa Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Introduction Section */}
      <div id="intro" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/client/assets/image04.jpg"
                alt="Villa Interior"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Luxury is a state of mind</h2>
              <p className="text-muted-foreground leading-relaxed">
                Skydance villa lays sprawled out in splendour on the highest hills of Constantia, 
                a well-to-do suburb next to Kirstenbosch Gardens. The heart feels at home here. 
                Waking up to a vine-scented breeze. The sound of your loved-ones echoing the joy 
                of the morning. Bare toes cushioned in soft grass then dipped into a refreshing pool.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.youtube.com/watch?v=-OnScNR8idU" 
                  target="_blank" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Watch Video
                </a>
                <a 
                  href="https://goo.gl/C8AWiS" 
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md border border-input px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  View 360° Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Villa Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: "/img/icon-pool.png", label: "Swimming Pool" },
              { icon: "/img/icon-entertainment.png", label: "Entertainment Room" },
              { icon: "/img/icon-gym.png", label: "Gym" },
              { icon: "/img/icon-wifi.png", label: "Wifi" },
              { icon: "/img/icon-safe.png", label: "Electronic Safe" },
            ].map((amenity) => (
              <div key={amenity.label} className="text-center">
                <img src={amenity.icon} alt={amenity.label} className="h-12 w-12 mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12">Featured Properties</h2>
          {isLoading ? (
            <div className="text-center">Loading properties...</div>
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