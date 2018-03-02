function text(text) {
    // 文字介绍是否超过48个字符 超过截取前48个
    return text.length > 48 ? text.substring(0,48) : text
}
export default text