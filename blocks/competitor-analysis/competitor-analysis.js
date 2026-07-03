const STATUS_COLORS = {
  eds_has: '#1a7f37',
  eds_partial: '#3b82f6',
  eds_gap: '#f97316',
  eds_architectural: '#6b7280',
};

const STATUS_LABELS = {
  eds_has: 'EDS Has',
  eds_partial: 'Partial',
  eds_gap: 'Gap',
  eds_architectural: 'Arch Limit',
};

export default function decorate(block) {
  const rows = [...block.children];
  // First row may be a column header row — skip it if first cell has no link and reads "Feature"
  const startIdx = rows[0]?.children[0]?.textContent.trim() === 'Feature' ? 1 : 0;
  block.innerHTML = '';

  rows.slice(startIdx).forEach((row) => {
    const cells = [...row.children];
    const [featureEl, sourceEl, statusEl, implEl, frictionEl, docEl] = cells;

    const feature = featureEl?.textContent.trim() || '';
    const source = sourceEl?.textContent.trim() || '';
    const statusRaw = statusEl?.textContent.trim().replace(/`/g, '') || 'unknown';
    const impl = implEl?.textContent.trim();
    const friction = frictionEl?.innerHTML || '—';
    const docHTML = docEl?.innerHTML || '—';

    const color = STATUS_COLORS[statusRaw] || '#6b7280';
    const label = STATUS_LABELS[statusRaw] || statusRaw;
    const isImpl = impl === '✓' || impl === '✔' || impl === '&#10003;' || impl.includes('✓') || impl.includes('✔');

    const card = document.createElement('div');
    card.className = 'ca-card';
    card.innerHTML = `
      <div class="ca-header">
        <span class="ca-feature">${feature}</span>
        <span class="ca-badge" style="background:${color}">${label}</span>
        <span class="ca-impl ${isImpl ? 'ca-pass' : 'ca-fail'}">${isImpl ? '✓ Implemented' : '✗ Not implemented'}</span>
      </div>
      <div class="ca-source">Seen in: ${source}</div>
      <details class="ca-friction">
        <summary>Friction encountered</summary>
        <div class="ca-friction-body">${friction}</div>
      </details>
      <div class="ca-doc">Doc suggestion: ${docHTML}</div>`;
    block.appendChild(card);
  });
}
