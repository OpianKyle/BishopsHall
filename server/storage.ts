import { type Property, type InsertProperty, type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  searchProperties(query: string): Promise<Property[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private inquiries: Map<number, Inquiry>;
  private currentPropertyId: number;
  private currentInquiryId: number;

  constructor() {
    this.properties = new Map();
    this.inquiries = new Map();
    this.currentPropertyId = 1;
    this.currentInquiryId = 1;
    this.initializeProperties();
  }

  private initializeProperties() {
    const sampleProperties: InsertProperty[] = [
      {
        title: "Luxury Villa with Ocean View",
        description: "Stunning contemporary villa with panoramic ocean views",
        price: 5500000,
        location: "Malibu, CA",
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 6500,
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
          "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c"
        ],
        features: ["Pool", "Wine Cellar", "Home Theater", "Smart Home"],
        virtualTourUrl: "https://example.com/tour/1",
        coordinates: { lat: 34.0259, lng: -118.7798 }
      },
      // Add more sample properties here
    ];

    sampleProperties.forEach(prop => {
      const property: Property = { ...prop, id: this.currentPropertyId++ };
      this.properties.set(property.id, property);
    });
  }

  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async searchProperties(query: string): Promise<Property[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.properties.values()).filter(property => 
      property.title.toLowerCase().includes(lowercaseQuery) ||
      property.location.toLowerCase().includes(lowercaseQuery)
    );
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const newInquiry: Inquiry = { ...inquiry, id: this.currentInquiryId++ };
    this.inquiries.set(newInquiry.id, newInquiry);
    return newInquiry;
  }
}

export const storage = new MemStorage();
