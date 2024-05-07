import { render } from "@react-email/render";
import nodemailer from "nodemailer";

import ContactEmail from "@/emails/contact-email";

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();
    const user = process.env.NODEMAILER_USER!;
    const pass = process.env.NODEMAILER_PASS!;
    const emailToSend = process.env.EMAIL!;

    if (!email || !name || !message || message.length < 50) {
      return new Response("Dados inválidos, verifique e tente novamente", {
        status: 401,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user,
        pass,
      },
    });

    const emailHtml = render(ContactEmail({ name, message, email }));

    const options = {
      from: emailToSend,
      to: emailToSend,
      subject: "Contato - Portfolio",
      html: emailHtml,
    };

    transport.sendMail(options, (error) => {
      if (error) {
        console.log("[ERROR_ON_CONFIRMATION_EMAIL]", error);

        return new Response("Ocorreu um erro ao enviar a mensagem", {
          status: 400,
        });
      }
    });

    return Response.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 },
    );
  } catch (error) {
    console.log("[ERROR_ON_CONTACT]", error);

    return new Response("Ocorreu um erro ao enviar a mensagem", {
      status: 500,
    });
  }
}
