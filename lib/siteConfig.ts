export const siteConfig = {
  brand: {
    name: "CHOI'S",
    subtitle: "Nail & Care",
    tagline: "あなたの選択が、指先の美しさになる。",
  },

  instagram: {
    username: "chois_nail77",
    url: "https://www.instagram.com/chois_nail77/",
  },

  reservation: {
    lineUrl: "https://lin.ee/lcDbWNR",
    heading: "RESERVATION",
    text: "ご予約・ご相談は\nLINEからお気軽にどうぞ。",
    buttonLabel: "LINEで予約",
  },

  access: {
    heading: "ACCESS",
    // ✅ Address is intentionally easy to edit here
    addressLines: ["〒323-0029", "栃木県 小山市 城北2-8-1"],
    businessHours: "10:00〜19:00",

    // Optional. If you don't want to show holidays yet, set to "".
    holidays: "",

    // Use this to open Google Maps in a new tab.
    // You can replace with a place URL later (recommended).
    mapsOpenUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%80%92323-0029%20%E6%A0%83%E6%9C%A8%E7%9C%8C%20%E5%B0%8F%E5%B1%B1%E5%B8%82%20%E5%9F%8E%E5%8C%972-8-1",

    // Embed URL for iframe. You can replace with your own embed later.
    // Tip: Search the address on Google Maps → Share → Embed a map → copy src.
    mapsEmbedUrl:
      "https://www.google.com/maps?output=embed&q=%E3%80%92323-0029%20%E6%A0%83%E6%9C%A8%E7%9C%8C%20%E5%B0%8F%E5%B1%B1%E5%B8%82%20%E5%9F%8E%E5%8C%972-8-1",
    mapsButtonLabel: "Google Mapsで開く",
  },

  // Gallery thumbnails live in /public/gallery/*.jpg
  gallery: {
    heading: "GALLERY",
    helperText: "最新デザインはInstagramで更新しています",
    buttonLabel: "Instagramで最新を見る",
    thumbs: ["/gallery/1.jpg","/gallery/2.jpg","/gallery/3.jpg","/gallery/4.jpg","/gallery/5.jpg","/gallery/6.jpg"],
  },

  footer: {
    small: "© CHOI'S Nail & Care",
  },
} as const;
