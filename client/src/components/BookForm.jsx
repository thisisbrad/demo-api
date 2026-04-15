import { useState, useEffect } from "react";

export function BookForm({ onSubmit, editing }) {
  const handleSubmit = (e) => {
    //
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    // console.log();
    // console.log(">>>", e.event.value);
    onSubmit(Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book Title"></input>
      <input type="text" name="averageRating" placeholder="Book Rating"></input>
      <button type="submit">Create Book</button>
    </form>
  );
}
