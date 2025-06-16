import React ,{useState} from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPannel from "./categoryPannel";

function Navigation() {
  const [isOpenPannel , setIsOpenPannel] = useState(false)
  function openCategoryPannel(value){
    setIsOpenPannel(value)
  }
  return (
    <>    
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button className="!text-black gap-2 !w-full !font-[500]" onClick={openCategoryPannel}>
              <RiMenu2Fill className="!text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-4">
              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Home</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Fashion</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Electronics</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Bags</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>FootWear</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Groceries</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Beauty</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Welness</Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition font-[500] text-[14px]">
                  <Button>Jwellery</Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPannel openCategoryPannel={openCategoryPannel} isOpenPannel={isOpenPannel}/>
    </>
  );
}

export default Navigation;
 