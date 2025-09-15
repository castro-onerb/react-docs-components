import type { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconsReference, type IconKey } from "./icon-reference";

interface IconProps
  extends Omit<ComponentProps<typeof FontAwesomeIcon>, "icon" | "size"> {
  name: IconKey;
  size?: number;
}

export function Icon({ name, size = 16, ...props }: IconProps) {
  const iconData = IconsReference[name];

  return (
    <FontAwesomeIcon
      icon={iconData.value}
      style={{ width: size, height: size }}
      {...props}
    />
  );
}
