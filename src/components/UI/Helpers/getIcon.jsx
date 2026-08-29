import { House, KeyRound, TrendingUp } from "lucide-react";

const icons = {
  House,
  KeyRound,
  TrendingUp,
};

export function getIcon(icon_name) {
  return icons[icon_name] || null;
}
