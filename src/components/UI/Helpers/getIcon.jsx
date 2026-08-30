import {
  House,
  KeyRound,
  TrendingUp,
  Star,
  ShieldCheck,
  Users,
} from "lucide-react";

const icons = {
  House,
  KeyRound,
  TrendingUp,
  Star,
  ShieldCheck,
  Users,
};

export function getIcon(icon_name) {
  return icons[icon_name] || null;
}
