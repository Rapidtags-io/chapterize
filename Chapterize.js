function toSeconds(ts) {
  const split = ts.split(":")
  let seconds = 0
  if (split.length === 3) {
    // hr:min:second
    seconds = parseInt(split[0]) * 3600 + parseInt(split[1]) * 60 + parseInt(split[2])
  } else {
    // min:second
    seconds = parseInt(split[0]) * 60 + parseInt(split[1])
  }

  return seconds
}

export default function ParseChapters(description) {
  // Extract timestamps (either 00:00:00, 0:00:00, 00:00 or 0:00)
  const lines = description.split("\n")
  const regex = /(\d{0,2}:?\d{1,2}:\d{2})/g
  const chapters = []

  for (const line of lines) {
    // Split at spaces
    const matches = line.match(regex)

    // Remove the part of the string that includes the timestamp (And a)
    if (matches) {
      const ts = matches[0]
      const title = line
        .split(" ")
        .filter((l) => !l.includes(ts))
        .join(" ")
        .replaceAll("-", "") // Strip most common sentence splitters
        .replaceAll(":", "")
        .replaceAll("|", "")
        .trim()

      chapters.push({
        timestamp: ts,
        seconds: toSeconds(ts),
        title: title,
        line: line,
      })
    }
  }

  return chapters
}
