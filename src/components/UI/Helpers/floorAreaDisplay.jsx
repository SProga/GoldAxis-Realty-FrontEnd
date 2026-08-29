import { LandPlot, Scan, Ruler } from "lucide-react";

const floor_area_units = {
  sq_ft: { icon: Scan, label: "sq ft" },
  sq_m: { icon: Ruler, label: "m²" },
  acre: { icon: LandPlot, label: "acres" },
};

export const floorAreaDisplay = (floor_area, floor_area_unit) => {
  const unit = floor_area_units[floor_area_unit];

  if (!unit || !floor_area) return null;

  return {
    Icon: unit.icon,
    value: Number(floor_area).toLocaleString(),
    label: unit.label,
  };
};
