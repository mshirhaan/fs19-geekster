import React from "react";
import useToggle from "./useToggle";

function Settings() {
  const { value, toggleValue } = useToggle(false);

  return (
    <div>
      <p>Settings</p>
      {value && (
        <div>
          <p>Admin Settings</p>
        </div>
      )}

      <div>Normal Settings</div>

      {!value ? (
        <button onClick={toggleValue}>Show Admin Settings</button>
      ) : (
        <button onClick={toggleValue}>Hide Admin Settings</button>
      )}
    </div>
  );
}

export default Settings;
