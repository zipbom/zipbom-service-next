const size = {
  mobile: "400px",
  tablet: "768px",
  laptopS: "1023px",
  laptopM: "1239px",
  desktop: "1240px",
};

const theme = {
  mainColor: "#0055b8",
  subColor: "#0a4297",
  mobile: `(max-width): ${size.mobile}`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  desktop: `(min-width: ${size.desktop})`,
};

const lightTheme = {
  bgColor: "#F8F7F4",
  textColor: "#31302E",
  borderColor: "1px solid #eaeaea",
};

const darkTheme = {
  bgColor: "#1E1E22",
  textColor: "#ccc",
  borderColor: "1px solid #2c2d33",
};

export default theme;
