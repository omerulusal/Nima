const textClip = (text) => {
    if (text.toString().length < 20) return text
    return text.substring(0, 20) + "..."
}
export default textClip;