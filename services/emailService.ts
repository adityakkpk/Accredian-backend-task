import { transporter } from '../config/email';

class EmailService {
    async sendReferralEmail(referralData: any) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: referralData.refereeEmail,
            subject: 'You have been referred!',
            html: `
                <h1>Hello ${referralData.refereeName}!</h1>
                <p>${referralData.referrerName} has referred you for the ${referralData.courseInterest} course.</p>
                <p>We'd love to have you join us!</p>
                <br/>
                <p>Best regards,</p>
                <p>Accrdian Team</p>
            `
        };

        try {
            console.log('Attempting to send email...');
            await transporter.sendMail(mailOptions);

            // Send confirmation email to referrer
            const referrerMailOptions = {
                from: process.env.EMAIL_USER,
                to: referralData.referrerEmail,
                subject: 'Referral Confirmation',
                html: `
                    <h1>Thank you for your referral!</h1>
                    <p>We have received your referral for ${referralData.refereeName}.</p>
                    <p>We'll keep you updated on their progress.</p>
                    <br/>
                    <p>Best regards,</p>
                    <p>Accrdian Team</p>
                `
            };

            await transporter.sendMail(referrerMailOptions);
            console.log('Email sent successfully');
            return true;
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }
    }
}

export const emailService = new EmailService();