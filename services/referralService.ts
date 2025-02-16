class ReferralService {
    constructor(prisma, emailService) {
        this.prisma = prisma;
        this.emailService = emailService;
    }

    async createReferral(referralData) {
        try {
            const referral = await this.prisma.referral.create({
                data: referralData,
            });
            await this.emailService.sendReferralEmail(referral);
            return referral;
        } catch (error) {
            throw new Error('Error creating referral: ' + error.message);
        }
    }

    async getReferralById(referralId) {
        try {
            const referral = await this.prisma.referral.findUnique({
                where: { id: referralId },
            });
            return referral;
        } catch (error) {
            throw new Error('Error fetching referral: ' + error.message);
        }
    }

    async updateReferral(referralId, updateData) {
        try {
            const updatedReferral = await this.prisma.referral.update({
                where: { id: referralId },
                data: updateData,
            });
            return updatedReferral;
        } catch (error) {
            throw new Error('Error updating referral: ' + error.message);
        }
    }

    async deleteReferral(referralId) {
        try {
            await this.prisma.referral.delete({
                where: { id: referralId },
            });
        } catch (error) {
            throw new Error('Error deleting referral: ' + error.message);
        }
    }
}

export default ReferralService;