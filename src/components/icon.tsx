import { cva, type VariantProps } from "class-variance-authority";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";

const icons = {
  check: CheckIcon,
  pencil: PencilIcon,
  plus: PlusIcon,
  spinner: SpinnerIcon,
  trash: TrashIcon,
  x: XIcon,
};

type IconName = keyof typeof icons;

const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  name: IconName;
}

export function Icon({ name, animate, className, ...props }: IconProps) {
  const SVGIcon = icons[name];
  return (
    <SVGIcon className={iconVariants({ animate, className })} {...props} />
  );
}
