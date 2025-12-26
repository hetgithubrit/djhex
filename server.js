const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const reviews = [
  { initials: 'HP', name: 'Harsh Patel', text: 'Perfect blend of Gujarati hits and Bollywood bangers. Crowd was on its feet all night!' },
  { initials: 'RT', name: 'Riya Thakkar', text: 'Super professional, arrived early, coordinated with our planner, and nailed every request.' },
  { initials: 'SD', name: 'Soham Dave', text: 'Live mixing is next level. The transitions were seamless—felt like a club set at our wedding.' },
  { initials: 'MV', name: 'Mitali Vaghela', text: 'Handled our baraat, sangeet, and reception flawlessly. Guests still rave about the energy!' },
  { initials: 'NJ', name: 'Neel Joshi', text: 'Top-tier sound and lights. He read the crowd perfectly and kept the dance floor full.' },
  { initials: 'ST', name: 'Shreya Trivedi', text: 'Custom playlist, do-not-play list, and smooth MC work. Exactly what we needed.' },
  { initials: 'AG', name: 'Aditya Gohil', text: 'Festival-style drops with Gujarati folk twists—unreal vibe! Highly recommend.' },
  { initials: 'PS', name: 'Priya Solanki', text: 'Setup was clean, wireless mics ready, backup gear on hand. True professional.' },
  { initials: 'MT', name: 'Meet Thakkar', text: 'He coordinated with our emcee and planner so we could just enjoy. Stress-free experience.' },
  { initials: 'KD', name: 'Krupa Desai', text: 'Bollywood, EDM, Punjabi, retro—all blended perfectly. Dance floor never emptied.' },
  { initials: 'RV', name: 'Rahul Vaghela', text: 'Great communication, shared timelines, and delivered exactly as promised. 10/10.' },
  { initials: 'JT', name: 'Jheel Trivedi', text: 'Loved the laser effects and mashups. Felt like a club inside our banquet hall.' },
  { initials: 'VD', name: 'Vivek Dave', text: 'Responsive, polite, and totally dialed into our taste. Highly recommended for weddings.' },
  { initials: 'NP', name: 'Namrata Patel', text: 'Interactive crowd engagement with smooth transitions. Our guests had a blast.' },
  { initials: 'BG', name: 'Bhavin Gohil', text: 'Sounded amazing even in an open lawn setup. Multi-zone audio worked perfectly.' }
];

const services = [
  { title: 'Weddings & Engagements', desc: 'Curated ceremonies, sangeet, baraat, receptions, and love-filled dance floors.' },
  { title: 'Club Nights & Festivals', desc: 'High-energy sets, live mixing, and impactful drops built for big-room vibes.' },
  { title: 'Private & Corporate Events', desc: 'Professional sound, MC support, and crowd-first playlists for every audience.' },
  { title: 'Birthday Parties', desc: 'Custom themes, age-appropriate edits, and interactive sets that keep guests hyped.' },
  { title: 'Graduation Parties', desc: 'Feel-good anthems, fresh remixes, and celebratory mixes for new milestones.' },
  { title: 'Anniversary Celebrations', desc: 'Romantic selects with smooth transitions that honor your story and guests.' },
  { title: 'Baby Showers', desc: 'Light, joyful soundtracks and crystal-clear audio for speeches and games.' },
  { title: 'Sports Events & Tournaments', desc: 'Stadium-style hype music, live commentary support, and energizing breaks.' },
  { title: 'Product Launches & Brand Events', desc: 'On-brand sound design, clear announcements, and immersive atmospheres that impress.' }
];

const galleryItems = [
  { title: "20251122_232736.jpg", src: "/images/gallery/20251122_232736.jpg", vertical: true, align: "object-left" },
  { title: "20251122_232747.jpg", src: "/images/gallery/20251122_232747.jpg", vertical: true },
  { title: "IMG_20251211_191333.jpg", src: "/images/gallery/IMG_20251211_191333.jpg", vertical: true },
  { title: "20251122_234900.jpg", src: "/images/gallery/20251122_234900.jpg", vertical: false },
  { title: "20251122_235255.jpg", src: "/images/gallery/20251122_235255.jpg", vertical: false },
  { title: "20251123_154903.jpg", src: "/images/gallery/20251123_154903.jpg", vertical: true },
  { title: "20251211_222632.jpg", src: "/images/gallery/20251211_222632.jpg", vertical: false },
  { title: "IMG_20251211_205817.jpg", src: "/images/gallery/IMG_20251211_205817.jpg", vertical: false },
  { title: "IMG_20251211_205821.jpg", src: "/images/gallery/IMG_20251211_205821.jpg", vertical: false },
  { title: "IMG_20251211_210018.jpg", src: "/images/gallery/IMG_20251211_210018.jpg", vertical: false },
  { title: "IMG_20251211_223024.jpg", src: "/images/gallery/IMG_20251211_223024.jpg", vertical: false },
  { title: "IMG_20251216_121651.jpg", src: "/images/gallery/IMG_20251216_121651.jpg", vertical: false },
  { title: "event-bachelor.jpg", src: "/images/gallery/event-bachelor.jpg", vertical: false },
  { title: "event-club.jpg", src: "/images/gallery/event-club.jpg", vertical: false },
  { title: "event-freshers.jpg", src: "/images/gallery/event-freshers.jpg", vertical: false }
];

const videos = [
  { filename: 'IMG_9771.MP4', title: 'Live Performance 1' },
  { filename: 'IMG_9772.MP4', title: 'Live Performance 2' },
  { filename: '20251122_232312.mp4', title: 'Live Performance 3' },
  { filename: 'IMG_2838.MOV', title: 'Live Performance 4' },
  { filename: 'IMG_2844 (1).MOV', title: 'Live Performance 5' },
  { filename: 'VID_20251128_22173628.mp4', title: 'Live Performance 6' },
  { filename: 'VID_20251128_22202647.mp4', title: 'Live Performance 7' },
  { filename: 'Video-2.mp4', title: 'Live Performance 8' },
  { filename: 'Video-518.mp4', title: 'Live Performance 9' }
];

const whatIDo = {
  weddingServices: [
    'Ceremony music & processional',
    'Cocktail hour background music',
    'Grand entrance & first dance',
    'Reception dance party',
    'Cultural & traditional music',
    'Custom playlist creation',
    'Baraat & wedding procession',
    'Mehendi & sangeet music',
    'Vidaai ceremony music'
  ],
  professionalSetup: [
    'High-quality sound system',
    'Professional lighting effects',
    'Wireless microphones',
    'Backup equipment',
    'Early setup & testing',
    'Clean teardown',
    'LED dance floor lighting',
    'Fog & laser effects',
    'Portable PA system'
  ],
  musicExpertise: [
    'Bollywood & Hindi hits',
    'English pop & rock',
    'EDM & electronic music',
    'Punjabi & regional hits',
    'Classic & retro songs',
    'Live mixing & transitions',
    'Gujarati & folk music',
    'International chart toppers',
    'Remixes & mashups'
  ],
  eventManagement: [
    'Pre-event consultation',
    'Timeline coordination',
    'MC services available',
    'Announcements & coordination',
    'Emergency backup plans',
    'Post-event follow-up'
  ],
  specialFeatures: [
    'Custom song requests',
    'Do-not-play lists',
    'Interactive crowd engagement',
    'Photo booth music',
    'Special effects & smoke',
    'Multi-zone audio setup',
    'Live video mixing',
    'Karaoke setup available',
    'Custom event branding'
  ],
  whatYouGet: [
    'Stress-free experience',
    'Professional reliability',
    'Memorable moments',
    'Happy dancing guests',
    'Perfect atmosphere',
    'Value for money'
  ]
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/videos', label: 'Videos' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' }
];

const baseData = {
  navLinks,
  email: 'djhex1907@gmail.com',
  year: new Date().getFullYear()
};

app.get('/', (req, res) => {
  res.render('pages/home', { ...baseData, currentPath: req.path, services, reviews, galleryItems });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { ...baseData, currentPath: req.path, whatIDo });
});

app.get('/services', (req, res) => {
  res.render('pages/services', { ...baseData, currentPath: req.path, services });
});

app.get('/gallery', (req, res) => {
  res.render('pages/gallery', { ...baseData, currentPath: req.path, galleryItems });
});

app.get('/videos', (req, res) => {
  res.render('pages/videos', { ...baseData, currentPath: req.path, videos });
});

app.get('/reviews', (req, res) => {
  res.render('pages/reviews', { ...baseData, currentPath: req.path, reviews });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { ...baseData, currentPath: req.path });
});

app.listen(PORT, () => {
  console.log(`DJ HEX portfolio running at http://localhost:${PORT}`);
});

