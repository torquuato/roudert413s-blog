/* shoutout to chatgpt for helping me hash the password to make it very slightly obfuscated :D*/

/* i mean if you manage to get the answer from unhashing the password...  fair enuff*/

/* i WILL be reusing this for the other input i have planned idc (OOPS spoilers. but i mean if you 
 * are seeing this ig you arent concerned about spoilers)*/

const HASHED_PASSWORD = "6851019543178a301a19255d89e89e63c1f6d379e739f2166807b2d6896206c5";

async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function checkPW() {
  const inputEl = document.getElementById('pw');
  const pw = inputEl ? inputEl.value.toUpperCase() : '';
  const h = await sha256Hex(pw);
  if (h === HASHED_PASSWORD) {
    window.location.href = 'christmas.html';
  } else {
    alert('Incorrect password');
    if (inputEl) {
      inputEl.value = '';
      inputEl.focus();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const pwInput = document.getElementById('pw');
  if (!pwInput) return;
  pwInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkPW();
    }
  });
});
