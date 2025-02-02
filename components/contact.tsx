import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useState } from "react";

const FormSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type formSchemaType = z.infer<typeof FormSchema>;

export default function Contact({contactData} : {contactData: ContactProps}) {
  const [status, setStatus] = useState(0);
  const [ isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<formSchemaType>({ resolver: zodResolver(FormSchema) });
  const onSubmit: SubmitHandler<formSchemaType> = async (data) => {
    setIsLoading(true)
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
        reset();
        setIsLoading(false)
        return;
      }
      setStatus(res.status);
    } catch (error) {
      console.log("Error during action: ", error);
      setStatus(500);
    }
    setIsLoading(false)
  };

  return (
    <section className="flex flex-col text-font-primary h-screen scroll-mt-8" id="contact">
      <div className="my-auto flex flex-col items-center">
        <p className="text-lg text-green font-mono mb-4">04. {contactData.subtitle}</p>
        <h2 className="text-5xl font-bold mb-6">{contactData.title}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form w-full duration-700"
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              <div className="flex flex-col transition-[72px] duration-700 w-full md:w-1/2">
                <label className="mb-2">{contactData.form.nameInput.label}</label>
                <input
                  placeholder={contactData.form.nameInput.placeholder}
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
                <label className="mb-2">{contactData.form.emailInput.label}</label>
                <input
                  placeholder={contactData.form.emailInput.placeholder}
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
              <label className="mb-2">{contactData.form.messageInput.label}</label>
              <textarea
                placeholder={contactData.form.messageInput.placeholder}
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
            
              {isLoading ? (
                <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
              ) : (
                <Button type="submit" className="px-5 py-4">
                  <span>{contactData.button.title}</span>
                </Button> 
              )
            }
            {!status ||
              (status !== 201 && status !== 429 && (
                <span className="animate-fade text-red-400 text-center">
                  {contactData.errorMessage}
                </span>
              ))}
            {status === 201 && (
              <span className="animate-fade text-font-primary text-center">
                {contactData.successMessage}
              </span>
            )}
            {status === 429 && (
              <span className="animate-fade text-red-400 text-center">
                {contactData.tooManyRequests}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

interface ContactProps {
  title: string
  subtitle: string
  errorMessage: string
  successMessage: string
  tooManyRequests: string
  button: {
    isExternal: boolean | null
    link: string | null
    title: string
  }
  form: {
    emailInput: {
      label: string
      placeholder: string
    }
    messageInput: {
      label: string
      placeholder: string
    },
    nameInput: {
      label: string
      placeholder: string
    }
  }
}