function isZero(x) {
  return x < 10 ? '0' + x : x
}

function getLocalTime(i) { 
  if (typeof i !== 'number') return; 
  var d = new Date(); 
  var len = d.getTime();
  var offset = d.getTimezoneOffset() * 60000;
  var utcTime = len+offset;
  return new Date(utcTime + 3600000 * i)
}

function formatDate() {
  const time = getLocalTime(8);
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  let d = time.getDate();
  const h = time.getHours();
  const mm = time.getMinutes();
  const s = time.getSeconds();
  return y + '/' + isZero(m) + '/' + isZero(d) + ' ' + isZero(h) + ':' + isZero(mm) + ':' + isZero(s);
}

const readme = `\
### I'm DreamAwakenFateBroke. 
- 🔭 I’m currently working on Java development
- 📫 How to reach me: ifGuestInDream@163.com
- ⏰ Updated on ${formatDate()}
---

![github contribution grid snake animation](https://raw.githubusercontent.com/DreamAwakenFateBroke/DreamAwakenFateBroke/output/github-contribution-grid-snake-dark.svg#gh-dark-mode-only)
![github contribution grid snake animation](https://raw.githubusercontent.com/DreamAwakenFateBroke/DreamAwakenFateBroke/output/github-contribution-grid-snake.svg#gh-light-mode-only)

<p align="center"> 
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/DreamAwakenFateBroke/count.svg" />
</p>

\
`

console.log(readme)
