import { forwardRef } from "react"

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={`transition-all duration-350 hover:shadow-[3px_3px_0px_0px] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none hover:ring-green border border-green rounded px-4 py-2 text-green font-mono ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
