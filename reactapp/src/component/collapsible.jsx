import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/collapsible.css"; 

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible">
              {isOpen && <div className="collapsible-content">{children}</div>}
      <div className="collapsible-header" onClick={toggleCollapse}>
        <span className="collapsible-title">{title}</span>
        <span className="collapsible-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

    </div>
  );
};

export default Collapsible;
