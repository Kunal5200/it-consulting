import { COLORS } from "./enum";

export const loginTextField = {
  "& label.Mui-focused": {
    color: COLORS.WHITE,
  },
  "& label": {
    fontSize: "15px",
    fontFamily: "clash-display",
    color: COLORS.WHITE,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: COLORS.BORDER_COLOR,
  },
  "& .MuiOutlinedInput-input": {
    fontFamily: "clash-display",
    color: COLORS.WHITE,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${COLORS.BORDER_COLOR}`,
      padding: "12px",
    },
    "&:hover fieldset": {
      borderColor: COLORS.BORDER_COLOR,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${COLORS.BORDER_COLOR}`,
    },
  },

  "& .Mui-error": {
    "& fieldset": {
      border: "1px solid #d32f2f",
    },
    "&:hover fieldset": {
      border: "1px solid #d32f2f",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #d32f2f",
    },
    "& label.Mui-focused": {
      color: "#d32f2f",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
};
