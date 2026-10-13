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

// EmailJS credentials provided by HR
export const EMAILJS_CONFIG = {
  serviceId: "service_n5vv6dd",
  templateId: "template_ks19t8q",
  publicKey: "YMpfZl_kwWXCXo3l8",
};

export function isEmailJSConfigured(): boolean {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  return Boolean(serviceId && templateId && publicKey);
}

/** Sends a contact request using EmailJS. */
export async function sendContactEmail(
  data: ContactFormData
): Promise<EmailSendResult> {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!isEmailJSConfigured()) {
    throw new Error("EmailJS is not configured.");
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone_number: data.phone,
    service_type: data.service,
    message: data.message,
    to_name: "Aeroview360 Team",
    to_email: "aeroview360world@gmail.com",
    submission_date: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
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
    }

    throw new Error(
      `EmailJS responded with status ${response.status}: ${response.text}`
    );
  } catch (error: any) {
    console.error("[EmailJS Error]:", error);

    throw new Error(
      error?.text ||
      error?.message ||
      "Failed to send message. Please try again."
    );
  }
}