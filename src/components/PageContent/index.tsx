import React from "react";
import Tasks from "./Tasks";
import Filters from "./Filters";

const PageContent = () => {
  return (
    <main className="page-content-container">
      <header className="content-header">
        <h1>Coздание задачи</h1>
      </header>
      <div className="page_tasks_wrapper">
        <Tasks />
        <Filters />
      </div>
    </main>
  );
};

export default PageContent;
