const week = {
	"0":"日",
	"1":"一",
	"2":"二",
	"3":"三",
	"4":"四",
	"5":"五",
	"6":"六"
};

export default function formatDate (date) {
	const d = new Date(date)
	const weekday = week[d.getDay()]
	const day = d.getDate()
	const month = d.getMonth() + 1
	const year = d.getFullYear()
	return `${year}年${month}月${day}日 (星期${weekday})`
}