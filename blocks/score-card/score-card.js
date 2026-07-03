export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'sc-grid';
  rows.forEach((row) => {
    const [label, score, delta] = [...row.children].map((c) => c.textContent.trim());
    const n = parseInt(score, 10);
    const cls = n >= 90 ? 'sc-great' : n >= 50 ? 'sc-ok' : 'sc-poor';
    const card = document.createElement('div');
    card.className = 'sc-item';
    card.innerHTML = `
      <div class="sc-label">${label}</div>
      <div class="sc-score ${cls}">${score}</div>
      <div class="sc-delta">${delta}</div>`;
    grid.appendChild(card);
  });
  block.appendChild(grid);
}
