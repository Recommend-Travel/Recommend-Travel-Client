import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mbti from "./pages/Mbti";
import Community from "./pages/Community/Community";
import PostCommunity from "./pages/Community/Create-post";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <div className="bg-[url('./img/bg.jpg')] bg-cover h-screen">
        <div className="bg-orange-50 w-[632px] h-screen m-auto">
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element />
                <Route path="/mbti" element={<Mbti />} />
                <Route path="/community" element={<Community />} />
                <Route path="/create-post" element={<PostCommunity />} />
                <Route path="/myteam" element />
                <Route path="/proposal/:params" element />
                <Route path="/mypage" element />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
