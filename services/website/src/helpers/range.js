export default function range (start, end) {
	return Array.from(
			Array(Math.abs(end - start) + 1),
			(_, i) => start + i
	)
}