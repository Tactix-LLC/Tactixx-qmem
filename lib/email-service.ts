"use server";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: "contact" | "bug-report";
  additionalData?: any;
}

export async function sendEmail(data: EmailData) {
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const recipients = ["nahomtewodorsm@gmail.com", "bekasdess@gmail.com"];

  const emailContent = {
    to: recipients,
    subject: `[Tactics PLC] ${
      data.type === "contact" ? "Contact Form" : "Bug Report"
    }: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #22c55e, #84cc16); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Tactics PLC</h1>
          <p style="color: white; margin: 5px 0 0 0;">${
            data.type === "contact" ? "New Contact Message" : "New Bug Report"
          }</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #22c55e; margin-top: 0;">Message Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Type:</strong> ${
              data.type === "contact" ? "Contact Form" : "Bug Report"
            }</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          ${
            data.additionalData
              ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="margin-top: 0;">Additional Information:</h3>
              ${Object.entries(data.additionalData)
                .map(
                  ([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
        
        <div style="background: #22c55e; padding: 20px; text-align: center;">
          <p style="color: white; margin: 0;">This message was sent from the Tactics PLC website contact form.</p>
        </div>
      </div>
    `,
  };

  // In a real application, you would use a service like SendGrid, Nodemailer, or Resend
  console.log("Email would be sent:", emailContent);

  return {
    success: true,
    message:
      "Message sent successfully! We'll get back to you within 24 hours.",
  };
}
