import { twMerge } from "tailwind-merge";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "w-full bg-navy-light rounded-md shadow-md p-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
