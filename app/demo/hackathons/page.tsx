import Link from 'next/link';
import { mockHackathons } from '@/lib/mockData';
import type { HackathonCategory } from '@/lib/types';

const STATUS_STYLE = {
  completed: { bar: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700', label: '완료' },
  ongoing:   { bar: 'bg-blue-500',    badge: 'bg-blue-50 text-blue-700',       label: '진행중' },
  upcoming:  { bar: 'bg-amber-400',   badge: 'bg-amber-50 text-amber-700',     label: '예정' },
};

const CATEGORY_STYLE: Record<HackathonCategory, string> = {
  '사회문제해결': 'bg-green-50 text-green-700',
  '창업·MVP':     'bg-violet-50 text-violet-700',
  '기술개발':     'bg-sky-50 text-sky-700',
  '교육·인재':    'bg-orange-50 text-orange-700',
};

export default function DemoHackathonsPage() {
  const hackathons = mockHackathons;

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
            <Link href="/admin/login" className="bg-white text-blue-700 text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
              로그인 후 실제 사용 →
            </Link>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* 사이드바 */}
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
              { icon: '🏠', label: '대시보드', href: '/demo/dashboard' },
              { icon: '📋', label: '해커톤 관리', href: '/demo/hackathons', active: true },
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
          <div className="mt-auto px-2">
            <div className="text-slate-600 text-[10px] text-center">DEMO 모드</div>
          </div>
        </aside>

        {/* 본문 */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">해커톤 관리</h1>
              <p className="text-slate-500 mt-1">총 {hackathons.length}개의 해커톤 (샘플 데이터)</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-lg">
              <span>⚠️</span>
              <span>데모 모드에서는 새 해커톤을 등록할 수 없습니다.</span>
            </div>
          </div>

          {/* 해커톤 목록 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <div>해커톤명</div>
              <div>대학교</div>
              <div>시작일</div>
              <div>카테고리</div>
              <div>상태</div>
            </div>
            {hackathons.map(h => {
              const st = STATUS_STYLE[h.status as keyof typeof STATUS_STYLE];
              const catStyle = CATEGORY_STYLE[h.category as HackathonCategory] ?? 'bg-slate-50 text-slate-700';
              const href = h.status === 'completed' ? '/demo/report' : '#';
              return (
                <Link
                  key={h.id}
                  href={href}
                  className={`grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 border-b border-slate-50 hover:bg-slate-50 transition-colors group ${
                    h.status !== 'completed' ? 'cursor-default' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${st.bar}`} />
                    <span className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                      {h.name}
                    </span>
                    {h.status === 'completed' && (
                      <span className="text-[10px] text-blue-500 font-medium hidden group-hover:inline">리포트 보기 →</span>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 flex items-center">{h.university}</div>
                  <div className="text-sm text-slate-600 flex items-center">{h.startDate}</div>
                  <div className="flex items-center">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${catStyle}`}>
                      {h.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${st.badge}`}>
                      {st.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 안내 */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-blue-400 text-lg mt-0.5">💡</span>
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">완료된 해커톤에서 성과 리포트를 확인하세요</p>
              <p className="text-xs text-blue-600">완료 상태의 해커톤을 클릭하면 참가자 역량 성장, NPS, 팀 프로젝트 현황 등이 담긴 리포트를 미리볼 수 있습니다.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-5 text-white flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">실제로 해커톤을 등록하고 싶다면?</p>
              <p className="text-blue-100 text-xs mt-0.5">어드민으로 로그인하면 해커톤 생성, 참가자 관리, 리포트 발행이 가능합니다.</p>
            </div>
            <Link href="/admin/login" className="bg-white text-blue-700 px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap">
              어드민 로그인 →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
