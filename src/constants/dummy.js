export const GOALS = [
  {
    id: 1,
    icon: "💬",
    title: "AI 기본 알고리즘 이해하기",
    startDate: "2024.11.23",
    endDate: "2025.01.10",
    category: "경험·활동·교육",
    isComplete: false,
    quests: [
      {
        id: 1,
        title: "선행대수 기초 공부하기",
        isComplete: true
      },
      {
        id: 2,
        title: "미적분학 기초 공부하기",
        isComplete: true
      },
      {
        id: 3,
        title: "활성화 함수 공부하기",
        isComplete: true
      },
      {
        id: 4,
        title: "활성화 함수 공부하기",
        isComplete: false
      },
      {
        id: 5,
        title: "역전파 알고리즘 공부하기",
        isComplete: false
      },
      {
        id: 6,
        title: "지도/비지도 알고리즘 공부하기",
        isComplete: false
      }
    ]
  },
  {
    id: 2,
    icon: "💬",
    title: "백엔드 공부하기",
    startDate: "2024.11.24",
    endDate: "2025.01.09",
    category: "경험·활동·교육",
    isComplete: true,
    quests: [
      {
        id: 1,
        title: "java 기초 공부하기",
        isComplete: true
      },
      {
        id: 2,
        title: "spring MVC 공부하기",
        isComplete: true
      },
      {
        id: 3,
        title: "spring data jpa 공부하기",
        isComplete: true
      },
      {
        id: 4,
        title: "tomcat 기초에 대해 공부하기",
        isComplete: true
      },
      {
        id: 5,
        title: "멀티 쓰레딩 공부하기",
        isComplete: true
      }
    ]
  },
  {
    "id": 3,
    "icon": "🏆",
    "title": "회계기초 자격증 취득하기",
    "startDate": "2024.11.25",
    "endDate": "2025.02.25",
    "category": "자격·어학·수상",
    "isComplete": false,
    "quests": [
      {
        "id": 1,
        "title": "회계 원리 공부하기",
        "isComplete": true
      },
      {
        "id": 2,
        "title": "재무회계 기본 이론 공부하기",
        "isComplete": true
      },
      {
        "id": 3,
        "title": "회계원칙 및 기준 이해하기",
        "isComplete": false
      }
    ]
  },
  {
    "id": 4,
    "icon": "🏆",
    "title": "세무회계 자격증 취득하기",
    "startDate": "2024.11.26",
    "endDate": "2025.03.01",
    "category": "자격·어학·수상",
    "isComplete": false,
    "quests": [
      {
        "id": 1,
        "title": "세무회계의 기초 공부하기",
        "isComplete": true
      },
      {
        "id": 2,
        "title": "세금 계산 및 신고 방법 배우기",
        "isComplete": true
      },
      {
        "id": 3,
        "title": "소득세 및 부가가치세 이해하기",
        "isComplete": false
      }
    ]
  },
  {
    "id": 5,
    "icon": "🏫",
    "title": "회계 소프트웨어 사용법 배우기",
    "startDate": "2024.11.27",
    "endDate": "2025.01.20",
    "category": "경험·활동·교육",
    "isComplete": false,
    "quests": [
      {
        "id": 1,
        "title": "회계 소프트웨어 개요 이해하기",
        "isComplete": true
      },
      {
        "id": 2,
        "title": "재무제표 생성하는 방법 배우기",
        "isComplete": true
      },
      {
        "id": 3,
        "title": "세무 신고서 작성법 배우기",
        "isComplete": false
      }
    ]
  },
  {
    "id": 6,
    "icon": "🏫",
    "title": "회계 정보 시스템 배우기",
    "startDate": "2024.11.28",
    "endDate": "2025.02.15",
    "category": "경험·활동·교육",
    "isComplete": false,
    "quests": [
      {
        "id": 1,
        "title": "회계 정보 시스템의 기본 개념 공부하기",
        "isComplete": true
      },
      {
        "id": 2,
        "title": "회계 정보 시스템의 활용 사례 배우기",
        "isComplete": true
      },
      {
        "id": 3,
        "title": "시스템 구축 및 관리 방법 배우기",
        "isComplete": false
      }
    ]
  },
]

export const CATEGORIES = [
  {
    value: "자격·어학·수상",
    label: "자격·어학·수상",
    icon: "🏆"
  },
  {
    value: "경험·활동·교육",
    label: "경험·활동·교육",
    icon: "🏫"
  },
  {
    value: "경력",
    label: "경력",
    icon: "🪪"
  },
  {
    value: "기타",
    label: "기타",
    icon: "💬"
  },
]

export const RECOMMENDED_GOALS = ([
  {
    icon: "🏫",
    category: "경험·활동·교육",
    title: "SpringMVC 인강 수강하기",
    description: [
      "직무 기초를 다질 수 있어요.",
      "해당 분야의 78% 사용자가 설정한 목표예요",
    ],
    quests: [],
  },
  {
    icon: "💬",
    category: "기타",
    title: "개발 블로그 운영하기",
    description: [
      "직무 기초를 다질 수 있어요.",
      "해당 분야의 83% 사용자가 설정한 목표예요",
    ],
    quests: [],
  },
])
export const RECOMMENDED_GOALS2 = ([
  {
    icon: "🏆",
    category: "자격·어학·수상",
    title: "회계사 자격증 취득하기",
    description: [
      "직무 기초를 다질 수 있어요.",
      "해당 분야의 78% 사용자가 설정한 목표예요",
    ],
    quests: [],
  },
  {
    icon: "🪪",
    category: "경력",
    title: "프로젝트 매니저 되기",
    description: [
      "직무 기초를 다질 수 있어요.",
      "해당 분야의 83% 사용자가 설정한 목표예요",
    ],
    quests: [],
  }
])