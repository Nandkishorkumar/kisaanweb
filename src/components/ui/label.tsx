import cn from "classnames";
import { LabelHTMLAttributes } from "react";

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: React.FC<Props> = ({ className = "mb-3", ...rest }) => {
  return (
    <label
      className={cn(
        "block text-gray-600 font-semibold text-sm leading-none",
        className
      )}
      {...rest}
    />
  );
};

export default Label;
