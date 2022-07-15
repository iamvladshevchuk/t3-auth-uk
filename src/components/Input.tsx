import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from "react"
import { twMerge } from "tailwind-merge"

export default forwardRef(Input)

function Input(
  { className, label, ...props }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="grid gap-[8px]">
      {label && (
        <label
          htmlFor={props.id}
          className="text-white-600 font-bold"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        className={twMerge(`p-[12px] rounded-[8px] bg-black-800 autofill:shadow-[0_0_0px_1000px_#714C9F_inset] `, className)}
      />
    </div>
  )
}

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
}
