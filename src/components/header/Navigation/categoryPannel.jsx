import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";

function CategoryPannel(props) {
  const [submenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenu, setInnerSubMenu] = useState(null);

  const toggleSubmenu = (index) => {
    setSubMenuIndex(submenuIndex === index ? null : index);
    setInnerSubMenu(null); // close inner if main changes
  };

  const toggleInnerSubmenu = (index) => {
    setInnerSubMenu(innerSubMenu === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 270 }} role="presentation">
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h3 className="text-[18px] font-semibold text-black !ml-3">
          Shop By Categories
        </h3>
        <IoCloseSharp
          className="text-[22px] text-black cursor-pointer"
          onClick={() => props.openCategoryPannel(false)}
        />
      </div>

      <div className="max-h-screen overflow-y-auto py-2">
        <ul className="w-full space-y-2 text-black text-[15px] font-normal">
          {/* === Fashion Category === */}
          <li className="list-none !mt-4">
            <div className="flex items-center justify-between px-4 !mb-1">
              <Button className="!w-full !justify-between !text-black  !px-2 !text-left">
                Fashion
              </Button>
              {submenuIndex === 0 ? (
                <FaRegSquareMinus
                  className="text-[18px] font-[500] cursor-pointer ml-2 !mr-3"
                  onClick={() => toggleSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-[18px] font-[500] cursor-pointer ml-2 !mr-3"
                  onClick={() => toggleSubmenu(0)}
                />
              )}
            </div>

            {/* Submenu: Apparel */}
            {submenuIndex === 0 && (
              <ul className="pl-10 pt-1 space-y-1">
                <li>
                  <div className="flex items-center justify-between px-2">
                    <Button className="!w-full !justify-between !text-black !py-3 !px-7 !text-left">
                      Apparel
                    </Button>
                    {innerSubMenu === 0 ? (
                      <FaRegSquareMinus
                        className="text-[18px] font-[500] cursor-pointer mb-1 !mr-3"
                        onClick={() => toggleInnerSubmenu(0)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-[18px] font-[500] cursor-pointer mb-2 !mr-3"
                        onClick={() => toggleInnerSubmenu(0)}
                      />
                    )}
                  </div>

                  {/* SubInnerMenu: Items under Apparel */}
                  {innerSubMenu === 0 && (
                    <ul className="pl-10 pt-1 space-y-1">
                      {[
                        "Smart Tablet",
                        "Crepe Tshirt",
                        "Leather Watch",
                        "Rolling Diamond",
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to="/"
                            className="link block px-3 py-1 text-[14px] text-black hover:bg-gray-100 !ml-10 !mb-2"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* === Electronics Category === */}
          <li className="list-none mt-2">
            <div className="flex items-center justify-between px-4 !mb-1">
              <Button className="!w-full !justify-between !text-black  !px-2 !text-left">
                Electronics
              </Button>
              {submenuIndex === 1 ? (
                <FaRegSquareMinus
                  className="text-[18px] font-[500] cursor-pointer mb-1 !mr-3"
                  onClick={() => toggleSubmenu(1)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-[18px] font-[500] cursor-pointer mb-2 !mr-3"
                  onClick={() => toggleSubmenu(1)}
                />
              )}
            </div>

            {/* Submenu: Mobiles */}
            {submenuIndex === 1 && (
              <ul className="pl-10 pt-1 space-y-1">
                <li>
                  <div className="flex items-center justify-between px-2">
                    <Button className="!w-full !justify-between !text-black !py-3 !px-7 !text-left">
                      Mobiles
                    </Button>
                    {innerSubMenu === 1 ? (
                      <FaRegSquareMinus
                        className="text-[18px] font-[500] cursor-pointer mb-2 !mr-3"
                        onClick={() => toggleInnerSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-[18px] font-[500] cursor-pointer mb-2 !mr-3"
                        onClick={() => toggleInnerSubmenu(1)}
                      />
                    )}
                  </div>

                  {/* SubInnerMenu: Mobile Items */}
                  {innerSubMenu === 1 && (
                    <ul className="pl-10 pt-1 space-y-1">
                      {["iPhone", "Samsung", "OnePlus"].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to="/"
                            className="link block px-3 py-1 text-[14px] text-black hover:bg-gray-100 !ml-10 !mb-2"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* === Static Categories Below === */}
          {[
            "Watches",
            "Cosmetics",
            "Accessories",
            "Furniture",
            "Purse",
            "Sunglasses",
            "Xbox Controller",
          ].map((category, index) => (
            <li key={index}>
              <Button className="!w-full !justify-start !text-black !py-2 !px-4 !text-left">
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer
      open={props.isOpenPannel}
      onClose={() => props.openCategoryPannel(false)}
    >
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPannel;
