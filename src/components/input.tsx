import { LucideIcon } from "lucide-react"
import { ComponentProps } from "react"

interface InputProps extends ComponentProps<"input"> {
  icon: LucideIcon
}

export const Input = ({ icon, ...rest }: InputProps) => {
  const Icon = icon

  return (
    <div className="flex h-14 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
      <Icon className="size-5 text-zinc-400" />
      <input
        {...rest}
        className="w-full bg-transparent outline-none placeholder:text-zinc-400"
      />
    </div>
  )
}
