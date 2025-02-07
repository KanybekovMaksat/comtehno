import React, { useState } from "react";
import { Button, Box } from "@mui/material";

export const ReviewPageFilters: React.FC = () => {
  const [activeRole, setActiveRole] = useState<string>("Все");

  const roles = [
    "Все",
    "Frontend разработчик",
    "Backend разработчик",
    "Графический дизайнер",
    "Интерьерный дизайнер",
    "Фэшн-дизайнер",
    "Засранцы",
    "Арсланы"
  ];

  return (
    <Box
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        width: "100%",
        display: "flex",
        gap: 1,
        p: 1,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {roles.map((role) => (
        <Button
          key={role}
          onClick={() => setActiveRole(role)}
          variant={activeRole === role ? "contained" : "outlined"}
          sx={{
            flexShrink: 0,
            borderColor: "black",
            borderRadius: 4,
            backgroundColor: activeRole === role ? "black" : "transparent",
            color: activeRole === role ? "white" : "inherit",
            "&:hover": {
              backgroundColor: activeRole === role ? "black" : "rgba(0, 0, 0, 0.08)",
            },
          }}
        >
          {role}
        </Button>
      ))}
    </Box>
  );
};
