import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  // ★ 여기를 수정했습니다!
  title: "GH-Lab : Great Harmony of Tech & Human",
  description: "서류는 AI에게, 당신은 사람에게. 김대영의 디지털 실험실",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}