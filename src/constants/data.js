export const goalData = [
    {
        goalId:1,
        category: 0,
        title: "데이터 기반 기획 능력 강화하기",
        content: [
            {
                title:"세부 목표1",
                isClear: true,
            },
            {
                title:"세부 목표2",
                isClear:false
            },
            {
                title:"세부 목표3",
                isClear:false
            },
        ]
    },
    {
        goalId:2,
        category: 1,
        title: "토익 800점 넘기기",
        content: [
            {
                title:"세부 목표1",
                isClear: true,
            },
            {
                title:"세부 목표2",
                isClear: true,
            },
            {
                title:"세부 목표3",
                isClear:false
            },
        ]
    },
    {
        goalId:3,
        category: 2,
        title: "마케팅 기초 공부하기",
        content: [
            {
                title:"세부 목표1",
                isClear: true,
            },
            {
                title:"세부 목표2",
                isClear:false
            },
            {
                title:"세부 목표3",
                isClear:false
            },
        ]
    },
    {
        goalId:4,
        category: 3,
        title: "구름톤 수상하기",
        content: [
            {
                title:"세부 목표1",
                isClear: true,
            },
            {
                title:"세부 목표2",
                isClear:false
            },
            {
                title:"세부 목표3",
                isClear:false
            },
        ]
    },

]

export const jobData = [
    "기획ㆍ전략", "마케팅ㆍ홍보ㆍ전략", "회계ㆍ세무ㆍ재무",
    "인사ㆍ노무ㆍHRD", "총무ㆍ법무ㆍ사무", "IT개발/데이터",
    "디자인", "영업ㆍ판매ㆍ무역", "고객상담/TM",
    "구매ㆍ자재ㆍ물류", "상품기획/MD", "운전ㆍ운송ㆍ배송",
    "서비스", "생산", "건설/건축",
    "의료", "연구 R&D", "교육",
    "미디어ㆍ문화ㆍ스포츠", "금융/보험", "공공/복지"
]


export const intros = [
    {
      content: "맞춤형 퀘스트로\n큰 목표를 이뤄나가요.",
      img: "/onboardingImg/targetanddart.png",
    },
    {
      content: "퀘스트와 일정을\n한눈에 관리해요.",
      img: "/onboardingImg/calendar.png",
    },

    {
      content: "로드맵을 공유하며\n함께 성장해요.",
      img: "/onboardingImg/journey.png",
    },

    {
      content: "나만을 위한\nAI 맞춤 피드백",
      img: "/onboardingImg/star.png",
    },
  ];


  // 마이페이지 카테고리별 아이템 데이터
export const MypageData = [
    // 학력
    {
      category: 1,
      startDate: "2020-03-01",
      endDate: "2024-02-28",
      itemName: "구름대학교 경영학과 졸업",
    },
    {
      category: 1,
      startDate: "2016-03-01",
      endDate: "2019-02-28",
      itemName: "구름고등학교 졸업",
    },
    // 경력
    {
      category: 2,
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      itemName: "구름회사 인턴",
    },
    {
      category: 2,
      startDate: "2021-06-01",
      endDate: "2022-12-31",
      itemName: "스타트업 개발팀 근무",
    },
    // 자격·어학·수상
    {
      category: 3,
      startDate: "2023-05-01",
      endDate: "2023-05-01",
      itemName: "TOEIC 900점",
    },
    {
      category: 3,
      startDate: "2022-10-01",
      endDate: "2022-10-01",
      itemName: "정보처리기사 자격증",
    },
    // 경험·활동·교육
    {
      category: 4,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
      itemName: "구름봉사단 활동",
    },
    //기타
    {
      category: 5,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
      itemName: "기타활동 예제입니다",
    },
]

  // 마이페이지 카테고리
export const categories = [
    { id: 1, name: "학력", icon: "/categories/category1.png" },
    { id: 2, name: "경력", icon: "/categories/category2.png" },
    { id: 3, name: "자격·어학·수상", icon: "/categories/category3.png" },
    { id: 4, name: "경험·활동·교육", icon: "/categories/category4.png" },
    { id: 5, name: "기타", icon: "/categories/category5.png" },
  ];