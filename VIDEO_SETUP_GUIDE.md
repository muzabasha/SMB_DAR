# 📹 Video Embedding Setup Guide

## Overview
The course overview video has been successfully integrated into the dashboard. This guide explains how to add your actual video file and customize the video settings.

## Current Implementation

### Video Component Location
- **File**: `js/components.js`
- **Component**: `CourseVideoSection()`
- **Rendered in**: Dashboard (after Welcome Card)

### Video Configuration
- **File**: `js/data.js`
- **Object**: `courseData.courseVideo`

## Step 1: Prepare Your Video File

### Video Specifications
- **Format**: MP4 (H.264 codec) + WebM (VP9 codec for fallback)
- **Resolution**: 1920x1080 (1080p) recommended
- **Bitrate**: 2-5 Mbps
- **Duration**: 2-5 minutes ideal
- **File Size**: 20-50 MB per format
- **Aspect Ratio**: 16:9

### Video Encoding Commands

**Using FFmpeg (MP4):**
```bash
ffmpeg -i input-video.mov -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k course-overview.mp4
```

**Using FFmpeg (WebM):**
```bash
ffmpeg -i input-video.mov -c:v libvpx-vp9 -b:v 2M -c:a libopus -b:a 128k course-overview.webm
```

## Step 2: Add Video Files to Project

1. Create video files in the `assets/` folder:
   - `assets/course-overview.mp4`
   - `assets/course-overview.webm`
   - `assets/video-thumbnail.jpg` (poster image)

2. File structure:
```
assets/
├── logo.png
├── course-overview.mp4
├── course-overview.webm
└── video-thumbnail.jpg
```

## Step 3: Update Video Configuration

Edit `js/data.js` and update the `courseVideo` object:

```javascript
courseVideo: {
    title: "Welcome to Data Analytics using R",
    description: "Get started with our comprehensive course on Data Analytics using R. Learn the fundamentals, explore real-world applications, and master the tools you need to become a data analyst.",
    duration: "3:45",
    thumbnail: "assets/video-thumbnail.jpg",
    videoUrl: "assets/course-overview.mp4",
    videoWebM: "assets/course-overview.webm",
    autoplay: false,
    controls: true,
    muted: false,
    poster: "assets/video-thumbnail.jpg"
}
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `title` | string | Video title displayed below player |
| `description` | string | Video description/subtitle |
| `duration` | string | Video duration (e.g., "3:45") |
| `thumbnail` | string | Path to thumbnail image |
| `videoUrl` | string | Path to MP4 video file |
| `videoWebM` | string | Path to WebM video file (fallback) |
| `autoplay` | boolean | Auto-play on page load (default: false) |
| `controls` | boolean | Show video controls (default: true) |
| `muted` | boolean | Mute audio by default (default: false) |
| `poster` | string | Poster image shown before play |

## Step 4: Create Thumbnail Image

The thumbnail appears before the video plays. Recommended specifications:
- **Size**: 1920x1080 pixels
- **Format**: JPG or PNG
- **File Size**: < 500 KB
- **Content**: Key frame from video or custom design

### Creating Thumbnail with FFmpeg:
```bash
ffmpeg -i course-overview.mp4 -ss 00:00:05 -vframes 1 -vf scale=1920:1080 video-thumbnail.jpg
```

## Step 5: Test the Video

1. **Local Testing**:
   - Open `index.html` in a browser
   - Navigate to Dashboard
   - Video should appear after Welcome Card
   - Test play, pause, fullscreen, volume controls

2. **Browser Compatibility**:
   - Chrome/Edge: MP4 support ✓
   - Firefox: WebM support ✓
   - Safari: MP4 support ✓
   - Mobile browsers: MP4 support ✓

3. **Offline Testing**:
   - Service worker caches video files
   - Video should play offline after first load
   - Check browser DevTools > Application > Cache Storage

## Step 6: Customize Video Appearance

### Modify Video Container Styling

Edit `styles/main.css` to customize:

```css
.course-video-section {
    margin-top: 30px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15);
}

.video-container {
    background: #000;
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-info {
    padding: 24px;
    background: var(--bg-card);
}
```

### Add Custom Badges

Modify the badge section in `CourseVideoSection()` component:

```javascript
<div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
    <span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary);">📹 Course Overview</span>
    <span class="badge" style="background: rgba(16, 185, 129, 0.1); color: var(--secondary);">✓ Beginner Friendly</span>
    <span class="badge" style="background: rgba(245, 158, 11, 0.1); color: var(--accent);">⭐ Recommended</span>
</div>
```

## Step 7: Add Captions (Optional)

To add video captions, modify the video element in `CourseVideoSection()`:

```javascript
<video id="course-video" controls poster="${video.poster}">
    <source src="${video.videoUrl}" type="video/mp4">
    <source src="${video.videoWebM}" type="video/webm">
    <track kind="captions" src="assets/captions.vtt" srclang="en" label="English">
    Your browser does not support the video tag.
</video>
```

### Create VTT Caption File

Create `assets/captions.vtt`:

```vtt
WEBVTT

00:00:00.000 --> 00:00:05.000
Welcome to Data Analytics using R

00:00:05.000 --> 00:00:10.000
This course is designed for non-CSE students

00:00:10.000 --> 00:00:15.000
No programming background required
```

## Step 8: Performance Optimization

### Video Optimization Tips

1. **Compression**: Use appropriate bitrate (2-5 Mbps)
2. **Format**: Provide both MP4 and WebM for compatibility
3. **Lazy Loading**: Video loads only when dashboard is viewed
4. **Caching**: Service worker caches video for offline access
5. **Responsive**: Video scales to container width

### Monitor Performance

- Check DevTools > Network tab for video load time
- Verify video file sizes are reasonable
- Test on slow 3G connection (DevTools > Throttling)

## Step 9: Deployment

### GitHub Pages
```bash
git add assets/course-overview.mp4 assets/course-overview.webm assets/video-thumbnail.jpg
git commit -m "Add course overview video"
git push origin main
```

### Netlify/Vercel
- Video files are automatically deployed with your site
- No additional configuration needed
- Videos are cached by CDN

### Self-Hosted
- Upload video files to your server
- Update `videoUrl` and `videoWebM` paths if needed
- Ensure CORS headers allow video playback

## Troubleshooting

### Video Not Playing
- Check file paths in `courseData.courseVideo`
- Verify video format is supported (MP4 or WebM)
- Check browser console for errors
- Test on different browser

### Video Buffering
- Reduce video bitrate (use 2 Mbps instead of 5 Mbps)
- Compress video file size
- Check internet connection speed
- Enable browser caching

### Captions Not Showing
- Verify VTT file path is correct
- Check VTT file format (use online validator)
- Ensure captions are enabled in video player
- Test on different browser

### Mobile Issues
- Test on actual mobile device
- Verify video format (MP4 works best)
- Check mobile data connection
- Disable autoplay on mobile (battery/data saving)

## Advanced Features

### Add Video Analytics
Track video engagement by adding event listeners:

```javascript
const video = document.getElementById('course-video');
video.addEventListener('play', () => console.log('Video started'));
video.addEventListener('pause', () => console.log('Video paused'));
video.addEventListener('ended', () => console.log('Video completed'));
```

### Add Multiple Videos
Create additional video sections for different units:

```javascript
courseData.unitVideos = {
    unit1: { title: "Unit 1 Overview", videoUrl: "assets/unit1.mp4", ... },
    unit2: { title: "Unit 2 Overview", videoUrl: "assets/unit2.mp4", ... }
}
```

### Add Video Transcript
Display transcript below video:

```javascript
<div class="video-transcript" style="margin-top: 20px; padding: 20px; background: var(--bg-main); border-radius: 12px;">
    <h4>📄 Video Transcript</h4>
    <p>${video.transcript}</p>
</div>
```

## Resources

- **FFmpeg Guide**: https://ffmpeg.org/documentation.html
- **Video Formats**: https://developer.mozilla.org/en-US/docs/Web/Media/Formats
- **WebVTT Captions**: https://www.w3.org/TR/webvtt1/
- **HTML5 Video**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

## Support

For issues or questions:
1. Check browser console for error messages
2. Verify video file paths and formats
3. Test on different browser/device
4. Review this guide for configuration options

---

**Last Updated**: February 4, 2026
**Version**: 1.0.0
