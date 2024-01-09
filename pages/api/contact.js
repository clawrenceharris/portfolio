import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { message, email, subject } = req.body;
  const { data, error } = await resend.emails.send({
    from: "Resend <onboarding@resend.dev>",
    to: ["clawrenceharris@gmail.com"],
    subject,
    html: `<h5>From: ${email}</h5> <p>${message}</p>`,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
