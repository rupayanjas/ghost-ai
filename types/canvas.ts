/**
 * Canvas Node Color Palette
 *
 * 8 defined color pairs for canvas nodes.
 * Each pair specifies a dark node fill and a vivid contrasting text color
 * tuned for readability on the dark canvas background.
 */
export const NODE_COLORS = {
  neutral: {
    fill: "#1F1F1F",
    text: "#EDEDED",
    label: "Neutral dark (default)",
  },
  blue: {
    fill: "#10233D",
    text: "#52A8FF",
    label: "Blue",
  },
  purple: {
    fill: "#2E1938",
    text: "#BF7AF0",
    label: "Purple",
  },
  orange: {
    fill: "#331B00",
    text: "#FF990A",
    label: "Orange",
  },
  red: {
    fill: "#3C1618",
    text: "#FF6166",
    label: "Red",
  },
  pink: {
    fill: "#3A1726",
    text: "#F75F8F",
    label: "Pink",
  },
  green: {
    fill: "#0F2E18",
    text: "#62C073",
    label: "Green",
  },
  teal: {
    fill: "#062822",
    text: "#0AC7B4",
    label: "Teal",
  },
} as const;

export type NodeColorKey = keyof typeof NODE_COLORS;

/**
 * Canvas Node Shapes
 *
 * 6 supported shapes for canvas nodes.
 * Complex shapes (diamond, hexagon, cylinder) are rendered as inline SVGs
 * rather than CSS borders.
 */
export const NODE_SHAPES = {
  rectangle: {
    label: "Rectangle",
    description: "Default general-purpose node",
  },
  diamond: {
    label: "Diamond",
    description: "Decision / gateway",
  },
  circle: {
    label: "Circle",
    description: "Event / endpoint",
  },
  pill: {
    label: "Pill",
    description: "Service / process",
  },
  cylinder: {
    label: "Cylinder",
    description: "Database / storage",
  },
  hexagon: {
    label: "Hexagon",
    description: "External system / boundary",
  },
} as const;

export type NodeShape = keyof typeof NODE_SHAPES;

/**
 * Default canvas edge style
 */
export const EDGE_STYLE = {
  strokeColor: "#f8fafc",
  strokeWidth: 2,
  type: "smoothstep",
  markerEnd: "arrow",
} as const;
