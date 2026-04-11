/**
 * Very small markdown renderer for Notion-exported content.
 * We keep this minimal to avoid pulling in a heavy markdown lib.
 * It supports: headings, paragraphs, bold, italic, links, lists, images, blockquotes.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function inline(s: string): string {
  let out = escapeHtml(s);
  // Images: ![alt](url)
  out = out.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2" loading="lazy" />'
  );
  // Links: [text](url)
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  // Bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic *text*
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  // Inline code `code`
  out = out.replace(
    /`([^`]+)`/g,
    '<code class="bg-sable/30 px-1.5 py-0.5 rounded text-sm">$1</code>'
  );
  return out;
}

export function renderMarkdown(md: string): string {
  if (!md) return '';
  const lines = md.split('\n');
  const html: string[] = [];
  let inList: null | 'ul' | 'ol' = null;

  const closeList = () => {
    if (inList) {
      html.push(`</${inList}>`);
      inList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^\s*$/.test(line)) {
      closeList();
      continue;
    }

    // Headings
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      closeList();
      const level = h[1].length;
      html.push(`<h${level}>${inline(h[2])}</h${level}>`);
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      closeList();
      html.push(`<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`);
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      if (inList !== 'ul') {
        closeList();
        html.push('<ul>');
        inList = 'ul';
      }
      html.push(`<li>${inline(line.replace(/^[-*]\s+/, ''))}</li>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      if (inList !== 'ol') {
        closeList();
        html.push('<ol>');
        inList = 'ol';
      }
      html.push(`<li>${inline(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    // Image on its own line
    if (/^!\[.*\]\(.*\)$/.test(line.trim())) {
      closeList();
      html.push(inline(line.trim()));
      continue;
    }

    // Paragraph
    closeList();
    html.push(`<p>${inline(line)}</p>`);
  }

  closeList();
  return html.join('\n');
}
