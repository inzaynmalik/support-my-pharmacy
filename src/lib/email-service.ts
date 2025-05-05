import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key from environment variables
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

interface EmailData {
  name: string;
  pharmacyName: string;
  email: string;
  phone: string;
  interest: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      to_email: "smp47911@gmail.com",
      from_name: data.name,
      from_email: data.email,
      message: `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Pharmacy Name: ${data.pharmacyName}
Phone: ${data.phone}
Interest: ${data.interest}`,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      "template_ynnvqjw",
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
