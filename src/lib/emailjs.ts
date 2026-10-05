import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface EmailSendResult {
  success: boolean;
  simulated?: boolean;
  message?: string;
}

// Config loaded from Vite environment variables
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export function isEmailJSConfigured(): boolean {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
  return (
    Boolean(serviceId) &&
    Boolean(templateId) &&
    Boolean(publicKey) &&
    serviceId !== "your_service_id_here" &&
    templateId !== "your_template_id_here" &&
    publicKey !== "your_public_key_here"
  );
}

/** Sends a contact quote request using EmailJS. */
export async function sendContactEmail(data: ContactFormData): Promise<EmailSendResult> {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!isEmailJSConfigured()) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to .env."
    );
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone_number: data.phone,
    service_type: data.service,
    message: data.message,
    to_name: "Aeroview360 Team",
    to_email: "aeroview360world@gmail.com",
    submission_date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`);
    }
  } catch (error: any) {
    console.error("[EmailJS Error]:", error);
    throw new Error(
      error?.text || error?.message || "Failed to send message. Please try again or reach out directly on WhatsApp."
    );
  }
}
