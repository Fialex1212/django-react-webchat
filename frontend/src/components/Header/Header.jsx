import { useState } from "react";
import css from "./style.module.css";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidMessageSquare, BiSolidMessageSquareDots } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__wrapper}>
          <div className={css.header__left}>
            <button className={css.menu}>
              <IoMdMenu className={css.header__icon} onClick={toggleSidebar} />
            </button>
            <label>
              <input
                className={css.header__search}
                type="text"
                placeholder="Find user or room"
              />
            </label>
          </div>
          <div className={css.header__right}>
            <div className={css.messages}>
              <BiSolidMessageSquare className={css.header__icon} />
            </div>
            <div className={css.user}>
              <FaUserCircle className={css.header__icon} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
