import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  message: string;
  email: string;
}

export default function ContactEmail({ name, message, email }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Entraram em contato através do portfólio</Preview>

      <Body style={main}>
        <Container style={container}>
          <Text style={title}>
            {name} entrou em contato com a seguinte mensagem:
          </Text>

          <Section style={section}>
            <Text style={text}>{message}</Text>
          </Section>

          <Text style={footer}>Email do contato: {email}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
