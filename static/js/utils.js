
export function dateToString (d, short) {
  var month = d.getUTCMonth() + 1
  var day = d.getUTCDate()
  var hour = d.getUTCHours() + ''
  if (hour.length === 1) hour = '0' + hour
  var minute = d.getUTCMinutes() + ''
  if (minute.length === 1) minute = '0' + minute

  var monthString = ''
  if (month === 1) monthString = 'January'
  if (month === 2) monthString = 'February'
  if (month === 3) monthString = 'March'
  if (month === 4) monthString = 'April'
  if (month === 5) monthString = 'May'
  if (month === 6) monthString = 'June'
  if (month === 7) monthString = 'July'
  if (month === 8) monthString = 'August'
  if (month === 9) monthString = 'September'
  if (month === 10) monthString = 'October'
  if (month === 11) monthString = 'November'
  if (month === 12) monthString = 'December'
  if (short) monthString = monthString.slice(0, 3)

  return monthString + ' ' + day + ', ' + hour + ':' + minute
}

export function lerp (start, end, ratio) {
  return start + (end - start) * ratio
}