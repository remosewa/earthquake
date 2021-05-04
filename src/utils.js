const dateFormatOptions = { month: 'short', year: 'numeric', day: 'numeric', hour: "numeric", minute: "numeric"}


export function formatTime(time) {
    return new Date(time).toLocaleDateString("en-US", dateFormatOptions);
}