export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  rows.forEach((row) => {
    const cells = [...row.children];
    const metric = cells[0]?.textContent.trim() || '';
    const scoreText = cells[1]?.textContent.trim() || '0';
    const delta = cells[2]?.textContent.trim() || '';
    const score = parseFloat(scoreText);
    let cls = 'sc-poor';
    if (score >= 90) cls = 'sc-great';
    else if (score >= 50) cls = 'sc-ok';
    const div = document.createElement('div');
    div.className = 'score-row';
    div.innerHTML = `<span class="metric">${metric}</span><span class="score ${cls}">${scoreText}</span><span class="delta">${delta}</span>`;
    block.appendChild(div);
  });
}
