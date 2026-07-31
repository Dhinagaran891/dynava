export const theme = {
  colors: {
    primary: "blue-600",
    secondary: "emerald-500",

    text: {
      primary: "text-slate-900",
      secondary: "text-slate-600",
    },

    border: "border-slate-200",
  },

  gradients: {
    brand:
      "bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500",

    text:
      "bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent",

    icon:
      "bg-gradient-to-br from-blue-50 via-white to-emerald-50",

    hover:
      "hover:from-blue-600 hover:to-emerald-500",
  },

  radius: {
    card: "rounded-3xl",
    button: "rounded-xl",
    icon: "rounded-2xl",
  },

  shadow: {
    card: "shadow-lg",
    hover: "hover:shadow-2xl hover:shadow-blue-100/40",
  },

  transition: {
    default: "duration-500",
  },
};