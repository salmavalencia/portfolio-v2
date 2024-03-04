import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const FormSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type formSchemaType = z.infer<typeof FormSchema>;

export default function Contact() {
  const [status, setStatus] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({ resolver: zodResolver(FormSchema) });
  const onSubmit: SubmitHandler<formSchemaType> = async (data) => {
    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });
      if (res.ok) {
        setStatus(res.status);
        return;
      }
      setStatus(res.status);
    } catch (error) {
      console.log("Error during action: ", error);
      setStatus(500);
    }
  };

  return (
    <section className="flex flex-col text-font-primary h-screen">
      <div className="my-auto flex flex-col items-center">
        <p className="text-lg text-green font-mono mb-4">04. What's Next?</p>
        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form w-full duration-700"
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              <div className="flex flex-col transition-[72px] duration-700 w-full md:w-1/2">
                <label className="mb-2">Full Name</label>
                <input
                  placeholder="John Doe"
                  {...register("fullName")}
                  className="bg-gray-50 border border-navy-lighter text-green text-sm rounded-lg outline-none block w-full p-2.5 bg-navy-dark placeholder-font-secondary"
                  type="text"
                />
                {errors.fullName && (
                  <span className="animate-fade text-red-400">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col transition-[72px] duration-700 w-full md:w-1/2">
                <label className="mb-2">E-mail</label>
                <input
                  placeholder="someone@gmail.com"
                  {...register("email")}
                  className="bg-gray-50 border border-navy-lighter text-green text-sm rounded-lg outline-none block w-full p-2.5 bg-navy-dark focus:bg-navy-dark focus:border-transparent placeholder-font-secondary"
                  type="text"
                />
                {errors.email && (
                  <span className="animate-fade text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Your message</label>
              <textarea
                placeholder="Write your message here..."
                {...register("message")}
                className="block p-2.5 w-full text-sm text-green rounded-lg border border-navy-lighter outline-none h-32 bg-navy-dark placeholder-font-secondary"
              />
              {errors.message && (
                <span className="animate-fade text-red-400">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 gap-4">
            <Button type="submit" className="px-5 py-4">
              Say Hello
            </Button>
            {!status ||
              (status !== 201 && (
                <span className="animate-fade text-red-400 text-center">
                  I'm sorry, there was an error in your request. Refresh or try
                  again later 😔
                </span>
              ))}
            {status === 201 && (
              <span className="animate-fade text-font-primary text-center">
                E-mail sent 👍
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
