"use client";

import { useState, useEffect } from "react";
import { Settings, Shield, Eye, Trash2, Moon, Type, KeyRound, Info, Construction } from "lucide-react";

export default function SettingsPage() {
  // 상태 관리 (초기값 설정)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("100%"); // 100%가 기본

  // 1. 페이지 로드 시 저장된 설정 불러오기
  useEffect(() => {
    // 다크모드 불러오기
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // 글자 크기 불러오기
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
      setFontSize(savedSize);
      document.documentElement.style.fontSize = savedSize;
    }
  }, []);

  // 2. 다크모드 토글 함수
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // 3. 글자 크기 변경 함수
  const handleFontSizeChange = (e) => {
    const newSize = e.target.value;
    setFontSize(newSize);
    document.documentElement.style.fontSize = newSize; // 전체 배율 조정
    localStorage.setItem("fontSize", newSize);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up pb-20">
      
      {/* 헤더 */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <span className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
            <Settings size={24} />
          </span>
          환경 설정
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          앱의 보안 및 화면 환경을 설정합니다.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* 1. 보안 설정 (접속 코드 - 미구현 처리) */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center gap-2">
            <Shield size={18} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-gray-700 dark:text-gray-200">보안 및 접속</h3>
          </div>
          <div className="p-4 space-y-4">
            {/* 접속 코드 변경 (비활성화) */}
            <div className="flex items-center justify-between py-2 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-gray-600 rounded-full flex items-center justify-center text-indigo-500 dark:text-gray-400">
                  <KeyRound size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">접속 코드 관리</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">현재는 코드에서 직접 수정해야 합니다.</p>
                </div>
              </div>
              <button 
                disabled
                className="px-4 py-2 bg-gray-100 text-gray-400 text-sm rounded-lg font-medium flex items-center gap-2 cursor-not-allowed"
              >
                <Construction size={14} />
                준비 중
              </button>
            </div>
          </div>
        </section>

        {/* 2. 화면 및 접근성 (기능 구현됨) */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center gap-2">
            <Eye size={18} className="text-green-600 dark:text-green-400" />
            <h3 className="font-bold text-gray-700 dark:text-gray-200">화면 및 접근성</h3>
          </div>
          <div className="p-4 divide-y divide-gray-100 dark:divide-gray-700">
            
            {/* 다크 모드 토글 */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                  <Moon size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">다크 모드</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">눈의 피로를 줄여줍니다.</p>
                </div>
              </div>
              
              {/* 토글 스위치 (클릭 가능) */}
              <button 
                onClick={toggleDarkMode}
                className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-1 shadow-sm transition-transform duration-300 ${isDarkMode ? 'left-6' : 'left-1'}`}></div>
              </button>
            </div>

            {/* 글자 크기 조절 */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                  <Type size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">글자 크기 조절</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">전체 화면 비율을 조정합니다.</p>
                </div>
              </div>
              <select 
                value={fontSize}
                onChange={handleFontSizeChange}
                className="border border-gray-300 dark:border-gray-600 rounded-lg text-sm px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="100%">보통 (100%)</option>
                <option value="110%">크게 (110%)</option>
                <option value="125%">아주 크게 (125%)</option>
              </select>
            </div>

          </div>
        </section>

        {/* 3. 시스템 관리 */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center gap-2">
            <Info size={18} className="text-red-500" />
            <h3 className="font-bold text-gray-700 dark:text-gray-200">시스템 관리</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500">
                  <Trash2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">임시 데이터 삭제</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">브라우저 설정을 초기화합니다.</p>
                </div>
              </div>
              <button 
                onClick={() => {
                   if(confirm("설정을 초기화하시겠습니까?")) {
                      localStorage.clear();
                      window.location.reload();
                   }
                }}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-red-200 dark:border-red-800 text-red-500 text-sm rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 font-medium"
              >
                삭제하기
              </button>
            </div>
          </div>
        </section>

        {/* 버전 정보 */}
        <div className="text-center text-gray-400 text-xs py-4">
          <p>GH-Lab Beta Version 0.1.0</p>
          <p>Build 20251204.01</p>
        </div>

      </div>
    </div>
  );
}