import { useEffect, useState } from "react";
import "./calculator.css";

function calculator() {
  const [display, setDisplay] = useState("0");

  const calculate = (value) => {
    if (value === "AC") {
      setDisplay("0");
      return;
    }

    if (value === "DEL") {
      setDisplay((prev) =>
        prev.length === 1 ? "0" : prev.slice(0, -1)
      );
      return;
    }

    if (value === "=") {
      try {
        const expression = display
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");

        const result = Function(
          `"use strict"; return (${expression})`
        )();

        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }

      return;
    }

    if (display === "Error") {
      setDisplay(value);
      return;
    }

    if (
      display === "0" &&
      !["+", "-", "×", "÷", "%", "."].includes(value)
    ) {
      setDisplay(value);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  // Keyboard / Numpad support
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      // Numbers 0-9
      if (/^[0-9]$/.test(key)) {
        calculate(key);
      }

      // Numpad decimal / normal decimal
      else if (key === "." || key === "Decimal") {
        calculate(".");
      }

      // Operators
      else if (key === "+") {
        calculate("+");
      }

      else if (key === "-") {
        calculate("-");
      }

      else if (key === "*" || key === "Multiply") {
        calculate("×");
      }

      else if (key === "/" || key === "Divide") {
        event.preventDefault();
        calculate("÷");
      }

      // Enter = calculate
      else if (key === "Enter" || key === "=") {
        calculate("=");
      }

      // Escape = clear
      else if (key === "Escape") {
        calculate("AC");
      }

      // Backspace = delete
      else if (key === "Backspace") {
        calculate("DEL");
      }

      // Percentage
      else if (key === "%") {
        calculate("%");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [display]);

  const buttons = [
    "AC", "DEL", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">

        <div className="display">
          {display}
        </div>

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => calculate(button)}
              className={`
                ${button === "=" ? "equals" : ""}
                ${
                  ["÷", "×", "-", "+"].includes(button)
                    ? "operator"
                    : ""
                }
                ${
                  ["AC", "DEL", "%"].includes(button)
                    ? "special"
                    : ""
                }
              `}
            >
              {button}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default calculator