import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const RESULT_DETAILS: Record<
  string,
  { 
    title: string; 
    description: string; 
    accent: string; 
    imageFile: string;
    analysis: string;
    pattern: string;
    advice: string;
    warning: string;
  }
> = {
  DGRN: {
    title: "상장폐지 수집가",
    description: "휴지조각 수집이 취미인 마이너스의 손.",
    accent: "blue",
    imageFile: "DGRN.jpg",
    analysis: "심리학적으로 이 성향은 '매몰 비용 오류(Sunk Cost Fallacy)'를 가장 강하게 겪는 그룹입니다. 원금 회복에 대한 집착이 강해, 기업이 청산 가치조차 상실한 상황에서도 공격적으로 추가 매수를 시도하는 경향을 보입니다. 정보의 선택적 수용(Confirmation Bias)이 극대화되어 시장의 경고 신호를 '세력의 흔들기'로 오인하는 경우가 많습니다.",
    pattern: "주로 거래량이 소멸된 관리종목이나 상장폐지 실질심사 대상 종목에서 높은 포지션을 유지합니다. 변동성이 극도로 높은 잡주(Penny Stocks)에 자산의 70% 이상을 배분하며, 리스크 헷징 수단으로 인버스를 활용하기보다는 무조건적인 버티기(Holding) 전략을 고수합니다.",
    advice: "현재의 포트폴리오는 투자가 아닌 투기적 성격이 짙습니다. 자산 다각화(Asset Allocation) 개념을 도입하여 우량주 비중을 최소 50%까지 상향 조정해야 합니다. 손절선(Stop-loss)을 기계적으로 -15%에 설정하여 생존 편향에서 벗어나는 것이 시급합니다.",
    warning: "시장의 유동성이 축소되는 고금리 시기에는 한계 기업의 도산 위험이 급증하므로, 재무제표 상 자본잠식 상태인 종목은 즉시 정리해야 합니다."
  },
  FMOD: {
    title: "상따 중독 포모충",
    description: "남 벌 때 못 벌면 혈압 올라서 고점 매수하는 뇌.",
    accent: "red",
    imageFile: "FMOD.jpg",
    analysis: "FOMO(Fear Of Missing Out) 증후군이 투자 심리의 90%를 지배합니다. 시장의 상승 모멘텀에서 소외되는 것을 물리적 고통으로 느끼며, 이는 뇌의 전두엽보다 가시적인 수익에 반응하는 편도체가 활성화된 상태입니다. 남들의 성공 사례를 보고 추격 매수할 때 도파민 수치가 정점에 달하며 냉정한 판단력을 상실합니다.",
    pattern: "실시간 급등주 검색 상위 종목에 즉각적으로 반응합니다. RSI(상대강도지수)가 80을 넘어선 과매수 구간에서 대량 매수를 체결하며, 주가가 조정을 받기 시작하는 변곡점에서 주로 고점 매수(Peak Buying)를 담당하는 유동성 공급자 역할을 수행합니다.",
    advice: "매수 버튼을 누르기 전 24시간 대기 법칙을 적용하십시오. 단기적 가격 상승(Price Surge)은 대개 개인 투자자를 유인하는 함정일 확률이 높습니다. 차트의 기술적 지표보다는 기업의 펀더멘털과 PER, PBR 지표를 대조하는 습관을 들여 이성적 투자를 회복해야 합니다.",
    warning: "테마주 순환매가 빠른 장세에서는 자산이 '녹아내리는' 속도가 상상을 초월합니다. 급등 뒤에는 반드시 급락이 온다는 회귀 이론을 명심하십시오."
  },
  YOLO: {
    title: "한강뷰 아니면 입수",
    description: "인생 한 방에 건 노빠꾸 야수의 심장.",
    accent: "red",
    imageFile: "YOLO.png",
    analysis: "공격적 위험 성향(Aggressive Risk Tolerance)이 극단에 달한 케이스입니다. 투자 자산을 삶의 질 개선을 위한 수단이 아닌, '도박의 칩'으로 인식하는 경향이 있습니다. 확률적 기대값보다는 '잭팟'의 크기에 매몰되어 파산 위험(Risk of Ruin)을 무시합니다. 이는 심리적으로 매우 불안정한 과잉 자신감(Overconfidence) 상태를 반영합니다.",
    pattern: "미수, 신용 대출을 풀가동하여 레버리지를 2배 이상 사용하는 '풀베팅' 패턴을 보입니다. 해외 옵션 시장이나 변동성이 100%를 상회하는 신규 상장주에 집중 투자하며, 단 한 번의 실패로 전 재산을 탕진할 수 있는 집중 투자(Concentrated Investment)를 선호합니다.",
    advice: "복리의 마법은 장기 생존자에게만 허락됩니다. 레버리지 사용을 즉각 중단하고, 최소한의 생활 자금은 현금성 자산(MMF, CMA)으로 분리하십시오. 자산 분산은 수익률을 깎는 것이 아니라 손실을 방어하여 결과적으로 최종 수익을 높이는 전략임을 깨달아야 합니다.",
    warning: "변동성 큰 야간 시장에서의 뇌동매매는 최악의 결과를 초래합니다. 시스템 트레이딩 솔루션을 도입하거나 예약 주문 기능을 사용하여 감정을 배제하십시오."
  },
  HODL: {
    title: "망부석 좀비",
    description: "수익률 -95%에도 아직 안 팔았으니 손해 아니라는 분.",
    accent: "blue",
    imageFile: "HODL.jpg",
    analysis: "비자발적 장기 투자자로 전환된 상태로, '손실 회피 편향(Loss Aversion Bias)'의 전형적인 모습입니다. 손실을 확정 짓는 순간을 자신의 실패로 간주하여 심적 회계(Mental Accounting) 상에서 포지션을 닫지 못합니다. 시간이 해결해 줄 것이라는 막연한 낙관주의 뒤에는 현실 부정의 심리가 숨어 있습니다.",
    pattern: "한때 시장 주도주였으나 현재는 소외된 종목들을 다수 보유하고 있습니다. 평균 매수 단가는 저항선 아래에 형성되어 있으나, 지속적인 하락 추세(Downtrend)에서도 교체 매매를 하지 않습니다. '언젠가는 원금이 오겠지'라는 마인드로 배당금이 없는 종목조차 무기한 보유합니다.",
    advice: "기회비용(Opportunity Cost)을 계산해 보십시오. 죽은 종목에 묶인 자금을 유망한 성장주나 안정적인 ETF로 옮겼을 때의 기대 수익률이 훨씬 높습니다. 포트폴리오의 리밸런싱을 통해 현재 가치가 있는 자산으로 구성원을 교체해야 합니다.",
    warning: "산업 자체가 사양길에 접어든 종목은 영원히 반등하지 않습니다. 순이익 성장세가 꺾인 종목이라면 냉정하게 손절하고 새로운 기회에 투자하십시오."
  },
  ALGO: {
    title: "방구석 워런 버핏",
    description: "차트 선 긋다 밤새고 세력 탓만 하는 선무당.",
    accent: "neon",
    imageFile: "ALGO.png",
    analysis: "지적 오만(Intellectual Arrogance)이 투자 오류의 핵심입니다. 방대한 정보를 수집하고 분석한다고 믿지만, 실제로는 '사후 확신 편향(Hindsight Bias)'을 통해 지나간 차트에 자신의 논리를 끼워 맞추는 작업에 몰두합니다. 시장을 예측할 수 있다는 과도한 믿음이 투자 시점(Market Timing) 포착을 방해합니다.",
    pattern: "엘리어트 파동, 골든 크로스 등 기술적 분석 용어를 남발하며 잦은 매매 시그널을 생성합니다. 그러나 정작 중요한 거시 경제 흐름이나 기업 실적 발표에는 둔감하며, 예상과 다른 주가 흐름이 나타날 경우 데이터의 오류가 아닌 외부 세력의 개입 탓으로 돌립니다.",
    advice: "완벽한 예측은 불가능함을 인정하십시오. 예측보다는 대응의 영역인 자산 배분 전략과 적립식 투자(DCA)를 도입하는 것이 실질적 수익률 향상에 도움을 줄 것입니다. 이론적 공부보다는 실제 수익 모델의 백테스팅 결과를 중시해야 합니다.",
    warning: "자신의 분석이 틀렸음을 인정하지 않고 고집을 피우면 손실이 기하급수적으로 커집니다. 시장의 가격은 항상 옳다는 기술적 분석의 대전제를 다시 상기하십시오."
  },
  STRE: {
    title: "1분봉 노예",
    description: "주가 10원 하락에 수명 1시간씩 단축되는 유리 멘탈.",
    accent: "blue",
    imageFile: "STRE.jpg",
    analysis: "도파민 수용체가 단기 시세 변동에 완전히 중독된 상태입니다. 중장기적 가치보다는 초단위 호가창의 움직임에 심박수가 연동되며, 이는 정서적 불안정과 집중력 저하로 이어집니다. 투자를 경제 활동이 아닌 스트레스 누적 창구로 사용하고 있는 위험한 심리 상태입니다.",
    pattern: "초단타 매매(Scalping)에 집착하며 하루에도 수백 번의 매수를 체결합니다. 거래 수수료와 세금(Slippage)을 고려하면 실질 수익은 마이너스인 경우가 많습니다. 1분봉 차트의 미세한 파동에 일희일비하며 매매 일관성이 결여된 즉兴적 거래를 반복합니다.",
    advice: "HTS/MTS 접속 시간을 하루 2회 이내로 제한하십시오. 시야를 일봉, 주봉 단위로 넓혀야 '노이즈'와 '진짜 신호'를 구분할 수 있습니다. 명상이나 운동을 통해 시세 중독에서 벗어나고, 자동 매수/매도 기능을 활용해 뇌동매매를 방지하십시오.",
    warning: "만성적인 투자 스트레스는 건강뿐 아니라 일상 생활 체계를 무너뜨립니다. 차트를 보지 않을 때 불안감을 느낀다면 전문적인 상담이나 휴식을 권장합니다."
  },
  CHIK: {
    title: "익절병 환자",
    description: "0.5%만 빨간불 들어와도 치킨 사 먹는 쫄보.",
    accent: "neon",
    imageFile: "CHIK.jpg",
    analysis: "상승장에서 소외될까 두려워하는 포모와 반대로, 번 돈을 잃을까 두려워하는 '불확실성 혐오(Uncertainty Aversion)'가 두드러집니다. 작은 수익이라도 확정 지어야 심리적 안정을 찾지만, 이는 큰 대세 상승 흐름에서 수익을 극대화하지 못하게 만드는 심각한 장애 요인이 됩니다.",
    pattern: "수지 수익률 1~3% 구간에서 전량 매도를 실행합니다. 이른바 '줄먹(줄 때 먹기)' 전략을 사용하지만, 정작 하락 시에는 손절을 하지 못해 '작게 먹고 크게 잃는' 마이너스 복리 구조를 형성합니다. 우량주보다는 변동성이 큰 종목에서 단기 차익 실현에 치중합니다.",
    advice: "트레일링 스탑(Trailing Stop) 기법을 배우십시오. 주가가 오를 때 매도 시점을 같이 올리며 오르는 추세를 끝까지 타는 연습이 필요합니다. '이익은 길게, 손실은 짧게'라는 투자 격언을 포트폴리오 전체 수익 모델에 적용해 보십시오.",
    warning: "확정된 수익이 작으면 거래 비용이 차지하는 비중이 커져 계좌가 서서히 녹아내립니다. 매매 횟수를 줄이고 한 번의 큰 추세를 잡는 데 집중하십시오."
  },
  GHOST: {
    title: "비번 까먹은 시체",
    description: "강제 장기투자 중인 계좌 주인 (생사불명).",
    accent: "blue",
    imageFile: "GHOST.jpg",
    analysis: "극도의 회피 동기(Avoidance Motivation)가 작용한 결과입니다. 평가 손실이 너무 커져서 계좌를 들여다보는 것 자체가 트라우마가 된 상태입니다. 무의식은 이를 방어하기 위해 계좌 비밀번호를 망각하거나 웹사이트 로그인을 거부하는 행동 양식을 보입니다. 사실상의 '죽은 계좌' 방치 상태입니다.",
    pattern: "수년 전 붐이었던 테마주나 코인, 해외 주식 등을 보유 중입니다. 배당 공지나 주주총회 통지서가 와도 무시하며, 시장의 큰 변동(코로나 팬데믹, 고금리 등)에도 전혀 대응하지 않아 자산 가치가 휴지 조각이 된 경우가 빈번합니다.",
    advice: "용기를 내어 계좌를 열고 '상황 파악'부터 하십시오. 증권사 방문을 통해 비밀번호를 초기화하고 현재 보유 자산 중 잔존 가치가 있는 것과 청산해야 할 것을 분류해야 합니다. 방치는 투자가 아닌 자산 유기임을 명심하십시오.",
    warning: "상장폐지 결정 전 정리매매 등의 마지막 탈출 기회마저 놓치게 되면 자금 회수는 영원히 불가능해집니다. 최소한 분기별 1회는 정기 검진을 하십시오."
  },
  NEWS: {
    title: "찌라시 하이에나",
    description: "카톡방 '카더라'에 전 재산 태우는 정보 호구.",
    accent: "red",
    imageFile: "NEWS.jpg",
    analysis: "심리학적으로 '권위에 대한 복종 편향' 및 '집단 동조 현상'이 강합니다. 스스로 분석하기보다는 남이 정해준 답을 선호하며, 익명의 단체 대화방이나 유튜브 전문가가 던지는 '확실한 정보'라는 미끼에 쉽게 매료됩니다. 이는 자신의 책임을 외부로 전가하려는 보상 심리가 깔려 있는 투자 태도입니다.",
    pattern: "공식 공시보다는 '단독 기사'나 소문(Rumor)에 근거하여 매매를 결정합니다. 재료 소멸 시점을 판단하지 못해 뉴스가 뜬 직후 고점에서 물량을 받아내는 전형적인 '개미'의 행태를 반복합니다. 정보 유출자들의 설거지 포지션을 떠안는 경우가 많습니다.",
    advice: "뉴스에 팔아라는 격언을 실천하십시오. 보도된 시점의 정점은 이미 선반영된 가격입니다. 정보 채널을 유료 리서치 리포트나 공시 시스템(DART)으로 일원화하고, 검증되지 않은 소스에서 오는 모든 정보는 노이즈로 간주하고 차단해야 합니다.",
    warning: "거짓 정보(Fake News)에 의한 주가 조작 타겟이 되기 쉽습니다. 누군가 당신에게만 알려주는 정보는 이미 전 국민이 아는 정보이거나 가짜임을 자각하십시오."
  },
  MATH: {
    title: "계산기 중독자",
    description: "수익은 마이너스인데 엑셀로 복리 망상 중.",
    accent: "neon",
    imageFile: "MATH.jpg",
    analysis: "통제 환상(Illusion of Control) 편향이 강합니다. 모든 것을 수치화하고 엑셀 시트에 정리하면 미래를 통제할 수 있다고 믿습니다. 실제 시장은 비이성적이고 감정적인 대중의 합으로 움직임에도 불구하고, 이를 선형적인 수학 공식으로만 해석하려다 실제 수익 기회를 놓치는 완고한 성향입니다.",
    pattern: "목표 수익률 달성 시 나만의 복리 그래프를 그리며 행복 회로를 돌립니다. 정교한 분산 투자와 비중 조절 시스템을 구축했지만, 예상치 못한 블랙 스완(Black Swan) 이벤트가 발생하면 계산식이 깨지는 것에 패닉을 느끼고 대응 실기를 반복합니다.",
    advice: "시장은 수학보다는 심리학에 가깝다는 점을 인정하십시오. 최상의 시나리오보다는 최악의 상황 시나리오(Var, Value at Risk)를 보수적으로 설정하십시오. 엑셀 수치보다는 실제 현금 흐름(Cash Flow)과 시장의 심리 지표를 더 유심히 관찰해야 합니다.",
    warning: "숫자에 매몰되어 기업의 정성적 가치(CEO 리스크, 브랜드 가치 등)를 간과하면 안 됩니다. 정교한 모델이 항상 수익을 보장하지는 않습니다."
  },
  PRAY: {
    title: "정한수 메타",
    description: "분석은 사치, 매수 후 조상님께 비는 무속인.",
    accent: "blue",
    imageFile: "PRAY.jpg",
    analysis: "투자를 운의 영역으로 100% 치부하는 '외부 통제 소재(External Locus of Control)' 성향입니다. 본인의 분석력이 부족함을 자각하고 있지만 개선하기보다는 불확실성에 몸을 맡기고 운명론적 결과를 기대합니다. 이는 투자가 아닌 종교적 행위에 가까운 투자 방식으로 정서적 위안을 얻으려는 태도입니다.",
    pattern: "별자리 운세나 꿈 해몽, 혹은 느낌적인 '촉'에 따라 종목을 선정합니다. 매수한 이후에는 차트를 보기보다는 신께 기도하거나 커뮤니티에서 응원 글을 읽으며 위로를 얻습니다. 과학적인 하락 근거가 나와도 '조상님이 도와주실 것'이라며 비이성적 대응을 합니다.",
    advice: "운도 실력이라는 말은 철저한 준비 뒤에 오는 법입니다. 초보자를 위한 인덱스 펀드나 자산운용사의 타겟 데이트 펀드(TDF)에 투자를 일임하십시오. 본인의 직관은 투자 시장에서 적중률이 제로에 가깝다는 냉정한 현실을 받아들이고 전문가의 가이드를 따라야 합니다.",
    warning: "무속적인 믿음은 하락장에서 전혀 힘을 발휘하지 못합니다. 기도로 원금이 회복된 사례는 역사상 단 한 건도 없음을 기억하십시오."
  },
  FIRE: {
    title: "망상형 파이어족",
    description: "50만 원 투자하고 내년 강남 입주 꿈꾸는 자.",
    accent: "red",
    imageFile: "FIRE.jpg",
    analysis: "현실 도피적 경향이 강한 '희망 고문(Wishful Thinking)' 상태입니다. 노동 소득의 가치를 비하하고 오로지 투자를 통한 조기 은퇴(FIRE)만을 삶의 목표로 삼습니다. 자본의 크기와 시간의 가치를 망각한 채, 소액으로 단시간에 거대한 부를 이루려는 보상 심리가 과도한 위험 탐색 행동으로 나타납니다.",
    pattern: "수천 배의 수익률을 홍보하는 신규 코인이나 옵션, 파생상품에 소액 생계비를 모두 태웁니다. 실제 수익보다는 은퇴 후 호구 생활을 상상하는 데 더 많은 시간을 소비하며, 현실적인 저축보다는 불확실한 대박에 올인하는 전형적인 로또형 매매 패턴을 보입니다.",
    advice: "먼저 시드 머니(Seed Money)의 규모를 키우는 노동 소득에 집중하십시오. 50만 원으로 10억을 만드는 확률보다 로또 1등에 당첨될 확률이 높습니다. 월 100만 원씩 꾸준히 적립식 투자를 하는 것이 진짜 파이어족으로 가는 가장 빠른 지름길임을 자각해야 합니다.",
    warning: "조기 은퇴의 꿈이 무산될 위기에 처하면 삶 전체에 대한 허무주의에 빠질 수 있습니다. 투자 성과가 아닌 자신의 역량 강화에 선순환 투자를 하십시오."
  },
  BLUE: {
    title: "우량주 가스라이팅",
    description: '"삼전은 안 망해"라며 5년째 인질 잡힌 분.',
    accent: "blue",
    imageFile: "BLUE.jpg",
    analysis: "우량주라는 이름의 '안전 기제(Safety Mechanism)'에 집착하는 성향입니다. 시장의 주도 테마가 변했음에도 불구하고 거대 기업의 이름값이 주는 안정감에 도취되어 있습니다. 이는 심리학적으로 '현상 유지 편향(Status Quo Bias)'이 강하여 변화하는 환경에 적응하지 못하는 보수적인 투자 태도를 보입니다.",
    pattern: "시가총액 상위 10위권 이내의 종목만 포트폴리오에 담고 있습니다. 해당 기업의 성장률이 정체되어 주가가 수년째 박스권임에도 불구하고 이를 '건강한 조정'으로 치부합니다. 중소형 성장주가 날아갈 때도 자신의 종목만은 안전하다며 스스로를 위로하는 인내형 매매를 지속합니다.",
    advice: "시가총액이 크다고 해서 자본 효율이 높은 것은 아닙니다. 성장성이 담보되지 않은 거대 기업은 죽은 자본이나 다름없습니다. 시장의 흐름을 읽고 성장이 발생하는 섹터(Growth Sector)로 자산의 일부를 공격적으로 이전하여 기회 손실을 막아야 합니다.",
    warning: "거대 기업도 시대의 흐름을 놓치면 일본의 잃어버린 10년처럼 장기 우하향할 수 있습니다. 1등 기업이라는 맹신을 버리고 실적 성장률에 집중하십시오."
  },
  SHOR: {
    title: "인간 인버스",
    description: "내가 사면 고점, 팔면 저점인 기적의 지표.",
    accent: "red",
    imageFile: "SHOR.jpg",
    analysis: "부정적 자기 충족적 예언(Self-fulfilling Prophecy)의 희생양입니다. 과거의 실패 경험이 뇌에 각인되어, 매수 결정 시점에 '내가 사면 떨어지겠지'라는 불안감이 실제 행동 오류를 유발합니다. 이는 심리적으로 '불안 장애'와 '자기 효능감 저하'가 투영된 결과로, 시장의 박자와 항상 반대로 움직이는 인지 부조화 상태입니다.",
    pattern: "매수 후 1분 내 하락이 시작되면 패닉 셀링(Panic Sell)을 하고, 매도 후 주가가 오르면 다시 고점에서 추격 매수하는 '거꾸로 매매'의 달인입니다. 자신의 투자 실수를 실력 부족이 아닌 운명의 장난으로 여기며 비관적인 소외감을 느끼고 결과적으로 시장을 떠납니다.",
    advice: "자신의 촉을 완전히 무시하는 '반대로 투자'를 진지하게 고민해 보십시오. 혹은 개별 종목 매매 대신 지수 추종 ETF를 분할해서 적립하는 시스템에 본인을 맡기십시오. 매매 횟수가 많아질수록 본능적 오류가 개입하므로 매매 횟수를 최소화해야 생존할 수 있습니다.",
    warning: "계속된 손실은 자존감 하락과 우울감으로 이어질 수 있습니다. 매매 일지를 작성하여 자신의 감정 상태가 투자 결정에 미치는 영향을 객관적으로 분석하십시오."
  },
  GOLD: {
    title: "예적금 광신도",
    description: "인플레이션한테 뺨 맞으면서 현금만 쥐고 있는 자.",
    accent: "neon",
    imageFile: "GOLD.jpg",
    analysis: "극도의 위험 회피(Extreme Risk Aversion) 성향으로, 투자 자체를 공포로 인식합니다. 화폐 가치의 하락(Inflation)이라는 보이지 않는 손실보다, 계좌 숫자가 마이너스로 찍히는 가시적인 손실을 훨씬 더 두렵게 여깁니다. 이는 변화에 대한 거부감과 원금에 대한 강박적 집착을 보여주는 심리 상태입니다.",
    pattern: "자산의 90% 이상을 1금융권의 정기 예금과 적금에만 의존합니다. 주식 시장을 '도박장'으로 규정하고 시장 참여를 거부하지만, 주변의 투자 성공 사례를 들으면 묘한 박탈감과 소외감을 느끼면서도 여전히 은행 창구만을 고집하는 고착화된 패턴을 보입니다.",
    advice: "인플레이션은 현금 보유자에게 부과되는 가장 무서운 세금입니다. 최소한 예금 금리 이상의 수익을 가져다주는 미국 단기 국채나 고배당 ETF 등 명목 자본 보전형 투자부터 단계적으로 시작하십시오. 리스크 테이킹이 전혀 없으면 실질 자산은 꾸준히 감소합니다.",
    warning: "자산 가치가 화폐 발행량 속도를 따라가지 못하면 노후 파산의 위험이 있습니다. 안정성이라는 환상에서 벗어나 실물 자산으로의 이동을 시작하십시오."
  },
  FLEX: {
    title: "계좌 녹이는 셀럽",
    description: "수익 나면 오마카세로 원금까지 탕진하는 자.",
    accent: "red",
    imageFile: "FLEX.jpg",
    analysis: "투자를 경제적 자유를 위한 과정이 아닌, 당장의 쾌락과 과시를 위한 자금 조달처로 인식합니다. '부의 가시화'에 집착하여 자산이 불어나는 속도보다 지출이 늘어나는 속도가 빠릅니다. 이는 심리학적으로 '낮은 자기 통제력'과 '타인 의존적 자아'를 반영하며, 경제적 기반이 매우 취약한 구조입니다.",
    pattern: "운 좋게 수익을 실현하면 즉시 고가의 명품 구매나 해외 여행, 유흥비로 탕진합니다. 심지어 평가 수익 상태에서도 수익을 미리 가불하여 소비하는 과감함을 보입니다. 하락장이 오면 소비 습관을 고치지 못해 빚을 내서 생활비를 충당하는 최악의 고리를 형성합니다.",
    advice: "수익금의 70%는 반드시 재투자하거나 안전 자산으로 격리하십시오. 소비 지출을 위한 통장과 투자 통장을 엄격히 분리하고, 월간 예산을 책정하여 통제받아야 합니다. 복리의 마법을 누리려면 열매가 아닌 뿌리를 키우는 데 집중해야 함을 명심하십시오.",
    warning: "소비로 일군 화려함은 한순간에 무너질 수 있습니다. 진짜 부자는 지출이 아닌 순자산 그래프가 보여준다는 점을 상기하고 과시욕을 억제하십시오."
  }
};

const VALID_CODES = Object.keys(RESULT_DETAILS);

const SITE_URL = "https://investment-personality.vercel.app";

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { code } = await params;
  const upperCode = (code || "").toUpperCase();

  if (!VALID_CODES.includes(upperCode)) {
    return { title: "결과 없음 | 호구냐 씹고수냐 테스트" };
  }

  const result = RESULT_DETAILS[upperCode];
  const searchParamsValue = await searchParams;
  const nickname =
    typeof searchParamsValue?.nickname === "string"
      ? searchParamsValue.nickname
      : "맑은 눈의 광인";

  const imageUrl = `${SITE_URL}/results/${result.imageFile}`;

  return {
    title: `${nickname}님은 ${result.title} | 호구냐 씹고수냐 테스트`,
    description: result.description,
    openGraph: {
      title: `${nickname}님은 ${result.title} (${upperCode})`,
      description: result.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: result.title
        }
      ],
      type: "article",
      authors: ["STOCK MIND"]
    },
    twitter: {
      card: "summary_large_image",
      title: `${nickname}님은 ${result.title}`,
      description: result.description,
      images: [imageUrl]
    }
  };
}

export default async function ResultPage({
  params,
  searchParams
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { code } = await params;
  const upperCode = (code || "").toUpperCase();
  const result = RESULT_DETAILS[upperCode];
  const searchParamsValue = await searchParams;
  const nickname =
    typeof searchParamsValue?.nickname === "string"
      ? searchParamsValue.nickname
      : "맑은 눈의 광인";
  const score =
    typeof searchParamsValue?.score === "string"
      ? searchParamsValue.score
      : "?";

  if (!result) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-zinc-800 mb-2">
            결과를 찾을 수 없어요
          </h1>
          <Link
            href="/"
            className="inline-block rounded-2xl bg-accentRed text-white font-semibold px-6 py-3 mt-4"
          >
            테스트 하러 가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-800 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-lg">
        {/* 결과 카드 상단 */}
        <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden mb-6 shadow-xl bg-white">
          <Image
            src={`/results/${result.imageFile}`}
            alt={result.title}
            fill
            className="object-contain"
            priority
            unoptimized
            sizes="(max-width: 480px) 100vw, 400px"
          />
        </div>

        <div className="rounded-2xl border-2 border-zinc-200 bg-white shadow-xl px-5 py-5 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            INVESTMENT PERSONALITY
          </span>
          <h1 className="text-2xl font-black text-zinc-900 mt-1">
            {result.title}
            <span className="text-sm font-normal text-zinc-400 ml-2">
              #{upperCode}
            </span>
          </h1>
          <p className="text-base font-medium text-zinc-600 mt-2 leading-relaxed">
            {result.description}
          </p>

          <div className="mt-6 rounded-xl border border-zinc-100 bg-[#f9f9fb] px-4 py-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">My Investment IQ</span>
              <span className="text-3xl font-black text-accentNeon italic">{score}<span className="text-xs not-italic font-bold ml-1 text-zinc-300">/ 100</span></span>
            </div>
            <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accentNeon transition-all duration-1000" 
                style={{ width: `${score}%` }} 
              />
            </div>
          </div>
        </div>

        {/* 심층 분석 리포트 섹션 (SEO 핵심) */}
        <div className="space-y-6 mb-8 px-2">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-lg font-bold text-zinc-800 flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-accentRed rounded-full" />
              성향의 심리학적 분석
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed text-justify">
              {result.analysis}
            </p>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-4 delay-150 duration-700">
            <h3 className="text-lg font-bold text-zinc-800 flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-accentBlue rounded-full" />
              데이터 기반 투자 패턴
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed text-justify">
              {result.pattern}
            </p>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700">
            <h3 className="text-lg font-bold text-zinc-800 flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-accentNeon rounded-full" />
              맞춤형 투자 솔루션
            </h3>
            <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm">
              <p className="text-sm text-zinc-700 leading-relaxed italic">
                "{result.advice}"
              </p>
            </div>
          </section>

          <section className="bg-red-50 border border-red-100 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-700">
            <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-2 flex items-center gap-1">
              ⚠️ Market Warning
            </h3>
            <p className="text-xs text-red-800 leading-relaxed font-medium">
              {result.warning}
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full rounded-2xl bg-zinc-900 border-b-4 border-black text-center text-base font-bold text-white py-4 active:border-b-0 active:translate-y-1 transition-all"
          >
            테스트 다시하기
          </Link>
        </div>

        <footer className="mt-12 text-center border-t border-zinc-200 pt-8 pb-12">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="text-[10px] font-bold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
          <p className="text-[10px] text-zinc-300 leading-relaxed max-w-[280px] mx-auto">
            © 2024 STOCK MIND. All investment decisions are your own responsibility. Professional financial advice is recommended.
          </p>
          <p className="text-[9px] text-zinc-300 mt-2">contact: resilient923@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}
