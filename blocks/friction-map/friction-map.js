export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  rows.forEach((row) => {
    const cells = [...row.children];
    const step = cells[0]?.textContent.trim() || '';
    const role = cells[1]?.textContent.trim() || '';
    const status = cells[2]?.textContent.trim() || '';
    const count = cells[3]?.textContent.trim() || '';
    const isPassed = status.includes('✓') || status.toLowerCase() === 'pass';
    const div = document.createElement('div');
    div.className = `friction-row ${isPassed ? 'pass' : 'fail'}`;
    div.innerHTML = `<span class="step">${step}</span><span class="role">${role}</span><span class="status">${status}</span><span class="count">${count}</span>`;
    block.appendChild(div);
  });
}
