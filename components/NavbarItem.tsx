import React from "react";

interface NavbarItemsProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemsProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
