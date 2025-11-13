const HASHED_PASSWORD = "3cec4f14c0e0f561e381cac55635c1b2a0dcc066842214c18d825128c89747fb";

async function checkPW() {
  const input = document.getElementById('evilInput');
  if (!input) return;
  const data = new TextEncoder().encode(input.value.toUpperCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  if (hash === HASHED_PASSWORD) {
    window.location.href = 'https://pastebin.com/zE0nGuDQ';
  } else {
    alert('3vil Santa: wr0ng!!! mayb3 try visiting anoth3r pag3 and c0ming back? 0h WAIT. i chang3d all th3 links! 00PS! >:)');
    input.value = '';
    input.focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('evilInput');
  const button = document.getElementById('sendButton');
  if (!input) return;

  input.addEventListener('keydown', e => { if (e.key === 'Enter') checkPW(); });
  if (button) button.addEventListener('click', checkPW);
});
