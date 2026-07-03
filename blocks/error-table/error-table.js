export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const colors = { docs_gap: '#6366f1', product_issue: '#ef4444', permission_gap: '#f97316', env_issue: '#3b82f6' };
  const labels = { docs_gap: 'Docs Gap', product_issue: 'Product Issue', permission_gap: 'Permission', env_issue: 'Env Issue' };
  rows.forEach((row) => {
    const [cat, action, message] = [...row.children].map((c) => c.textContent.trim());
    const div = document.createElement('div');
    div.className = 'et-row';
    const color = colors[cat] || '#6b7280';
    div.innerHTML = `
      <span class="et-badge" style="background:${color}">${labels[cat] || cat}</span>
      <span class="et-action">${action}</span>
      <span class="et-message">${message}</span>`;
    block.appendChild(div);
  });
}
