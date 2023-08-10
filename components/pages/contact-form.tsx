"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { contactConfig } from "@/config/site"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  subject: z.string().min(1, {
    message: "Subject is required",
  }),
  msg: z.string().min(1, {
    message: "Message is required",
  }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      msg: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:${contactConfig.email}?subject=${values.subject}&body=${values.msg}`
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 py-8 sm:w-[24rem]"
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Naslov</FormLabel>
              <FormControl>
                <Input placeholder="Unesite naslov" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="msg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poruka</FormLabel>
              <FormControl>
                <Textarea placeholder="Upišite vašu poruku" {...field} />
              </FormControl>
              <FormDescription>
                Vaša poruka biti će proslijeđena na mail
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div />
        <Button className="w-full" type="submit">
          Pošalji
        </Button>
      </form>
    </Form>
  )
}
