const change = document.getElementById('btn');

setTimeout(() => {
  document.getElementById('text').textContent = 'ボタンがクリックされました';
  change.addEventListener('click', () => {
  });
}, 2000);