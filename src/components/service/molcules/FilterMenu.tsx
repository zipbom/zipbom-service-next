import Accordion from "@mui/material/Accordion";
import Link from "next/link";

const FilterMenu: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
  };

  return <>FilterMenu</>;
};

export default FilterMenu;
