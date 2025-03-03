export function getHTMLFormattedTime(date: Date) {
    let
        y = date.getFullYear(),
        m = date.getMonth(),
        d = date.getDate()

    m = m < 10 ? '0' + m : m
    d = d < 10 ? '0' + d : d

    return y + '-' + m + '-' + d
}