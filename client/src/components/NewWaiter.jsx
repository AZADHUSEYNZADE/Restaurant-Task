import React from "react";

function NewWaiter() {
  return (
    <>
      <div>
        <label>
          Number
          <input type="text" placeholder="add number" />
        </label>
        <input type="text" placeholder="add name" />
        <input type="text" placeholder="add surname" />
        <input type="text" placeholder="add gender" />
        <input type="text" placeholder="add email" />
        <input type="text" placeholder="add birthday" />
        <input type="file" placeholder="add image" />
      </div>
      <button>Save</button>
    </>
  );
}

export default NewWaiter;
