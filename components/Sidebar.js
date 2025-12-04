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

  // 보안 코드
  useEffect(() => {
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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900 select-none">
      
      {/* 1. 모바일 헤더 */}
      <div className="bg-white p-4 flex justify-between items-center border-b md:hidden shadow-sm sticky top-0 z-20">
        <span className="font-bold text-lg text-indigo-600">GH-Lab <span className="text-xs text-gray-400 font-normal align-top">Beta</span></span>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {/* 2. PC 사이드바 */}
      <aside className={`fixed inset-y-0 left-0 z-10 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}>
        <div className="p-6 h-full flex flex-col">
          {/* PC 로고 */}
          <Link href="/" className="text-2xl font-bold text-indigo-600 mb-8 hidden md:block">
            GH-Lab <span className="ml-1 text-xs text-gray-400 font-medium align-top">Beta</span>
          </Link>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center p-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors group" onClick={() => setIsOpen(false)}>
                <item.icon size={20} className="mr-3 group-hover:text-indigo-600" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* 개발자 배지 */}
          <div className="pt-6 border-t mt-auto">
             <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">DY</div>
              <div>
                <p className="text-xs font-bold text-gray-700">Developed by</p>
                <p className="text-xs text-gray-500">DaeYeoung Kim</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        
        {/* 푸터 (Footer) */}
        <footer className="mt-16 pt-8 pb-4 border-t text-center text-gray-400 text-xs leading-relaxed">
          <p className="mb-2 font-bold text-gray-500">GH-Lab (Beta)</p>
          <p className="max-w-2xl mx-auto mb-4">
            본 서비스는 <strong>사회복지 현장의 디지털 혁신</strong>을 위한 <strong>DaeYeoung Kim</strong> 개인의 연구용 서비스입니다.<br className="hidden md:block"/>
            사전 고지 없이 서비스가 종료될 수 있으며 중요 데이터는 별도 백업하시기 바랍니다.
          </p>
          
          {/* ★ 연락처 버튼 그룹 (최종 적용됨) */}
          <div className="flex justify-center items-center gap-4 mb-4">
            {/* 1. 이메일 보내기 */}
            <a href="mailto:soultome86@kakao.com" className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors underline decoration-dotted">
              <span>이메일 문의</span>
            </a>
            
            <span className="text-gray-300">|</span>

            {/* 2. 카카오톡 오픈채팅 (링크 적용 완료!) */}
            <a href="https://open.kakao.com/o/s1pQK34h" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-500 hover:text-[#FEE500] hover:bg-black hover:px-2 hover:py-0.5 hover:rounded-md transition-all">
              <MessageCircle size={14} />
              <span>카카오톡 문의</span>
            </a>
          </div>

          <p className="font-medium">Copyright © 2025 DaeYeoung Kim. All rights reserved.</p>
        </footer>
      </main>
      
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
}