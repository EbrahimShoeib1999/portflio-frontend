import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

/**
 * Sends an email using EmailJS.
 * Reads environment variables from import.meta.env:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendEmail(params: EmailParams): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }

  // Handle missing optional fields safely, and map to specified payload structure
  const templateParams = {
    name: params.name,
    email: params.email,
    phone: params.phone ?? '',
    subject: params.subject ?? '',
    message: params.message,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}
