import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { message, email, subject } = req.body;
  const { data, error } = await resend.emails.send({
    
    from: 'Resend <onboarding@resend.dev>',
    to: ['chlaw104@gmail.com'],
    subject,
    html: `<h1>${subject}</h1><p>From: ${email}</p <p>${message}</p>`
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};