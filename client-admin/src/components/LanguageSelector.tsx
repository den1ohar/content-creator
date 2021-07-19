import React from "react";
import { Select, MenuItem } from "@material-ui/core/";

interface IProps {
  languages: string[];
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  language: string;
}

const LanguageSelector: React.FC<IProps> = ({
  language,
  languages,
  handleChange
}) => {
  return (
    <div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleChange}>
        {languages.map((value) => {
          return <MenuItem value={value}>{value}</MenuItem>;
        })}
      </Select>
    </div>
  );
};

export default LanguageSelector;
