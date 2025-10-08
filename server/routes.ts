import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { insertReservationSchema } from "@shared/schema";

// Configure multer for image uploads
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: uploadStorage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Create reservation with optional photo upload
  app.post('/api/reservations', upload.single('photo'), async (req, res) => {
    try {
      const reservationData = {
        date: req.body.date,
        time: req.body.time,
        name: req.body.name,
        phone: req.body.phone,
        school: req.body.school,
        studentId: req.body.studentId,
        email: req.body.email,
        location: req.body.location,
        priceRange: req.body.priceRange,
        service: req.body.service,
        additionalNotes: req.body.additionalNotes || null,
        photoUrl: req.file ? `/uploads/${req.file.filename}` : null,
      };

      // Validate with Zod
      const validated = insertReservationSchema.parse(reservationData);
      
      const reservation = await storage.createReservation(validated);
      res.json(reservation);
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(400).json({ error: 'Failed to create reservation' });
    }
  });

  // Get all reservations
  app.get('/api/reservations', async (req, res) => {
    try {
      const reservations = await storage.getAllReservations();
      res.json(reservations);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      res.status(500).json({ error: 'Failed to fetch reservations' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
