import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api";
import NotFound from "./pages/NotFound";

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  link: string;
}

function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Project[]>("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="p-10 text-xl font-semibold">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-6">
        Hii Everyone, This is My Portfolio Website. I am working on it 🚀
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              🛠 {project.tech_stack}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* catch-all route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
