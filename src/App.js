import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/header";
import Navigation from "./components/navigation";
import DevsList from "./pages/DevsList";
import ReposList from "./pages/ReposList";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <Header
          heading="Trending"
          title="See what the GitHub community is most excited about today."
        />
        <main className="container">
          <div className="card">
            <Navigation />
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route exact path="/" element={<ReposList />} />
                <Route path="/reposList" element={<ReposList />} />
                <Route path="/devsList" element={<DevsList />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </QueryClientProvider>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
