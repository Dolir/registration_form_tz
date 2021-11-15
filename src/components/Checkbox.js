import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function Checkbox({ onChange }) {
  const [toggleCheckbox, setToggleCheckbox] = useState(false)

  useEffect(() => {
    if (onChange)
      onChange({ target: { value: toggleCheckbox, name: "agreement" } })
  }, [toggleCheckbox])
  return (
    <div
      className={`checkbox ${toggleCheckbox ? "checkbox-active" : ""}`}
      onClick={() => setToggleCheckbox(!toggleCheckbox)}
    >
      {toggleCheckbox ? (
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
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        ""
      )}
    </div>
  )
}

export default Checkbox
