const lockScreen = document.getElementById("lock-screen");
const homeScreen = document.getElementById("home-screen");
const appScreen = document.getElementById("app-screen");
const appTitle = document.getElementById("app-title");
const appContent = document.getElementById("app-content");

document.getElementById("unlock-button").addEventListener("click", () => {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

document.querySelectorAll(".app").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.app));
});

document.getElementById("back-button").addEventListener("click", () => {
  appScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

const screens = {
  messages: {
    title: "Messages",
    html: `<p class="mini-muted">PINNED CONVERSATIONS</p>
      <div class="chat-row"><strong>June</strong><span class="mini-muted">are you still awake?</span></div>
      <div class="chat-row"><strong>Mom</strong><span class="mini-muted">Don't forget your umbrella.</span></div>
      <div class="chat-row"><strong>Clara</strong><span class="mini-muted">sending you the pictures later!</span></div>
      <hr style="border:0;border-top:1px solid #eee6eb;margin:18px 0">
      <h3>June</h3><p class="mini-muted">Today · iMessage</p>
      <div class="bubble">are you still awake?</div><div class="bubble mine">unfortunately, yes.</div><div class="bubble">you say that like you don't enjoy talking to me</div><div class="bubble mine">maybe i do. a little.</div>`
  },
  instagram: {
    title: "Instagram",
    html: `<div class="profile-top"><div class="avatar"></div><div><h3 style="margin:0">elena.jpg</h3><div class="stats"><span><b>42</b><br>posts</span><span><b>1.2k</b><br>followers</span><span><b>386</b><br>following</span></div></div></div>
      <p>collecting little moments ☁️</p><p class="mini-muted">Baliwag · personal diary</p>
      <div class="story-row"><div><div class="story"></div><small>my day</small></div><div><div class="story"></div><small>friends</small></div><div><div class="story"></div><small>somewhere</small></div></div>
      <div class="photo-grid">${Array.from({length:9},()=>'<div class="photo-tile"></div>').join("")}</div>`
  },
  photos: {
    title: "Photos",
    html: `<h3>Library</h3><p class="mini-muted">A few favorite memories · 9 items</p><div class="photo-grid">${Array.from({length:12},()=>'<div class="photo-tile"></div>').join("")}</div><p class="mini-muted">Demo gallery: replace these tiles with your own fictional photos.</p>`
  },
  spotify: {
    title: "Spotify",
    html: `<p class="mini-muted">MADE FOR ELENA</p><h3>songs for the drive home</h3><div class="playlist-art">♫</div><p style="text-align:center"><b>soft hours</b><br><span class="mini-muted">A playlist by Elena</span></p>
      <div class="song"><b>01 · Moon Song</b><br><span class="mini-muted">Phoebe Bridgers</span></div><div class="song"><b>02 · The First Day of My Life</b><br><span class="mini-muted">Bright Eyes</span></div><div class="song"><b>03 · Tahanan</b><br><span class="mini-muted">Adie</span></div><p class="mini-muted">This is a fictional playlist display; it does not stream music.</p>`
  },
  notes: {
    title: "Notes",
    html: `<h3>All iCloud</h3><div class="note-card"><b>things i don't want to forget</b><p>the color of the sky on the way home.</p><p>the way June says my name when she's sleepy.</p><p>that ordinary days can become memories, too.</p><span class="mini-muted">Today · 9:12 PM</span></div><div class="note-card"><b>little reminders</b><p>buy film<br>reply to Clara<br>finish the book</p></div>`
  },
  gmail: {
    title: "Gmail",
    html: `<h3>Primary</h3><div class="mail-row"><strong>Art Department · Exhibition details</strong><span class="mini-muted">Hi Elena, attaching the updated schedule for next week's exhibit...</span></div><div class="mail-row"><strong>June · Re: Saturday</strong><span class="mini-muted">I think I know a place you'd like.</span></div><div class="mail-row"><strong>Library · Your hold is ready</strong><span class="mini-muted">The book you requested is ready for pickup.</span></div>`
  },
  calendar: {
    title: "Calendar",
    html: `<p class="mini-muted">NOVEMBER 2026</p><h3>November</h3><div class="calendar-grid">${["S","M","T","W","T","F","S",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((d,i)=>`<span class="${d===2 && i>6?'today':''}">${d}</span>`).join("")}</div><div class="event"><b>4:30 PM · Coffee with June</b><p class="mini-muted">The little café near the bookstore.</p></div><div class="event"><b>Friday · Art project deadline</b><p class="mini-muted">Submit final photographs.</p></div>`
  }
};

function openApp(name) {
  const screen = screens[name];
  if (!screen) return;
  appTitle.textContent = screen.title;
  appContent.innerHTML = screen.html;
  homeScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  appContent.scrollTop = 0;
}
