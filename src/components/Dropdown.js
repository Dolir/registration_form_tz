import React, { useState, useEffect } from "react"

function Dropdown({ options, onChange }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    if (onChange) onChange({ target: { value: selectedOption, name: "lang" } })
  }, [selectedOption])
  return (
    <div
      className={`dropdown ${showDropdown ? "dropdown-border-active" : ""}`}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div className="dropdown-placeholder">
        {selectedOption ? (
          <span>{selectedOption}</span>
        ) : (
          <span className="select-placeholder">Язык</span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div
        className={`dropdown-content ${showDropdown ? "dropdown-active" : ""}`}
      >
        {options.map((option, i) => (
          <p name={option} key={i} onClick={(e) => setSelectedOption(option)}>
            {option}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
