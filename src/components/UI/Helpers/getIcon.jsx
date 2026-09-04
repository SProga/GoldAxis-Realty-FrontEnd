import { icons } from "lucide-react";

export function getIcon(icon_name) {
  return icons[icon_name] || null;
}
