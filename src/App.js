import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mbti from "./pages/Mbti";
import Community from "./pages/Community/Community";
import PostCommunity from "./pages/Community/Create-post";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Result from "./pages/Result";
import ResultRedirect from "./pages/ResultRedirect";
import PostDetail from "./pages/Community/PostDetail";
import Zzim from "./pages/Zzim";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <div className="bg-[url('./img/bg.jpg')] bg-cover h-screen">
        <div className="bg-orange-50 w-[632px] h-screen m-auto">
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/join" element={<Join />} />
                <Route path="/zzim" element={<Zzim />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mbti" element={<Mbti />} />
                <Route path="/community" element={<Community />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/create-post" element={<PostCommunity />} />
                <Route path="/result" element={<ResultRedirect />} />
                <Route path="/:mbti/result" element={<Result />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
