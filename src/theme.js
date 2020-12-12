const responsiveWidths = [728, 768, 992, 1190];

export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#fff",
    background: "#fff",
    primary: "#07c",
    secondary: "#609",
  },
  fonts: {
    body:
      'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
  header: {
    ".wrapper": {
      margin: "0 auto",
      maxWidth: responsiveWidths,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ".brand": {
      mr: [0, 0, 4],
    },
    ".menu": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    a: {
      textDecoration: "none",
      color: "primary",
      p: 3,
      display: "inline-block",
      fontSize: 2,
    },
  },
};
