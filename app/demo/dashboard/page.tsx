'use client';

import Link from 'next/link';
import { mockHackathons, mockParticipants, mockSurveys } from '@/lib/mockData';
import HackathonListWithTabs from '@/components/HackathonListWithTabs';
import type { HackathonCategory } from '@/lib/types';
import { useEffect, useState } from 'react';

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(duration / 60);
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

// 데이터 집계는 모듈 최상단에서 수행 (클라이언트 컴포넌트에서도 가능)
const university = '전체 (데모)';
const diagnosed = mockParticipants.filter(p => p.preScore && p.postScore).length;
const avgNps = mockSurveys.length > 0
  ? Math.round(mockSurveys.reduce((s, v) => s + v.nps, 0) / mockSurveys.length * 10)
  : 0;
const completed = mockHackathons.filter(h => h.status === 'completed').length;

const GROWTH = [
  { label: 'AI 이해도', pre: 2.7, post: 4.2 },
  { label: '도구 활용능력', pre: 2.1, post: 3.9 },
  { label: '문제 해결력', pre: 2.8, post: 4.3 },
  { label: '협업/커뮤니케이션', pre: 3.7, post: 4.6 },
  { label: '윤리적 판단력', pre: 3.2, post: 4.2 },
];

const allHackathons = mockHackathons.map(h => ({
  id: h.id,
  name: h.name,
  university: h.university,
  startDate: h.startDate,
  status: h.status,
  category: h.category as HackathonCategory,
}));

function KpiCard({
  icon,
  label,
  rawValue,
  suffix,
  sub,
  color,
  animate,
}: {
  icon: string;
  label: string;
  rawValue: number;
  suffix: string;
  sub: string;
  color: string;
  animate?: boolean;
}) {
  const counted = useCountUp(animate ? rawValue : 0, 1500);
  const displayValue = animate ? counted : rawValue;
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs font-semibold text-white px-2 py-1 rounded-full ${color}`}>Live</span>
      </div>
      <div className="text-2xl font-bold text-slate-900 mb-1">
        {displayValue}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-600">{label}</div>
      <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
    </div>
  );
}

export default function DemoDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 데모 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">DEMO</span>
            <span>샘플 데이터로 어드민 대시보드를 미리 체험하는 중입니다.</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/demo" className="text-white/70 hover:text-white text-xs transition-colors">← 데모 소개로</Link>
          </div>
        </div>
      </div>

      {/* ✨ 유도 배너 */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 text-sm text-amber-800">
          <span className="text-lg">✨</span>
          <span className="font-semibold">귀 대학에 적용하면 이런 대시보드를 보게 됩니다.</span>
          <span className="text-amber-600">지금은 샘플 데이터 기준입니다. 도입 후 실제 해커톤 데이터가 실시간으로 반영됩니다.</span>
        </div>
      </div>

      {/* 사이드바 + 메인 */}
      <div className="flex min-h-screen">
        {/* 미니 사이드바 */}
        <aside className="w-56 bg-slate-900 flex flex-col py-6 px-4 flex-shrink-0">
          <div className="flex items-center gap-2.5 mb-8 px-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">UD</div>
            <div>
              <div className="text-white text-xs font-semibold leading-tight">유디임팩트</div>
              <div className="text-slate-400 text-[10px]">운영진 관리</div>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { icon: '🏠', label: '대시보드', href: '/demo/dashboard', active: true },
              { icon: '📋', label: '해커톤 관리', href: '/demo/hackathons' },
            ].map(item => (
              <a key={item.label} href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}>
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-2 space-y-3">
            <div className="text-slate-600 text-[10px] text-center mb-2">DEMO 모드</div>
            <a
              href="https://forms.gle/GRcf2iNKxL21ys5B9"
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-colors"
            >
              📩 도입 문의
            </a>
          </div>
        </aside>

        {/* 대시보드 본문 */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">대시보드</h1>
            <p className="text-slate-500 mt-1">{university} 해커톤 성과 현황 (샘플 데이터)</p>
          </div>

          {/* KPI 카드 (카운트업) */}
          <div className="grid grid-cols-4 gap-5 mb-8">
            <KpiCard
              icon="🏆"
              label="총 해커톤"
              rawValue={mockHackathons.length}
              suffix="건"
              sub={`완료 ${completed}건`}
              color="bg-blue-600"
              animate
            />
            <KpiCard
              icon="👥"
              label="총 참가자"
              rawValue={mockParticipants.length}
              suffix="명"
              sub="역대 누적"
              color="bg-emerald-600"
              animate
            />
            <KpiCard
              icon="📊"
              label="역량 진단 완료"
              rawValue={diagnosed}
              suffix="명"
              sub={`완료율 ${Math.round(diagnosed / mockParticipants.length * 100)}%`}
              color="bg-violet-600"
              animate
            />
            <KpiCard
              icon="⭐"
              label="평균 NPS"
              rawValue={avgNps}
              suffix="점"
              sub="참가자 만족도"
              color="bg-orange-500"
              animate
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* 해커톤 목록 */}
            <HackathonListWithTabs hackathons={allHackathons} demoMode />

            {/* AI 역량 성장 요약 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-slate-800">AI 역량 평균 성장</h2>
                <span className="text-xs text-slate-400">샘플 데이터</span>
              </div>
              {GROWTH.map(item => {
                const growth = item.post - item.pre;
                const postPct = (item.post / 5) * 100;
                return (
                  <div key={item.label} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600">{item.label}</span>
                      <span className="text-xs font-semibold text-emerald-600">+{growth.toFixed(1)} ▲</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-slate-400 w-10 text-right">{item.pre}</div>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: `${postPct}%` }}></div>
                      </div>
                      <div className="text-xs font-bold text-blue-600 w-10">{item.post}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 하단 CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white text-center">
            <h3 className="text-lg font-bold mb-2">귀 대학 해커톤에 도입하려면?</h3>
            <p className="text-blue-100 text-sm mb-4">문의 주시면 맞춤 시연과 함께 도입 안내를 제공해드립니다.</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/demo/report" className="bg-white text-blue-700 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                성과 리포트 미리보기 →
              </Link>
              <a href="https://forms.gle/GRcf2iNKxL21ys5B9" className="bg-white/20 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/30 transition-colors border border-white/30">
                📩 도입 문의하기
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
