import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faCheck,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { sunrise } from "./icon-fa/sunrise";

type IconFAData = { type: "string"; value: IconProp };

export const IconsReference = {
  angle_down_line: { type: "string", value: faAngleDown },
  calendar_regular: { type: "string", value: faCalendar },
  check_fill: { type: "string", value: faCheck },
  medical_notes_fill: { type: "string", value: faNotesMedical },
  sunrise: { type: "string", value: sunrise },
} as const satisfies Record<string, IconFAData>;

export type IconKey = keyof typeof IconsReference;
