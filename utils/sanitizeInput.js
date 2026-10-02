import sanitizeHtml from 'sanitize-html';

export function sanitizeInput(data) {
	return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string'
        ? sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes: {} })
        : value
      ])
    )
}
