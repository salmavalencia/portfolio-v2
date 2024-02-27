import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

type FormData = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};

const FormSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  message: z.string().min(10).max(500),
});

type formSchemaType = z.infer<typeof FormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({ resolver: zodResolver(FormSchema) });
  const onSubmit: SubmitHandler<formSchemaType> = (data) => console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col">
        <label>Full Name</label>
        <input placeholder="John Doe" {...register("fullName")} />
        {errors.fullName && <span>{errors.fullName.message}</span>}
        <label>E-mail</label>
        <input placeholder="someone@gmail.com" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <label>Phone Number</label>
        <input placeholder="+1 (800) 000-8080" {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
        <label>Your message</label>
        <textarea
          placeholder="Write your message here..."
          {...register("message")}
        />
        {errors.message && <span>{errors.message.message}</span>}
        <Button type="submit">Say Hello</Button>
      </form>
    </section>
  );
}
