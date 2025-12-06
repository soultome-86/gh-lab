import { MoveLeft, MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 select-none py-10">
      
      {/* 라벨 */}
      <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold rounded-full tracking-wide border border-indigo-100 dark:border-indigo-800 shadow-sm cursor-help" title="Great Harmony: 기술과 사람의 위대한 조화">
        GH-Lab : Great Harmony of Tech & Human
      </div>

      {/* 메인 슬로건 */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
        서류는 <span className="text-indigo-600 dark:text-indigo-400">AI</span>에게,<br />
        당신은 <span className="text-pink-600 dark:text-pink-400">사람</span>에게.
      </h1>
      
      {/* 서브 슬로건 */}
      <div className="space-y-4 max-w-2xl px-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-serif italic mb-1">
            "내가 하고 싶은 자립, 내가 받고 싶은 돌봄"
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            - MISSION OF 목포장애인요양원 -
          </p>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed pt-2">
          그 <strong>본질</strong>에 집중할 수 있도록 돕는<br/>
          <strong>김대영의 디지털 실험실</strong>입니다.
        </p>
      </div>

      {/* 반응형 안내 문구 */}
      <div className="mt-12 flex flex-col items-center gap-2 text-indigo-400 dark:text-indigo-300 opacity-80">
        <div className="hidden md:flex items-center gap-2 text-sm font-medium animate-pulse">
          <MoveLeft className="animate-bounce-left" size={20} />
          <span>Start from Sidebar</span>
        </div>
        <div className="flex md:hidden flex-col items-center gap-1 text-xs font-medium animate-bounce">
          <span className="mb-1">Touch Menu to Start</span>
          <MoveUpRight size={24} />
        </div>
      </div>

    </div>
  );
}