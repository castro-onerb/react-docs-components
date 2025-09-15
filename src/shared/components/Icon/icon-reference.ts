import type { IconifyIcon } from "@iconify/react/dist/iconify.js";

// Referência de ícones estruturada como { data | string }.
// O Iconify se destaca das outras libs por funcionar como um gerenciador
// de ícones: permite ícones predefinidos (strings) ou arquivos .json gerados
// a partir de SVGs (usando `Icon/configs/icon-generator.js` com Node).
//
// Apesar de estarmos usando Iconify aqui, a abstração permite trocar a lib
// futuramente sem dor de cabeça. Para casos simples, que usam apenas strings,
// é possível desconsiderar a estrutura { data | string } e passar diretamente
// 'key_custom': 'nome_na_lib'.

type IconData = { type: "data"; value: IconifyIcon };
type IconString = { type: "string"; value: string };

export const IconsReference = {
  angle_down_line: { type: "string", value: "fa:angle-down" },
  calendar_regular: { type: "string", value: "majesticons:calendar" },
  calendar_day_regular: { type: "string", value: "ic:round-today" },
  check_fill: { type: "string", value: "fe:check" },
  close_line: { type: "string", value: "iconamoon:close-bold" },
  exit_line: { type: "string", value: "mingcute:exit-fill" },
  hospital_line: { type: "string", value: "mingcute:hospital-line" },
  medical_bag_line: { type: "string", value: "streamline:medical-bag-remix" },
  medical_notes_fill: { type: "string", value: "fa-solid:notes-medical" },
  stethoscope_line: { type: "string", value: "ph:stethoscope-bold" },
  user_fill: { type: "string", value: "solar:user-bold" },
  user_plus_full: { type: "string", value: "uil:user-plus" },
} as const satisfies Record<string, IconData | IconString>;

export type IconKey = keyof typeof IconsReference;
