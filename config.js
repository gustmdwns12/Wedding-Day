/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 * images/hero/1.jpg      - 메인 사진 (1장, 필수)
 * images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 * images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 * images/location/1.jpg  - 약도/지도 이미지 (1장)
 * images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "현승준",
    father: "현석호",
    mother: "이애연",
    tel: "01025430150",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이미영",
    mother: "노낭숙",
    tel: "01057639960", // 신부측 아버님 정보는 적지 않으셨으므로 그대로 비워두었습니다.
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-19",
    time: "14:00",
    venue: "홀리데이 인 광주 호텔",
    hall: "라벤더홀 2층",
    address: "광주광역시 서구 상무누리로 55 홀리데이인호텔",
    tel: "062-385-7000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/17180479",
      naver: "https://map.naver.com/p/entry/place/16053585?c=19.22,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605252159&locale=ko&svcName=map_pcv5"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "혼자 그리던 어렴풋한 꿈이\n서로를 만나 이제는 둘이 함께 써 내려갈\n하나의 이야기가 되었습니다.\n\n한 곳을 바라보며 첫 발을 내딛는 날,\n늘 곁에서 아껴주셨던 고마운 분들을 초대합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "현승준", bank: "카카오뱅크", number: "3333-36-4578708" },
      { role: "아버지", name: "현석호", bank: "농협은행", number: "302-2141-4603-21" },
      { role: "어머니", name: "이애연", bank: "농협은행", number: "352-1206-5218-13" }
    ],
    bride: [
      { role: "신부", name: "이미영", bank: "하나은행", number: "000-000-000000" },
      // <-- 신부측 아버님 계좌 항목을 깔끔하게 삭제했습니다.
      { role: "어머니", name: "노낭숙", bank: "농협은행", number: "630-12-064617" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "현승준 ♥ 이미영 결혼합니다",
    description: "2026년 9월 19일, 소중한 분들을 초대합니다."
  }
};