import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-zinc-800 p-8 flex justify-center">
      <div className="max-w-2xl w-full bg-surface rounded-3xl shadow-xl p-8 overflow-y-auto">
        <Link href="/" className="text-zinc-400 hover:text-zinc-600 mb-6 inline-block">← 홈으로</Link>
        <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>STOCK MIND(이하 "본 서비스")는 이용자의 개인정보를 중요시하며, 관련 법령을 준수합니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">1. 개인정보의 수집 및 이용 목적</h2>
          <p>본 서비스는 별도의 회원가입 없이 이용 가능하며, 테스트 결과 생성을 위해 입력하신 '별명'은 브라우저 상의 결과 노출용으로만 사용되며 서버에 별도로 저장되지 않습니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">2. 쿠키 및 광고 서비스 이용</h2>
          <p>본 서비스는 구글 애드센스(Google AdSense)를 통해 광고를 게재합니다. 구글은 쿠키를 사용하여 사용자의 웹사이트 방문 기록을 바탕으로 최적화된 광고를 제공합니다. 사용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있습니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">3. 개인정보의 보관 기간</h2>
          <p>본 서비스는 사용자의 데이터를 서버에 저장하지 않으므로 파기 절차가 별도로 필요하지 않습니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">4. 문의사항</h2>
          <p>본 방침에 대한 문의사항은 개발자에게 연락주시기 바랍니다.</p>
        </div>
      </div>
    </div>
  );
}
