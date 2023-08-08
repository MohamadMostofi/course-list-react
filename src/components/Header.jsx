import React from "react";
const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => {
          return <div key={s}>{s}</div>;
        })}
      </div>
    </div>
  );
}

export default Header;
