const escMap: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (value: string) => value.replace(/[&<>"']/g, (char) => escMap[char]);

export function renderMarkdown(markdown: string): string {
	const blocks = markdown.trim().split(/\n{2,}/);
	return blocks
		.map((block) => {
			const lines = block.split('\n').map((line) => line.trim());
			const heading = lines[0].match(/^(#{1,3})\s+(.+)$/);
			if (heading) {
				const level = heading[1].length + 2;
				return `<h${level}>${inline(heading[2])}</h${level}>`;
			}

			if (lines.every((line) => /^[-*]\s+/.test(line))) {
				return `<ul>${lines.map((line) => `<li>${inline(line.replace(/^[-*]\s+/, ''))}</li>`).join('')}</ul>`;
			}

			return `<p>${inline(lines.join(' '))}</p>`;
		})
		.join('');
}

function inline(value: string): string {
	return esc(value)
		.replace(/`([^`]+)`/g, '<code>$1</code>')
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
		.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noreferrer" target="_blank">$1</a>');
}
