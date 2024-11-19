import React, { useState } from "react";

// Test data - Do not modify
const employees = [
  { id: 1, name: "Alice", shift: "Unassigned" },
  { id: 2, name: "Bob", shift: "Unassigned" },
  { id: 3, name: "Charlie", shift: "Unassigned" },
  { id: 4, name: "Diana", shift: "Unassigned" },
  { id: 5, name: "Edward", shift: "Unassigned" },
];

// Shift times
const time = {
  Morning: "6:00 AM - 2:00 PM",
  Afternoon: "2:00 PM - 10:00 PM",
  Night: "10:00 PM - 6:00 AM",
  Unassigned: "No shift assigned",
};

// Shift color
const color = (shift) => {
  if (shift === "Morning") {
    return "#FFF9C4"; // Light yellow
  } else if (shift === "Afternoon") {
    return "#BBDEFB"; // Light blue
  } else if (shift === "Night") {
    return "#E1BEE7"; // Light purple
  } else {
    return "#E0E0E0"; // Light gray for Unassigned
  }
};

function App() {
  // state
  const [shifts, setShifts] = useState(employees);

  // Change
  const updateShift = (id, newShift) => {
    setShifts((abcDEF) =>
      abcDEF.map((employee) => {
        if (employee.id === id) {
          return { ...employee, shift: newShift };
        } else {
          return employee;
        }
      })
    );
  };

  // Reset
  const resetShifts = () => {
    setShifts((abcDEF) =>
      abcDEF.map((employee) => ({ ...employee, shift: "Unassigned" }))
    );
  };

  // Col
  const col = () => {
    let counts = {
      Unassigned: 0,
      Morning: 0,
      Afternoon: 0,
      Night: 0,
    };

    shifts.forEach((employee) => {
      counts[employee.shift] += 1;
    });

    return counts;
  };

  // Count
  const count = col();

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1 className="p-4">Employee Shift Assignment</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {["Unassigned", "Morning", "Afternoon", "Night"].map((llLLL) => (
          <div
            key={llLLL}
            style={{
              flex: 1,
              margin: "5px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: color(llLLL),
            }}
          >
            <h5>{llLLL}</h5>
            <p className="m-0">{count[llLLL]}</p>
          </div>
        ))}
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {shifts.map((employee) => (
          <li
            key={employee.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: color(employee.shift),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{employee.name}</strong>
                <br />
                <span>{employee.shift}</span>
                <br />
                {employee.shift !== "Unassigned" && (
                  <small>{time[employee.shift]}</small>
                )}
              </div>
              <select
                value={employee.shift}
                onChange={(event) => {
                  updateShift(employee.id, event.target.value);
                }}
                style={{
                  backgroundColor: color(employee.shift),
                }}
              >
                <option value="Unassigned">Unassigned</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-danger w-100 mt-4"
        onClick={() => {
          const confirmReset = window.confirm(
            "Are you sure you want to reset all shifts?"
          );
          if (confirmReset) {
            resetShifts();
          }
        }}
      >
        Reset All Shifts
      </button>
    </div>
  );
}

export default App;
