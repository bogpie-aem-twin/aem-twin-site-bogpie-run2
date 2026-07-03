export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  rows.forEach((row) => {
    const cells = [...row.children].map((c) => c.textContent.trim());
    const [step, role, status, issues] = cells;
    const div = document.createElement('div');
    div.className = `fm-row ${status === '✓' ? 'fm-pass' : 'fm-fail'}`;
    div.innerHTML = `
      <span class="fm-step">${step}</span>
      <span class="fm-role">${role}</span>
      <span class="fm-status">${status === '✓' ? '✓' : '✗'}</span>
      <span class="fm-issues">${issues} issue${issues === '0' || issues === '1' ? '' : 's'}</span>`;
    block.appendChild(div);
  });
}
