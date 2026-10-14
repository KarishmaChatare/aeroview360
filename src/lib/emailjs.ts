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

export const SERVICE_LABELS: Record<string, string> = {
  "drone-survey": "Drone Survey",
  "gis-mapping": "GIS Mapping",
  "3d-modelling": "3D Modelling",
  "construction-monitoring": "Construction Monitoring",
  "land-survey": "Land Survey",
  "infrastructure-mapping": "Infrastructure Mapping",
  "other": "Geospatial Services",
};

// EmailJS credentials provided by HR (with fallback to environment variables if provided)
const env = typeof import.meta !== "undefined" ? (import.meta as any).env : undefined;

export const EMAILJS_CONFIG = {
  serviceId:
    env?.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_SERVICE_ID !== "your_service_id_here"
      ? env.VITE_EMAILJS_SERVICE_ID
      : "service_n5vv6dd",
  templateId:
    env?.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_TEMPLATE_ID !== "your_template_id_here"
      ? env.VITE_EMAILJS_TEMPLATE_ID
      : "template_ks19t8q",
  publicKey:
    env?.VITE_EMAILJS_PUBLIC_KEY && env.VITE_EMAILJS_PUBLIC_KEY !== "your_public_key_here"
      ? env.VITE_EMAILJS_PUBLIC_KEY
      : "YMpfZl_kwWXCXo3l8",
};

export function isEmailJSConfigured(): boolean {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  return Boolean(
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== "your_service_id_here" &&
    templateId !== "your_template_id_here" &&
    publicKey !== "your_public_key_here"
  );
}

/** Sends a contact request using EmailJS. */
export async function sendContactEmail(
  data: ContactFormData
): Promise<EmailSendResult> {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!isEmailJSConfigured()) {
    throw new Error("EmailJS is not configured.");
  }

  const serviceName = SERVICE_LABELS[data.service] || data.service;

  const templateParams: Record<string, unknown> = {
    // Customer Name variants
    customer_name: data.name,
    name: data.name,
    from_name: data.name,
    user_name: data.name,

    // Customer Email variants & Reply-To header target
    email: data.email,
    customer_email: data.email,
    from_email: data.email,
    user_email: data.email,
    reply_to: data.email,

    // Customer Phone variants
    phone_number: data.phone,
    phone: data.phone,
    customer_phone: data.phone,

    // Service Type variants (human-readable label and raw slug)
    service_type: serviceName,
    service: serviceName,
    service_slug: data.service,

    // Message variants
    message: data.message,
    project_details: data.message,

    // Recipient & Metadata
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