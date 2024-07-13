import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "flex items-center gap-2 rounded-lg px-5 justify-center font-medium",
  variants: {
    variant: {
      primary:
        "bg-lime-300 text-lime-950 hover:bg-lime-400 disabled:bg-lime-200 ",
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 disabled:bg-zinc-700",
    },
    size: {
      default: "py-2",
      full: "h-11 w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
})

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
