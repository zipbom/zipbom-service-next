import Link from "next/link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { jsx, css } from "@emotion/react";

const FilterMenu: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const styles = {
    header: css`
      background-color: blue;
      margin-bottom: 1.45rem;
    `,
    link: css`
      color: red;
      text-decoration: none;
    `,
    title: css`
      margin: 0 auto;
      max-width: 960;
      padding: 1.45rem 1.0875rem;
    `,
    list: css`
      padding: 1rem;
      overflow: auto;
    `,
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={styles.list}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
    </>
  );
};

export default FilterMenu;
