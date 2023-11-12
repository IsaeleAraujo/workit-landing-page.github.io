// color design tokens export
import './index.css';

export const tokens = {
  darkBlue: {
    1: "#24053E",
  },
  green: {
    1: "#44FFA1",
  },
  grey: {
    1: "#584D62",
  },
  white: {
    1: "#FFFFFF",
    2: "#FCF8FF",
  },
};

export const getColorPalette = () => {
  const colors = tokens;

  return {
    palette: {
      mode: "simple",
      primary: { 
        main: colors.darkBlue && colors.darkBlue[1],
      },
      secondary: {
        main: colors.green && colors.green[1],
      },
      neutral: {
        white1: colors.white && colors.white[1],
        white2: colors.white && colors.white[2],
      },
    },
    

    typography: {
      h1: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 80,
      },
      h2: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 80,
      },
      h3: {
        fontFamily: ["Fraunces", "sans-serif"].join(","),
        fontSize: 40,
      },
      h4: {
        fontFamily: ["Fraunces", "sans-serif"].join(","),
        fontSize: 32,
      },
    },
  };
};
