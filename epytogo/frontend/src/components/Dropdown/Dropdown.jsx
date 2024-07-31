import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";

const Dropdown = ({ title, content, halfSize = false }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`${halfSize ? styles.root_half : styles.root}`}>
      <div className={styles.title} onClick={toggleDropdown}>
        {title}
        <ArrowDown className={`${isOpen ? styles.arrow_open : styles.arrow}`} alt={`${isOpen ? "close" : "open"}`} />
      </div>
      {isOpen && (
        <div className={styles.content} onClick={handleContentClick}>
          {content && Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;