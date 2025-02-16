import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { emailService } from "../services/emailService";

const prisma = new PrismaClient();

export class ReferralController {
  async createReferral(req: Request, res: Response) {
    try {
      const referralData = req.body;
      const newReferral = await prisma.referral.create({
        data: referralData,
      });

      // Send emails
      await emailService.sendReferralEmail(referralData);

      res.status(201).json({
        success: true,
        message: "Referral submitted successfully",
        data: newReferral,
      });
    } catch (error) {
      console.error("Error creating referral:", error);
      res.status(500).json({
        success: false,
        error: "Failed to create referral" + error,
      });
    }
  }

  async getReferrals(req: Request, res: Response) {
    try {
      const referrals = await prisma.referral.findMany();
      res.json(referrals);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch referrals" });
    }
  }
}

export const referralController = new ReferralController();
