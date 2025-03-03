import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilters({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  return (
    <div className="space-y-6 p-6 border rounded-lg">
      <div className="space-y-2">
        <Label>Location</Label>
        <Input
          placeholder="Enter location..."
          onChange={(e) => onFilterChange({ location: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Price Range</Label>
        <Slider
          defaultValue={[0, 1000000]}
          max={10000000}
          step={100000}
          onValueChange={(value) => onFilterChange({ priceRange: value })}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$10M+</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Bedrooms</Label>
        <Select onValueChange={(value) => onFilterChange({ bedrooms: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
