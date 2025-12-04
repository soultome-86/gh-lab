import { Receipt, Network, Lock, Construction, CheckCircle, FileBarChart, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function RehabPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      
      {/* 헤더 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <span className="p-2 bg-pink-100 rounded-lg text-pink-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </span>
            생활재활팀
          </h2>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-gray-500 text-lg">
            생활재활팀 실무에 자주 사용되는 스마트 도구 모음입니다.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg whitespace-nowrap">
            <CheckCircle size={14} />
            <span>모든 앱은 목포장애인요양원 서식과 데이터에 맞춰 제작되었습니다.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ✅ 1. 가계도 & 생태도 (활성) */}
        <Link href="/rehab/genogram" className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-pink-100"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-5 text-pink-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Network size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
              가계도 & 생태도
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              복잡한 가족 관계와 사회적 관계망을<br/>
              클릭 몇 번으로 시각화하여 작성합니다.
            </p>
          </div>
        </Link>

        {/* 🔨 2. 지출증빙서류 (개발 중) */}
        <div className="group relative bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 overflow-hidden cursor-not-allowed select-none">
          <div className="absolute top-4 right-4 z-20">
            {/* 개발 중 라벨 (파란색/회색 톤) */}
            <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full flex items-center gap-1">
              <Construction size={12} />
              개발 중
            </span>
          </div>
          <div className="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-5 text-gray-400 shadow-sm">
              <Receipt size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              지출증빙 도우미
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              영수증 사진만 올리면 지출결의서가 뚝딱.<br/>
              번거로운 풀칠과 서류 작업에서 해방되세요.
            </p>
          </div>
          {/* 잠금 화면 */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mb-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Lock size={20} />
            </div>
            <span className="text-gray-800 font-bold text-sm">기능 개발 진행 중</span>
          </div>
        </div>

        {/* 💡 3. 연간 평가 통합 시스템 (준비 중 - 아이디어 단계) */}
        <div className="group relative bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 overflow-hidden cursor-not-allowed select-none">
          <div className="absolute top-4 right-4 z-20">
            {/* 준비 중 라벨 (노란색 톤) */}
            <span className="px-3 py-1 bg-amber-100 text-amber-600 text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={12} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 group-hover:opacity-80 transition-all duration-500">
            <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-5 text-gray-400 shadow-sm">
              <FileBarChart size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              연간 평가 통합 시스템
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              월별 평가 데이터를 자동으로 합산하여<br/>
              연간 평가 보고서를 쉽게 완성하세요.
            </p>
          </div>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Lightbulb size={20} />
            </div>
            <span className="text-gray-800 font-bold text-sm">아이디어 구상 중</span>
          </div>
        </div>

      </div>
    </div>
  );
}