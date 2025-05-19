import emailjs from "@emailjs/browser";

export const sendEmail = async (name, email, message) => {
  emailjs.init({
    publicKey: "Ml1AEO-knVU0k1oi-",
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  try {
    const result = await emailjs.send("service_rb1qjtq", "template_lsm98j8", {
      from_name: name,
      from_email: email,
      message: message,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
