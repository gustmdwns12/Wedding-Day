/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "현승준",
    father: "현석호",
    mother: "이애연",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이미영",
    father: "이혁재",
    mother: "노낭숙",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-19",
    time: "14:00",
    venue: "홀리데이 인 광주 호텔",
    hall: "라벤더홀 2층",
    address: "광주 서구 상무누리로 55",
    tel: "062-610-7000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/19925119",
      naver: "https://map.naver.com/p/entry/place/19560475?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605102234&locale=ko&svcName=map_pcv5&businessCategory=hotel"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "혼자 그리던 어렴풋한 꿈이\n서로를 만나 이제는 둘이 함께 써 내려갈\n하나의 이야기가 되었습니다.\n\n한 곳을 바라보며 첫 발을 내딛는 날,\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "어린시절 우리",
    content: "왼쪽은 승준 어린사진\n오른쪽은 미영 어린사진\n\n수정해야할 부분"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "현승준", bank: "카카오뱅크", number: "3333-36-4578708" },
      { role: "아버지", name: "현석호", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "이애연", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이미영", bank: "국민은행", number: "580302-04-300970" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "노낭숙", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "현승준 ♥ 이미영 결혼합니다",
    description: "2026년 9월 19일, 소중한 분들을 초대합니다."
  }
};
