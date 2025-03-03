import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square } from "lucide-react";
import type { Property } from "@shared/schema";
import { Link } from "wouter";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/property/${property.id}`}>
      <a className="block hover:opacity-90 transition-opacity">
        <Card className="overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-4 right-4">
              ${property.price.toLocaleString()}
            </Badge>
          </div>
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold">{property.title}</h3>
            <p className="text-muted-foreground">{property.location}</p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                <span>{property.squareFeet.toLocaleString()} sq ft</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
