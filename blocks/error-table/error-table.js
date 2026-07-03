export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  rows.forEach((row) => {
    const cells = [...row.children];
    const category = cells[0]?.textContent.trim() || '';
    const description = cells[1]?.textContent.trim() || '';
    const fix = cells[2]?.textContent.trim() || '';
    const div = document.createElement('div');
    div.className = 'error-row';
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    div.innerHTML = `<span class="badge badge-${slug}">${category}</span><span class="description">${description}</span><span class="fix">${fix}</span>`;
    block.appendChild(div);
  });
}
