import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/properties", async (_req, res) => {
    const properties = await storage.getProperties();
    res.json(properties);
  });

  app.get("/api/properties/:id", async (req, res) => {
    const property = await storage.getProperty(Number(req.params.id));
    if (!property) {
      res.status(404).json({ message: "Property not found" });
      return;
    }
    res.json(property);
  });

  app.get("/api/properties/search", async (req, res) => {
    const query = req.query.q as string;
    const properties = await storage.searchProperties(query || "");
    res.json(properties);
  });

  app.post("/api/inquiries", async (req, res) => {
    const result = insertInquirySchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Invalid inquiry data" });
      return;
    }
    
    const inquiry = await storage.createInquiry(result.data);
    res.status(201).json(inquiry);
  });

  const httpServer = createServer(app);
  return httpServer;
}
