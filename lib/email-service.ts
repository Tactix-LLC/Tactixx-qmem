"use server";

import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: "contact" | "bug-report";
  additionalData?: any;
}

export async function sendEmail(data: EmailData) {
  console.log("SMTP Email service called with:", data); // Debug log

  try {
    // Validate required environment variables
    const requiredEnvVars = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASS",
      "SMTP_FROM",
    ];
    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingVars.length > 0) {
      console.error("Missing SMTP environment variables:", missingVars);
      return {
        success: false,
        message: `Email service is not configured. Missing: ${missingVars.join(", ")}. Please contact support directly at nahomtewodorsm@gmail.com or bekasdess@gmail.com`,
      };
    }

    console.log("SMTP configuration found, creating transporter..."); // Debug log

    // Create transporter - FIXED: changed createTransporter to createTransport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Additional options for better compatibility
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    console.log("Verifying SMTP connection..."); // Debug log

    // Verify connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return {
        success: false,
        message:
          "Email server connection failed. Please try again later or contact support directly.",
      };
    }

    const recipients = ["nahomtewodorsm@gmail.com", "bekasdess@gmail.com"];

    const mailOptions = {
      from: `"Tactics PLC" <${process.env.SMTP_FROM}>`,
      to: recipients.join(", "),
      subject: `[Tactics PLC] ${data.type === "contact" ? "Contact Form" : "Bug Report"}: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tactics PLC - ${data.type === "contact" ? "Contact Form" : "Bug Report"}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #22c55e, #84cc16); padding: 40px 20px; text-align: center;">
              <div style="background: white; width: 80px; height: 80px; border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.38C20.8 4 21.11 4.42 20.96 4.82L20.76 5.26C20.54 5.73 20 6 19.45 6H18.5V7C18.5 10.59 15.59 13.5 12 13.5S5.5 10.59 5.5 7V6H4.55C4 6 3.46 5.73 3.24 5.26L3.04 4.82C2.89 4.42 3.2 4 3.62 4H7ZM12 15.5C13.25 15.5 14.45 15.26 15.54 14.82L16.5 19H7.5L8.46 14.82C9.55 15.26 10.75 15.5 12 15.5ZM6 20H18V22H6V20Z"/>
                </svg>
              </div>
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">Tactics PLC</h1>
              <p style="color: rgba(255,255,255,0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">
                ${data.type === "contact" ? "New Contact Message" : "New Bug Report"}
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #22c55e; margin-top: 0; font-size: 28px; margin-bottom: 30px; border-bottom: 3px solid #22c55e; padding-bottom: 10px;">Message Details</h2>
              
              <!-- User Info Card -->
              <div style="background: linear-gradient(135deg, #f8fafc, #e2e8f0); padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #22c55e; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
                  <div>
                    <p style="margin: 0; color: #64748b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                    <p style="margin: 8px 0 0 0; color: #1e293b; font-size: 18px; font-weight: 600;">${data.name}</p>
                  </div>
                  <div>
                    <p style="margin: 0; color: #64748b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 8px 0 0 0; color: #1e293b; font-size: 18px; font-weight: 600;">
                      <a href="mailto:${data.email}" style="color: #22c55e; text-decoration: none;">${data.email}</a>
                    </p>
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                  <div>
                    <p style="margin: 0; color: #64748b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                    <p style="margin: 8px 0 0 0; color: #1e293b; font-size: 18px; font-weight: 600;">${data.subject}</p>
                  </div>
                  <div>
                    <p style="margin: 0; color: #64748b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Type</p>
                    <span style="background: ${data.type === "contact" ? "linear-gradient(135deg, #dbeafe, #bfdbfe)" : "linear-gradient(135deg, #fef3c7, #fde68a)"}; color: ${data.type === "contact" ? "#1e40af" : "#92400e"}; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 700; text-transform: uppercase; display: inline-block; margin-top: 8px;">
                      ${data.type === "contact" ? "Contact Form" : "Bug Report"}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Message Content -->
              <div style="background: white; padding: 25px; border-radius: 12px; border: 2px solid #e2e8f0; margin-bottom: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h3 style="margin-top: 0; color: #1e293b; font-size: 22px; margin-bottom: 20px; display: flex; align-items: center;">
                  <span style="background: #22c55e; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">💬</span>
                  Message:
                </h3>
                <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 20px; border-radius: 8px; border-left: 4px solid #84cc16;">
                  <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.7; font-size: 16px;">${data.message}</p>
                </div>
              </div>
              
              ${
                data.additionalData
                  ? `
              <!-- Additional Information -->
              <div style="background: white; padding: 25px; border-radius: 12px; border: 2px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h3 style="margin-top: 0; color: #1e293b; font-size: 22px; margin-bottom: 20px; display: flex; align-items: center;">
                  <span style="background: #7c3aed; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">ℹ️</span>
                  Additional Information:
                </h3>
                <div style="background: linear-gradient(135deg, #fef7ff, #f3e8ff); padding: 20px; border-radius: 8px;">
                  ${Object.entries(data.additionalData)
                    .map(
                      ([key, value]) => `
                      <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #7c3aed; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">${key}:</strong>
                        <span style="color: #4c1d95; font-size: 16px; font-weight: 500;">${value}</span>
                      </div>
                    `
                    )
                    .join("")}
                </div>
              </div>
              `
                  : ""
              }
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1e293b, #334155); padding: 30px 20px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style="display: inline-block;">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p style="color: #94a3b8; margin: 0; font-size: 16px; font-weight: 500;">
                This message was sent from the Tactics PLC website contact form.
              </p>
              <p style="color: #64748b; margin: 15px 0 0 0; font-size: 14px;">
                📅 Sent on ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #475569;">
                <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                  🏆 Tactics PLC - Fantasy Football Excellence
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
        Tactics PLC - ${data.type === "contact" ? "Contact Form" : "Bug Report"}
        
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        Type: ${data.type}
        
        Message:
        ${data.message}
        
        ${
          data.additionalData
            ? `Additional Information:
          ${Object.entries(data.additionalData)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n")}`
            : ""
        }
        
        Sent on: ${new Date().toLocaleString()}
        
        This message was sent from the Tactics PLC website contact form.
      `,
    };

    console.log("Sending email with SMTP..."); 
    
    const result = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", result.messageId);

    return {
      success: true,
      message:
        "Message sent successfully! We'll get back to you within 24 hours.",
      messageId: result.messageId,
    };
  } catch (error) {
    console.error("SMTP Email service error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send message. Please try again later.";

    if (error instanceof Error) {
      if (error.message.includes("authentication")) {
        errorMessage =
          "Email authentication failed. Please contact support directly.";
      } else if (error.message.includes("connection")) {
        errorMessage =
          "Email server connection failed. Please try again later.";
      } else if (error.message.includes("timeout")) {
        errorMessage = "Email sending timed out. Please try again.";
      }
    }

    return {
      success: false,
      message: `${errorMessage} You can also contact us directly at nahomtewodorsm@gmail.com or bekasdess@gmail.com`,
    };
  }
}

// Test function to verify SMTP configuration
export async function testSMTPConnection() {
  try {
    // FIXED: changed createTransporter to createTransport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    return { success: true, message: "SMTP connection successful" };
  } catch (error) {
    console.error("SMTP test failed:", error);
    return {
      success: false,
      message: `SMTP test failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}
