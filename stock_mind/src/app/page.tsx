"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type AnswerType = "A" | "B";

type Option = {
  text: string;
  type: AnswerType;
};

type Question = {
  id: number;
  text: string;
  options: Option[];
};

type ResultType = {
  code: string;
  title: string;
  description: string;
  accent: "red" | "blue" | "neon";
  imageFile: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "자고 일어났더니 이 새끼,,,, 종목이 거래정지(상폐 직전)다.",
    options: [
      { text: "대표이사 집 주소 알아내서 그 새끼 찾아간다.", type: "A" },
      {
        text: "조용히 한강 수온 체크하고 점심은 컵라면 먹는다.",
        type: "B"
      }
    ]
  },
  {
    id: 2,
    text: "전 재산 몰빵한 종목이 -50% 찍혔을 때.",
    options: [
      { text: "엄마 몰래 집 팔고 보증금까지 빼서 물타기. 이 새끼 믿는다.", type: "A" },
      {
        text: "앱 삭제하고 징역  5년 살고나온다",
        type: "B"
      }
    ]
  },
  {
    id: 3,
    text: "친구 새끼가 주식 대박나서 포르쉐 뽑았다.",
    options: [
      {
        text: "배 아파서 잠 안 옴. 미수 풀배팅 조지고 안되면 살자한다",
        type: "A"
      },
      {
        text: "도박이라며 비웃고 몰래 적금 금리 비교.",
        type: "B"
      }
    ]
  },
  {
    id: 4,
    text: "나에게 '손절'이 뭐라고?",
    options: [
      {
        text: "내 사전에 손절은 없다. 상폐 아니면 졸업이다.",
        type: "A"
      },
      {
        text: "5%만 빠져도 심장 오그라든다. 바로 팔아버린다.",
        type: "B"
      }
    ]
  },
  {
    id: 5,
    text: "종토방에서 누가 내 애마를 욕하고 있다.",
    options: [
      {
        text: "패드립 섞인 키배로 끝까지 싸운다. 내새끼는 내가 지킨다.",
        type: "A"
      },
      {
        text: "개같은 거..맞는 말이라며 같이 울면서 내 종목을 욕한다.",
        type: "B"
      }
    ]
  },
  {
    id: 6,
    text: "수익 3% 났을 때",
    options: [
      {
        text: "이미 워렌버핏 햇제 그랫제 걍 장투로 간다",
        type: "A"
      },
      {
        text: "떨어지기 전에 튀어! 바로 팔고 치킨 시킨다",
        type: "B"
      }
    ]
  },
  {
    id: 7,
    text: "나스닥 개폭락시?",
    options: [
      {
        text: "인버스 숏에 전 재산 몰빵 치고 잘못되면 살자하면된다",
        type: "A"
      },
      {
        text: "주님 부처님 조상님... 아는 신 다 부르며 기도한다.",
        type: "B"
      }
    ]
  },
  {
    id: 8,
    text: "내가 종목 고르는 필살기.",
    options: [
      {
        text: "차트에 선 찍찍 긋는다.",
        type: "A"
      },
      {
        text: "남들이 좋다는 거 받아 적고 엑셀로 망상 회로 돌리기.",
        type: "B"
      }
    ]
  },
  {
    id: 9,
    text: "데이트 중인데 내 종목에 매도 사이드카 걸렸다.",
    options: [
      {
        text: "애인 버리고 화장실 튀어가서 풀매수/매도 갈긴다.",
        type: "A"
      },
      {
        text: "쿨한 척하지만 테이블 밑에서 손 부들부들 떤다.",
        type: "B"
      }
    ]
  },
  {
    id: 10,
    text: "'주식 안 하면 바보'라는 소리 들었을 때.",
    options: [
      {
        text: "바보 되기 싫어서 빚내서 레버리지 땡긴다.",
        type: "A"
      },
      {
        text: "돈 잃는 것보단 바보로 사는 게 마음 편하다.",
        type: "B"
      }
    ]
  },
  {
    id: 11,
    text: "나에게 '재무제표'가 뭔데?",
    options: [
      {
        text: "세력이 호구 낚으려는 판타지. 읽으면 진짜 호구된다.",
        type: "A"
      },
      {
        text: "봐도 모르지만 켜놓고 전문가 척 폼 잡는 용도.",
        type: "B"
      }
    ]
  },
  {
    id: 12,
    text: "내일 지구가 끝난다면?",
    options: [
      {
        text: "20배 레버리지 땡겨서 우주 끝에 베팅한다.",
        type: "A"
      },
      {
        text: "다 포기하고 계좌 비번이나 기억해내려 애쓴다.",
        type: "B"
      }
    ]
  }
];

const RESULT_TYPES: ResultType[] = [
  {
    code: "DGRN",
    title: "상장폐지 수집가",
    description: "휴지조각 수집이 취미인 마이너스의 손.",
    accent: "blue",
    imageFile: "DGRN 상장폐지 컬렉터.jpg"
  },
  {
    code: "FMOD",
    title: "상따 중독 포모충",
    description: "남 벌 때 못 벌면 혈압 올라서 고점 매수하는 뇌.",
    accent: "red",
    imageFile: "FMOD FOMO에 절여진 뇌.jpg"
  },
  {
    code: "YOLO",
    title: "한강뷰 아니면 입수",
    description: "인생 한 방에 건 노빠꾸 야수의 심장.",
    accent: "red",
    imageFile: "YOLO 인생 한 방 노빠꾸.png"
  },
  {
    code: "HODL",
    title: "망부석 좀비",
    description: "수익률 -95%에도 아직 안 팔았으니 손해 아니라는 분.",
    accent: "blue",
    imageFile: "HODL 지구끝까지 존버단.jpg"
  },
  {
    code: "ALGO",
    title: "방구석 워런 버핏",
    description: "차트 선 긋다 밤새고 세력 탓만 하는 선무당.",
    accent: "neon",
    imageFile: "ALGO 차트빌런(선무당).png"
  },
  {
    code: "STRE",
    title: "1분봉 노예",
    description: "주가 10원 하락에 수명 1시간씩 단축되는 유리 멘탈.",
    accent: "blue",
    imageFile: "STRE 스트레스 맛집.jpg"
  },
  {
    code: "CHIK",
    title: "익절병 환자",
    description: "0.5%만 빨간불 들어와도 치킨 사 먹는 쫄보.",
    accent: "neon",
    imageFile: "CHIK 치킨 한 마리 익절러.jpg"
  },
  {
    code: "GHOST",
    title: "비번 까먹은 시체",
    description: "강제 장기투자 중인 계좌 주인 (생사불명).",
    accent: "blue",
    imageFile: "GHOST 계좌비번 까먹음.jpg"
  },
  {
    code: "NEWS",
    title: "찌라시 하이에나",
    description: "카톡방 '카더라'에 전 재산 태우는 정보 호구.",
    accent: "red",
    imageFile: "NEWS 찌라시 맹신론자.jpg"
  },
  {
    code: "MATH",
    title: "계산기 중독자",
    description: "수익은 마이너스인데 엑셀로 복리 망상 중.",
    accent: "neon",
    imageFile: "MATH 액셀 집착 광기.jpg"
  },
  {
    code: "PRAY",
    title: "정한수 메타",
    description: "분석은 사치, 매수 후 조상님께 비는 무속인.",
    accent: "blue",
    imageFile: "PRAY 기도 매매법 창시자.jpg"
  },
  {
    code: "FIRE",
    title: "망상형 파이어족",
    description: "50만 원 투자하고 내년 강남 입주 꿈꾸는 자.",
    accent: "red",
    imageFile: "FIRE 망상형 파이어족.jpg"
  },
  {
    code: "BLUE",
    title: "우량주 가스라이팅",
    description: '"삼전은 안 망해"라며 5년째 인질 잡힌 분.',
    accent: "blue",
    imageFile: "BLUE 우량주 성애자.jpg"
  },
  {
    code: "SHOR",
    title: "인간 인버스",
    description: "내가 사면 고점, 팔면 저점인 기적의 지표.",
    accent: "red",
    imageFile: "SHOR 인간 인버스.jpg"
  },
  {
    code: "GOLD",
    title: "예적금 광신도",
    description: "인플레이션한테 뺨 맞으면서 현금만 쥐고 있는 자.",
    accent: "neon",
    imageFile: "GOLD 안전자산 집착광.jpg"
  },
  {
    code: "FLEX",
    title: "계좌 녹이는 셀럽",
    description: "수익 나면 오마카세로 원금까지 탕진하는 자.",
    accent: "red",
    imageFile: "FLEX 수익금 전액 탕진러.jpg"
  }
];

type QuizState = {
  currentIndex: number;
  answers: AnswerType[];
  isFinished: boolean;
};

type Direction = "left" | "right";

function calculateResult(answers: AnswerType[]): ResultType {
  const totalQuestions = QUESTIONS.length;
  const totalA = answers.filter((a) => a === "A").length;
  const ratio = totalA / totalQuestions;

  // 극단값은 강하게 매핑
  if (totalA === totalQuestions) {
    return RESULT_TYPES.find((r) => r.code === "YOLO") ?? RESULT_TYPES[2];
  }
  if (totalA === 0) {
    return RESULT_TYPES.find((r) => r.code === "GOLD") ?? RESULT_TYPES[14];
  }

  if (totalA >= 9) {
    return RESULT_TYPES.find((r) => r.code === "FIRE") ?? RESULT_TYPES[11];
  }
  if (totalA >= 7) {
    return RESULT_TYPES.find((r) => r.code === "FMOD") ?? RESULT_TYPES[1];
  }
  if (totalA >= 5) {
    return RESULT_TYPES.find((r) => r.code === "ALGO") ?? RESULT_TYPES[4];
  }
  if (totalA >= 3) {
    return RESULT_TYPES.find((r) => r.code === "BLUE") ?? RESULT_TYPES[12];
  }

  // 기본은 비율 기반으로 전체 스펙트럼에 매핑
  const index = Math.min(
    RESULT_TYPES.length - 1,
    Math.max(0, Math.round(ratio * (RESULT_TYPES.length - 1)))
  );
  return RESULT_TYPES[index];
}

function calculateScore(answers: AnswerType[]): number {
  const totalQuestions = QUESTIONS.length;
  const totalA = answers.filter((a) => a === "A").length;
  const base = Math.round((totalA / totalQuestions) * 100);

  const hashSeed = answers.join("");
  const hash =
    hashSeed
      .split("")
      .map((c) => c.charCodeAt(0))
      .reduce((acc, cur) => acc + cur, 0) % 21; // 0 ~ 20

  const jitter = hash - 10; // -10 ~ +10
  const score = Math.min(100, Math.max(0, base + jitter));
  return score;
}

function useQuiz() {
  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    answers: [],
    isFinished: false
  });
  const [direction, setDirection] = useState<Direction>("right");

  const currentQuestion = QUESTIONS[state.currentIndex];
  const progress =
    ((state.currentIndex + (state.isFinished ? 1 : 0)) / QUESTIONS.length) *
    100;

  const handleAnswer = (answer: AnswerType) => {
    setDirection("right");
    setState((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentIndex] = answer;

      const isLast = prev.currentIndex === QUESTIONS.length - 1;

      return {
        currentIndex: isLast ? prev.currentIndex : prev.currentIndex + 1,
        answers: newAnswers,
        isFinished: isLast
      };
    });
  };

  const goPrev = () => {
    setDirection("left");
    setState((prev) => {
      if (prev.currentIndex === 0) return prev;
      return {
        ...prev,
        currentIndex: prev.currentIndex - 1,
        isFinished: false
      };
    });
  };

  const reset = () => {
    setDirection("right");
    setState({
      currentIndex: 0,
      answers: [],
      isFinished: false
    });
  };

  return {
    state,
    direction,
    currentQuestion,
    progress,
    handleAnswer,
    goPrev,
    reset
  };
}

function useResult(answers: AnswerType[], isFinished: boolean) {
  const result = useMemo(
    () => (isFinished && answers.length ? calculateResult(answers) : null),
    [answers, isFinished]
  );

  const score = useMemo(
    () => (isFinished && answers.length ? calculateScore(answers) : null),
    [answers, isFinished]
  );

  useEffect(() => {
    if (isFinished && typeof window !== "undefined") {
      if (navigator?.vibrate) {
        navigator.vibrate(200);
      }
    }
  }, [isFinished]);

  return { result, score };
}

function getAccentClasses(accent: ResultType["accent"]) {
  switch (accent) {
    case "red":
      return {
        border: "border-accentRed",
        shadow: "shadow-glow-red",
        badge: "bg-accentRed/20 text-accentRed border-accentRed/40",
        gradient:
          "from-accentRed/60 via-accentRed/10 to-transparent shadow-glow-red"
      };
    case "blue":
      return {
        border: "border-accentBlue",
        shadow: "shadow-glow-blue",
        badge: "bg-accentBlue/20 text-accentBlue border-accentBlue/40",
        gradient:
          "from-accentBlue/60 via-accentBlue/10 to-transparent shadow-glow-blue"
      };
    case "neon":
      return {
        border: "border-accentNeon",
        shadow: "shadow-glow-neon",
        badge: "bg-accentNeon/15 text-accentNeon border-accentNeon/40",
        gradient:
          "from-accentNeon/70 via-accentNeon/10 to-transparent shadow-glow-neon"
      };
  }
}

async function handleShare(
  resultCode: string,
  score: number,
  nickname: string
) {
  const base =
    typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const shareUrl = `${base}/result/${resultCode}?score=${score}&nickname=${encodeURIComponent(nickname)}`;

  const text =
    "야수의 심장 테스트 결과 나왔다. 너도 한 번 해봐라 (호구냐 씹고수냐 테스트)";

  if (navigator.share) {
    try {
      await navigator.share({
        title: "호구냐 씹고수냐 테스트 | STOCK MIND",
        text,
        url: shareUrl
      });
      return;
    } catch {
      // fall through to clipboard
    }
  }

  try {
    await navigator.clipboard.writeText(shareUrl);
    alert("링크를 클립보드에 복사했어요. 카카오톡에 붙여넣기해서 참교육 시작!");
  } catch {
    alert("브라우저에서 공유를 막아놨어요. 주소창 링크를 직접 복사해주세요.");
  }
}

export default function Page() {
  const [nickname, setNickname] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const { state, direction, currentQuestion, progress, handleAnswer, goPrev, reset } =
    useQuiz();

  const { result, score } = useResult(state.answers, state.isFinished);

  const isFirst = state.currentIndex === 0 && !state.isFinished;
  const isLastQuestion = state.currentIndex === QUESTIONS.length - 1;

  const displayName = nickname.trim() || "맑은 눈의 광인";

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-background text-zinc-800 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-6 flex flex-col items-center">
          <span className="text-5xl mb-6">📈</span>
          <h1 className="text-xl font-semibold text-zinc-800 mb-2 text-center">
            호구냐 씹고수냐 테스트
          </h1>
          <p className="text-sm text-zinc-500 mb-6 text-center">
            별명을 입력하면 결과에 반영돼요
          </p>
          <input
            type="text"
            placeholder="별명 입력 (예: 한강뷰러버)"
            maxLength={10}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full max-w-xs rounded-2xl border-2 border-zinc-200 bg-surface px-5 py-4 text-base text-zinc-800 placeholder-zinc-400 focus:border-accentRed focus:outline-none mb-4"
          />
          <button
            onClick={() => setHasStarted(true)}
            className="w-full max-w-xs rounded-2xl bg-accentRed text-base font-semibold text-white py-4 active:scale-[0.98] transition-transform"
          >
            테스트 시작
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-zinc-800 flex items-center justify-center">
      <div className="relative w-full max-w-md mx-auto h-screen px-4 py-6 flex flex-col">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-24 -right-16 h-64 w-64 bg-accentRed/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 bg-accentBlue/20 blur-3xl rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 h-40 w-40 bg-accentNeon/20 blur-3xl rounded-full" />
        </div>

        <header className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">📈</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] tracking-[0.18em] text-zinc-500 uppercase">
                  STOCK MIND TEST
                </span>
                <h1 className="text-base font-semibold text-zinc-800">
                  {displayName}{" "}
                  <span className="text-accentRed">
                    호구냐 씹고수냐 테스트
                  </span>
                </h1>
              </div>
            </div>
            {!state.isFinished && (
              <span className="text-sm font-medium text-zinc-500">
                Q{state.currentIndex + 1}/{QUESTIONS.length}
              </span>
            )}
          </div>

          <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accentRed via-accentNeon to-accentBlue transition-all duration-300"
              style={{ width: `${Math.max(6, progress)}%` }}
            />
          </div>
        </header>

        <main className="relative z-10 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {!state.isFinished && currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                initial={{ x: direction === "right" ? 80 : -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -80 : 80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex flex-col items-center"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  {currentQuestion.id <= 4 && "야수의 심장"}
                  {currentQuestion.id > 4 &&
                    currentQuestion.id <= 8 &&
                    "개쳐물린한낱개미"}
                  {currentQuestion.id > 8 && "정신 승리 페이즈"}
                </p>
                <h2 className="text-xl font-semibold leading-snug text-center text-zinc-800 mb-8">
                  {currentQuestion.text}
                </h2>

                <div className="w-full space-y-4 max-w-sm">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={option.text}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.type)}
                      className="w-full text-left rounded-2xl border-2 border-zinc-200 bg-surface shadow-lg px-5 py-4 flex gap-4 items-center hover:border-accentRed/50 hover:shadow-xl active:scale-[0.98] transition-all"
                    >
                      <span className="text-4xl shrink-0">
                        {index === 0 ? "🔥" : "🛡️"}
                      </span>
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                          {index === 0 ? "A" : "B"}
                        </span>
                        <span className="text-base font-medium leading-relaxed text-zinc-800">
                          {option.text}
                        </span>
                      </div>
                      <span className="text-2xl text-zinc-300 shrink-0">→</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {state.isFinished && result && (
              <motion.div
                key="result"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                className="flex flex-col flex-1 justify-center items-center w-full"
              >
                <ResultView
                result={result}
                score={score ?? 0}
                onRetry={reset}
                nickname={displayName}
              />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="relative z-10 mt-auto pt-4 flex items-center justify-between text-sm text-zinc-500">
          <button
            onClick={goPrev}
            disabled={isFirst || state.isFinished}
            className="flex items-center gap-2 disabled:opacity-30 disabled:cursor-default py-2"
          >
            <span className="text-lg">←</span>
            <span>이전</span>
          </button>
          {!state.isFinished && (
            <span className="text-zinc-500">
              {isLastQuestion ? "이제 결과 확인만 남았다..." : "고통 속에서 솔직하게 클릭하세요."}
            </span>
          )}
        </footer>
      </div>
    </div>
  );
}

function ResultView({
  result,
  score,
  onRetry,
  nickname
}: {
  result: ResultType;
  score: number;
  onRetry: () => void;
  nickname: string;
}) {
  const accent = getAccentClasses(result.accent);

  return (
    <div className="relative w-full max-w-sm flex flex-col items-center">
      <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden mb-4 shadow-xl bg-white">
        <Image
          src={`/results/${encodeURIComponent(result.imageFile)}`}
          alt={result.title}
          fill
          className="object-contain"
          unoptimized
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>

      <div
        className={`relative w-full rounded-3xl border-2 ${accent.border} bg-surface shadow-xl px-5 py-5 ${accent.shadow} animate-pop`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              당신의 투자 성향
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-zinc-500">{result.code}</span>
              <h2 className="text-lg font-semibold text-zinc-800">{result.title}</h2>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-medium ${accent.badge}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            {nickname} 인증
          </span>
        </div>

        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
          {result.description}
        </p>

        <div className="mt-3 rounded-2xl border border-zinc-200 bg-background px-4 py-3 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-500">내 투자 지능 점수</span>
            <span className="text-xs text-zinc-400">0 ~ 100점 (비공식)</span>
          </div>
          <div className="flex items-end gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-accentNeon">
                {score}
              </span>
              <span className="text-xs text-zinc-500 mb-1">/ 100</span>
            </div>
            <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accentBlue via-accentNeon to-accentRed"
                style={{ width: `${Math.max(4, score)}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleShare(result.code, score, nickname)}
            className="w-full rounded-2xl bg-[#FEE500] text-base font-semibold text-black py-4 flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] transition-transform"
          >
            <span className="text-2xl">💬</span>
            카카오톡으로 친구 참교육하기
          </button>
          <button
            onClick={onRetry}
            className="w-full rounded-2xl border-2 border-zinc-300 bg-surface text-base font-medium text-zinc-700 py-4 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform hover:bg-zinc-50"
          >
            <span className="text-2xl">🔄</span>
            다시 태어나서 처음부터 테스트하기
          </button>
        </div>

        <p className="mt-4 text-xs text-zinc-500 leading-relaxed border-t border-zinc-200 pt-3">
          경고: 본 테스트는 과학적 근거가 1도 없습니다.{" "}
          투자 판단의 책임은 언제나{" "}
          <span className="text-accentRed font-medium">당신의 계좌</span>에
          있습니다.
        </p>
      </div>
    </div>
  );
}

