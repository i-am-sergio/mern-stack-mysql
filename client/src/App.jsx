import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 px-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="new" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
