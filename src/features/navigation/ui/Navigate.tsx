import { AppBar, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigate = () => {
  const [selected, setSelected] = useState<object>({
    college: "",
    specialties: "",
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown, name: string }>) => {
    const name = event.target.name as string;
    const value = event.target.value as string;

    setSelected((prevSelected) => {
      return {
        ...prevSelected,
        [name]: value,
      }
    });
  }

  const listLink = [
    {
      title: "Новости",
      url: "/news"
    },
    {
      title: "Мероприятия",
      url: "/error"
    },
    {
      title: "Профориентация",
      url: "/error"
    },
    {
      title: "Расписание",
      url: "/error"
    }
  ]

  return <AppBar position="static" className="bg-white shadow-none font-medium px-6 md:px-20 ">
    <Toolbar className="flex items-center justify-between">
      <Typography fontSize={22} className="text-[#0F766E] font-bold" variant="subtitle1">КОМТЕХНО</Typography>
      <div className="flex items-center gap-4">
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel className="text-sm" id="demo-simple-select-label">Колледж</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected.college}
            onChange={handleChange}
            label="Age"
            name="college"
            variant="standard"
          >
            <MenuItem value={"Comtehno"}>Comtehno</MenuItem>
            <MenuItem value={"Cite"}>Cite</MenuItem>
            <MenuItem value={"Intuit"}>Intuit</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="" sx={{ minWidth: 120 }}>
          <InputLabel className="text-sm" id="demo-simple-select-label">Специальности</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected.specialties}
            onChange={handleChange}
            label="Age"
            name="specialties"
            variant="standard"
          >
            <MenuItem value={"Comtehno"}>Comtehno</MenuItem>
            <MenuItem value={"Cite"}>Cite</MenuItem>
            <MenuItem value={"Intuit"}>Intuit</MenuItem>
          </Select>
        </FormControl>
        {listLink.map((item, index) => (
          <Link to={item.url} key={index} className="text-[#0F766E] font-light">{item.title}</Link>
        ))}
      </div>
    </Toolbar>
  </AppBar>;
};