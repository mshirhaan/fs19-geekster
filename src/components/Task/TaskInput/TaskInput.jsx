import React, { useState } from "react";

function TaskInput({ title, onSuccess, sucessButtonTitle, onCancel }) {
  sucessButtonTitle = sucessButtonTitle || "Save";

  const [value, setValue] = useState(title);

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="title"
        id=""
      />

      <button
        onClick={() => {
          onSuccess(value);
          setValue("");
        }}
      >
        {sucessButtonTitle}
      </button>
      <button
        onClick={() => {
          onCancel();
        }}
      >
        X
      </button>
    </div>
  );
}

export default TaskInput;
