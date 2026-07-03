export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const ol = document.createElement('ol');
  ol.className = 'tl-list';
  rows.forEach((row) => {
    const [status, label, detail] = [...row.children].map((c) => c.textContent.trim());
    const li = document.createElement('li');
    li.className = `tl-item tl-${status === '✓' ? 'pass' : 'fail'}`;
    li.innerHTML = `<span class="tl-dot"></span><span class="tl-label">${label}</span><span class="tl-detail">${detail}</span>`;
    ol.appendChild(li);
  });
  block.appendChild(ol);
}
