import { MoveLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-8 select-none">
      
      {/* 1. GH-Lab 라벨 */}
      <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full tracking-wide border border-indigo-100 shadow-sm cursor-help" title="Great Harmony: 기술과 사람의 위대한 조화">
        GH-Lab : Great Harmony of Tech & Human
      </div>

      {/* 2. 메인 슬로건 (작성자님 창작물 - 가장 크게) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        서류는 <span className="text-indigo-600">AI</span>에게,<br />
        당신은 <span className="text-pink-600">사람</span>에게.
      </h1>
      
      {/* 3. 서브 슬로건 (요양원 미션 인용 + 연구소 소개) */}
      <div className="space-y-4 max-w-2xl">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-lg md:text-xl text-gray-600 font-serif italic mb-1">
            "내가 하고 싶은 자립, 내가 받고 싶은 돌봄"
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            - Mission of 목포장애인요양원 -
          </p>
        </div>
        
        <p className="text-gray-500 leading-relaxed pt-2">
          그 <strong>본질</strong>에 집중할 수 있도록 돕는<br/>
          <strong>김대영의 디지털 실험실</strong>입니다.
        </p>
      </div>

      {/* 4. 안내 문구 (화살표) */}
      <div className="mt-8 flex flex-col items-center gap-2 text-indigo-400 opacity-80 animate-pulse">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MoveLeft className="animate-bounce-left" size={20} />
          <span className="hidden md:inline">Start from Sidebar</span>
          <span className="md:hidden">Start from Menu</span>
        </div>
      </div>

    </div>
  );
}