import { useState } from "react";
import "./styles.css";

const Dopdown = () => {
  const [selectedOption, setSelectedOption] = useState("Chapter 1");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Hooks",
    "Use State ",
    "Use Effect",
    "Context",
    "Use Reducer",
    "Use Callback",
    "Use Memo",
    "Use Layout Effects",
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={handleToggle}>
        {selectedOption}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dopdown;
