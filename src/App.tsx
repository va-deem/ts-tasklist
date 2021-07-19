import React, { useEffect } from "react";
import "./app.scss";
import provideTasks from "./data/mock-tasks";
import { ITaskCard } from "./types";

import NavMenu from "./components/NavMenu";
import PageContent from "./components/PageContent";

import { fetchTaskList } from "./state/reducer";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data: Array<ITaskCard> = await provideTasks();
        console.log("data", data);
        dispatch(fetchTaskList(data));
      } catch (e) {
        console.log(e);
      }
    };
    void fetchTasks();
  });

  return (
    <div className="App">
      <NavMenu />
      <PageContent />
    </div>
  );
}

export default App;
