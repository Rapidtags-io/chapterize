# Chapterize

Extract chapters from a YouTube video description.

The goal of Chapterize is to provide a simple way to extract chapters from the descriptions of YouTube videos. 

We've created this library because YouTube's Data API does not currently provide any method to easily extract chapter names and their timestamps. We need to 

# Usage

Install Chapterize:

```npm i @rapidtags/chapterize```

Running Chapterize: (TODO, Add Example)

```javascript
const { ParseChapters } = require('rapidtags')
const chapters = Chapterize.ParseChapters('')
```

# Issues

If you have found a video where this does not work correctly, please open up an issue with the video URL and I will update it with a solution.