import { twMerge } from "tailwind-merge";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "w-full bg-navy-light rounded-md shadow-md p-5",
        className
      )}
    >
      {children}
    </div>
  );
}
