import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, Ref } from "react"
import { twMerge } from "tailwind-merge"

export default forwardRef(Button)

function Button(
  { className, tertiary, icon, children, ...props }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      ref={ref}
      className={twMerge(
        `bg-primary-900 rounded-[8px] h-[48px] font-bold relative px-[16px]`,

        tertiary &&
          `bg-transparent inline text-primary-900 h-[auto] font-normal`,

        Boolean(icon) && `px-[54px]`,

        className
      )}
    >
      <span>{children}</span>
      {icon && <span className="absolute right-[16px] top-1/2 -translate-y-1/2">{icon}</span>}
    </button>
  )
}

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  tertiary?: boolean
  icon?: React.ReactNode
}
