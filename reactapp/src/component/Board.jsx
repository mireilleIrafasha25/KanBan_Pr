import { FaCircleUser } from "react-icons/fa6";
import { CgLayoutGridSmall } from "react-icons/cg";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BiSolidHide, BiShowAlt } from "react-icons/bi";
import "../styles/Board.css";
import { useDarkMode } from "./context/DarkModeContext";
import DarkModeToggle from "./DarkMode";
import { useState } from "react";
import Login from "./login";

const Board = () => {
  const [modal,useModal]=useState(false);
    const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
  const { darkMode } = useDarkMode();
  const [sidebarVisible, setSidebarVisible] = useState(true); // Sidebar visibility state

  const newBoard = [
    { id: 1, name: "Platform Launch" },
    { id: 2, name: "Marketing Plan" },
    { id: 3, name: "Roadmap" }
  ];

  return (
    <div className={`Main-Board ${darkMode ? "dark" : "light"}`}>
      {modal && <Login HandleLoginForm={HandleLoginForm}/>}
      {sidebarVisible ? (
        <div className="Sidebar">
          <div className={`Login-Content ${darkMode? "dark":"light"}`}>
            <button onClick={HandleLoginForm} className={`Login-Button ${darkMode ? "dark" : "light"}`}>
              <FaCircleUser size={24} className="User-Icon" />
              <span>Log In</span>
            </button>
          </div>

          <div className="Board-Content">
            <div>ALL BOARD ({newBoard.length})</div>
            {newBoard.map((board) => (
              <div className="Board-Card" key={board.id}>
                <CgLayoutGridSmall size={24} className="Card-Icon" />
                <span>{board.name}</span>
              </div>
            ))}
            <div className="Create-NewBoard">
              <BsReverseLayoutTextSidebarReverse />
              <span>+ Create New Board</span>
            </div>

            <div className="Toggle-Icon">
              <DarkModeToggle />
            </div>

            <div className="Hide-Sidebar" onClick={() => setSidebarVisible(false)}>
              <BiSolidHide size={24} className="Hide-Icon" />
              <span>Hide Sidebar</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="Show-Sidebar" onClick={() => setSidebarVisible(true)}>
          <BiShowAlt size={24} className="Show-Icon" />
        </div>
      )}
    </div>
  );
};

export default Board;
