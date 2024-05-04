"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().min(1, "E-mail obrigatório").email(),
  name: z.string().min(4, "Nome complete obrigatório"),
  message: z.string().min(50, "Mensagem precisa ter pelo menos 50 caracteres"),
});

function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="w-full px-6 sm:px-16 mt-24 mb-12 lg:container lg:mx-auto animate-show">
      <div className="w-full flex flex-col gap-12 mb-24 lg:mx-auto lg:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary">
          Vamos Conversar.
        </h2>

        <p className="text-xl sm:text-2xl sm:!leading-snug text-center font-light text-primary opacity-70">
          Estou disponível para discutir oportunidades de colaboração e
          responder a quaisquer perguntas que você possa ter. Use o formulário
          abaixo para enviar uma mensagem ou me envie pelo WhatsApp.
        </p>
      </div>

      <div className="w-full flex flex-col gap-24">
        <Form {...form}>
          <form
            className="w-full flex flex-col items-center gap-12 lg:max-w-xl lg:mx-auto"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col gap-9">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-light text-primary">
                      Seu E-mail
                    </FormLabel>

                    <FormControl>
                      <Input
                        className={cn({
                          "border-destructive": form.formState.errors.email,
                        })}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-light text-primary">
                      Seu Nome
                    </FormLabel>

                    <FormControl>
                      <Input
                        className={cn({
                          "border-destructive": form.formState.errors.name,
                        })}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-light text-primary">
                      Sua Mensagem
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        className={cn({
                          "border-destructive": form.formState.errors.message,
                        })}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              variant="outline"
              className="text-xl font-light text-primary flex items-center gap-1 group"
            >
              Enviar
              <ArrowUpRight
                strokeWidth={1.5}
                className="opacity-70 transition-all group-hover:opacity-100 group-hover:rotate-45"
              />
            </Button>
          </form>
        </Form>

        <div className="w-full h-[1px] bg-[#323330]/15" />

        <div className="w-full flex flex-col gap-6 lg:max-w-lg lg:mx-auto">
          <p className="text-base font-light text-primary text-center opacity-70">
            Além do formulário abaixo, você também pode entrar em contato comigo
            através do meu e-mail ou telefone.
          </p>

          <div className="w-full flex flex-col items-center gap-4">
            <a
              href="mailto:matheuskristman.dev@gmail.com"
              className="w-full text-xl sm:text-3xl text-primary font-bold text-center break-words opacity-70 transition hover:opacity-100"
            >
              matheuskristman.dev@gmail.com
            </a>

            <a
              href="https://wa.me/5511910041998"
              className="w-full text-xl sm:text-3xl text-primary font-bold text-center break-words transition opacity-70 hover:opacity-100"
            >
              (11) 91004-1998
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
