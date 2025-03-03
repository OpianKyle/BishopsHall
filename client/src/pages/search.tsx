import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchFilters } from "@/components/SearchFilters";
import { PropertyCard } from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import type { Property } from "@shared/schema";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 10000000],
    bedrooms: "any"
  });

  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties/search", searchQuery],
  });

  const filteredProperties = properties?.filter(property => {
    const matchesLocation = filters.location === "" || 
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesPrice = property.price >= filters.priceRange[0] && 
      property.price <= filters.priceRange[1];
    
    const matchesBedrooms = filters.bedrooms === "any" || 
      property.bedrooms >= parseInt(filters.bedrooms);

    return matchesLocation && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Search Section */}
      <div className="bg-primary/5 rounded-xl p-8 mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Find Your Dream Property
        </h1>
        <div className="max-w-2xl mx-auto relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input 
            className="pl-10 h-12"
            placeholder="Search by location or property name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <SearchFilters 
              onFilterChange={(newFilters) => {
                setFilters(prev => ({ ...prev, ...newFilters }));
              }} 
            />
          </div>
        </div>

        {/* Property Grid */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="text-center text-muted-foreground">
              Loading properties...
            </div>
          ) : filteredProperties?.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No properties found matching your criteria
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {filteredProperties?.length} Properties Found
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties?.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
