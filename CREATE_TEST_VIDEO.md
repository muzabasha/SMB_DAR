# 🎬 Create Test Video for Local Testing

Since you don't have video files yet, here are quick ways to create a test video:

---

## Option 1: Using FFmpeg (Recommended)

### Create a Simple Test Video (10 seconds)
```bash
# Create a test video with color and text
ffmpeg -f lavfi -i color=c=blue:s=1920x1080:d=10 -f lavfi -i sine=f=1000:d=10 -pix_fmt yuv420p test-video.mp4

# Or with a gradient
ffmpeg -f lavfi -i "color=c=blue:s=1920x1080:d=10" -f lavfi -i "sine=f=1000:d=10" -pix_fmt yuv420p test-video.mp4
```

### Create from Image (Recommended for Quick Test)
```bash
# If you have an image, create a 5-second video from it
ffmpeg -loop 1 -i image.jpg -c:v libx264 -t 5 -pix_fmt yuv420p test-video.mp4
```

### Convert to WebM
```bash
ffmpeg -i test-video.mp4 -c:v libvpx-vp9 -b:v 1M test-video.webm
```

---

## Option 2: Using Online Tools

1. **ezgif.com** - Create GIF/video from images
2. **kapwing.com** - Create videos online
3. **clipchamp.com** - Free video editor

---

## Option 3: Use Existing Video

If you have a video file:
```bash
# Convert to MP4
ffmpeg -i your-video.mov -c:v libx264 -preset medium -crf 23 course-overview.mp4

# Convert to WebM
ffmpeg -i your-video.mov -c:v libvpx-vp9 -b:v 2M course-overview.webm

# Create thumbnail
ffmpeg -i course-overview.mp4 -ss 00:00:05 -vframes 1 -vf scale=1920:1080 video-thumbnail.jpg
```

---

## Option 4: Quick Test with Placeholder

Create a simple HTML5 canvas video:

```html
<canvas id="canvas" width="1920" height="1080"></canvas>
<script>
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw gradient
const gradient = ctx.createLinearGradient(0, 0, 1920, 1080);
gradient.addColorStop(0, '#4f46e5');
gradient.addColorStop(1, '#764ba2');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1920, 1080);

// Add text
ctx.fillStyle = 'white';
ctx.font = 'bold 80px Arial';
ctx.textAlign = 'center';
ctx.fillText('Data Analytics using R', 960, 400);
ctx.font = '40px Arial';
ctx.fillText('Course Overview', 960, 500);
</script>
```

---

## Quick Setup for Testing

### Step 1: Create Test Video
```bash
# Fastest way - create 5 second test video
ffmpeg -f lavfi -i color=c=blue:s=1920x1080:d=5 -f lavfi -i sine=f=1000:d=5 -pix_fmt yuv420p assets/course-overview.mp4
```

### Step 2: Create WebM Version
```bash
ffmpeg -i assets/course-overview.mp4 -c:v libvpx-vp9 -b:v 1M assets/course-overview.webm
```

### Step 3: Create Thumbnail
```bash
ffmpeg -i assets/course-overview.mp4 -ss 00:00:01 -vframes 1 -vf scale=1920x1080 assets/video-thumbnail.jpg
```

### Step 4: Refresh Browser
- Refresh: Ctrl+R
- Hard refresh: Ctrl+Shift+R
- Video should now play!

---

## Troubleshooting

### FFmpeg Not Installed
```bash
# Windows (using chocolatey)
choco install ffmpeg

# macOS (using homebrew)
brew install ffmpeg

# Linux (Ubuntu/Debian)
sudo apt-get install ffmpeg
```

### Video Still Not Playing
1. Check file paths in `js/data.js`
2. Verify files exist in `assets/` folder
3. Open DevTools (F12) and check console
4. Try different browser

---

## File Locations

After creating videos, place them here:
```
assets/
├── course-overview.mp4
├── course-overview.webm
└── video-thumbnail.jpg
```

---

## Recommended: Use Your Own Video

For best results, use your own video:
1. Record a 2-5 minute introduction
2. Encode to MP4 and WebM
3. Create thumbnail
4. Add to assets folder
5. Refresh browser

---

**Need Help?** Check the browser console (F12) for error messages.
