import { Receipt, Network, Lock, Construction, CheckCircle, FileBarChart, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function RehabPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up pb-10">
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <span className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </span>
            생활재활팀
          </h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg">
            생활재활팀 실무에 자주 사용되는 스마트 도구 모음입니다.
          </p>
          <div className="w-fit flex items-start gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-2 rounded-lg">
            <CheckCircle size={14} className="mt-0.5 shrink-0" />
            <span className="whitespace-normal break-keep text-left">
              모든 앱은 목포장애인요양원 서식과 데이터에 맞춰 제작되었습니다.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {/* 1. 가계도 (활성) */}
        <Link href="/rehab/genogram" className="group relative bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex md:block items-center gap-4">
          <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-pink-50 dark:bg-pink-900/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/20"></div>
          <div className="relative z-10 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Network className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              가계도 & 생태도
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
              복잡한 가족 관계와 사회적 관계망을 클릭 몇 번으로 시각화하여 작성합니다.
            </p>
          </div>
        </Link>

        {/* 2. 연간 평가 (준비 중) */}
        <div className="group relative bg-gray-50 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden cursor-not-allowed select-none flex md:block items-center gap-4">
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={10} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 group-hover:opacity-80 transition-all duration-500 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              <FileBarChart className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10 opacity-60">
            <h3 className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-500 mb-1 md:mb-2">
              연간 평가 통합
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm leading-relaxed">
              월별 평가 데이터를 합산하여 연간 보고서를 생성합니다.
            </p>
          </div>
        </div>

        {/* 3. 지출증빙 (개발 중) */}
        <div className="group relative bg-gray-50 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden cursor-not-allowed select-none flex md:block items-center gap-4">
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1">
              <Construction size={10} />
              개발 중
            </span>
          </div>
          <div className="relative z-10 opacity-60 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              <Receipt className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10 opacity-60">
            <h3 className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-500 mb-1 md:mb-2">
              지출증빙 도우미
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm leading-relaxed">
              영수증 사진만 올리면 지출결의서가 뚝딱 완성됩니다.
            </p>
          </div>
          <div className="hidden md:flex absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[1px] flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <Lock size={20} className="text-gray-800 dark:text-white" />
            <span className="text-gray-800 dark:text-white font-bold text-sm mt-1">개발 진행 중</span>
          </div>
        </div>

      </div>
    </div>
  );
}