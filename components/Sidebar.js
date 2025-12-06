"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Heart, Briefcase, FlaskConical, Settings, MessageCircle } from "lucide-react";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 리스트
  const menuItems = [
    { name: "홈 (Home)", icon: Home, href: "/" },
    { name: "생활재활팀", icon: Heart, href: "/rehab" },
    { name: "지원사무국", icon: Briefcase, href: "/admin" },
    { name: "디지털 연구소", icon: FlaskConical, href: "/lab" },
    { name: "설정", icon: Settings, href: "/settings" },
  ];

  // 다크모드 및 보안 코드
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row font-sans text-gray-900 dark:text-gray-100 select-none transition-colors duration-300">
      
      {/* 1. 모바일 헤더 (z-50으로 최상단 고정) */}
      <div className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b dark:border-gray-700 md:hidden shadow-sm sticky top-0 z-50">
        <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">GH-Lab <span className="text-xs text-gray-400 font-normal align-top">Beta</span></span>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2. 사이드바 (z-40, 모바일 상단 여백 pt-16 추가) */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0
          pt-16 md:pt-0 
        `}
      >
        <div className="p-6 h-full flex flex-col">
          {/* PC 로고 */}
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 hidden md:block">
            GH-Lab <span className="ml-1 text-xs text-gray-400 font-medium align-top">Beta</span>
          </Link>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center p-3 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors group" onClick={() => setIsOpen(false)}>
                <item.icon size={20} className="mr-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* 개발자 배지 (이름 수정됨) */}
          <div className="pt-6 border-t dark:border-gray-700 mt-auto">
             <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">DY</div>
              <div>
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300">Developed by</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">DaeYeong Kim</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. 모바일 오버레이 (z-30) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 4. 메인 콘텐츠 */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        
        {/* 푸터 (이름 수정됨) */}
        <footer className="mt-16 pt-8 pb-4 border-t dark:border-gray-700 text-center text-gray-400 text-xs leading-relaxed">
          <p className="mb-2 font-bold text-gray-500 dark:text-gray-400">GH-Lab (Beta)</p>
          <p className="max-w-2xl mx-auto mb-4">
            본 서비스는 <strong>사회복지 현장의 디지털 혁신</strong>을 위한 <strong>DaeYeoung Kim</strong> 개인의 연구용 서비스입니다.<br className="hidden md:block"/>
            사전 고지 없이 서비스가 종료될 수 있으며 중요 데이터는 별도 백업하시기 바랍니다.
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="mailto:soultome86@kakao.com" className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline decoration-dotted">
              <span>이메일 문의</span>
            </a>
            <span className="text-gray-300">|</span>
            <a href="https://open.kakao.com/o/s1pQK34h" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-500 hover:text-[#FEE500] hover:bg-black hover:px-2 hover:py-0.5 hover:rounded-md transition-all">
              <MessageCircle size={14} />
              <span>카카오톡 문의</span>
            </a>
          </div>

          <p className="font-medium">Copyright © 2025 DaeYeoung Kim. All rights reserved.</p>
        </footer>
      </main>
      
    </div>
  );
}