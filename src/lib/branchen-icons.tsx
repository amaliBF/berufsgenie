import {
  Monitor,
  Wrench,
  Stethoscope,
  Briefcase,
  Megaphone,
  ShoppingCart,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Cog,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Wrench,
  Stethoscope,
  Briefcase,
  Megaphone,
  ShoppingCart,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Cog,
};

export function BrancheIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}
