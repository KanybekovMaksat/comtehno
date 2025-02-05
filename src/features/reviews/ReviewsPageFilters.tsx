import React, { useState } from "react";
import clsx from "clsx";

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
    <div className="flex items-center gap-2 overflow-x-auto w-full ">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => setActiveRole(role)}
          className={clsx(
            "px-4 py-2 rounded-full text-sm sm:text-base transition-all whitespace-nowrap",
            activeRole === role
              ? "bg-black text-white font-medium"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 border "
          )}
        >
          {role}
        </button>
      ))}
    </div>
  );
};
