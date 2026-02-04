# 🎬 Video Playback Troubleshooting Guide

**Date**: February 4, 2026  
**Status**: ✅ Complete  
**Purpose**: Fix video playback issues

---

## 🔍 Diagnosis Steps

### Step 1: Check Browser Console
1. Open DevTools: **F12**
2. Go to **Console** tab
3. Look for error messages
4. Note any red errors

### Step 2: Check Network Tab
1. Open DevTools: **F12**
2. Go to **Network** tab
3. Reload page: **Ctrl+R**
4. Look for failed requests
5. Check video file requests

### Step 3: Verify File Paths
1. Open `js/data.js`
2. Check `courseVideo` object
3. Verify paths:
   - `videoUrl`: "assets/course-overview.mp4"
   - `videoWebM`: "assets/course-overview.webm"
   - `poster`: "assets/video-thumbnail.jpg"

### Step 4: Check File Existence
1. Navigate to project folder
2. Open `assets/` folder
3. Verify files exist:
   - [ ] course-overview.mp4
   - [ ] course-overview.webm
   - [ ] video-thumbnail.jpg

---

## ❌ Common Issues & Solutions

### Issue 1: Video Player Appears But Won't Play

**Symptoms**:
- Video player visible
- Play button doesn't work
- No error message

**Solutions**:
1. **Check video files exist**
   ```bash
   # Windows
   dir assets\course-overview.mp4
   
   # Mac/Linux
   ls -la assets/course-overview.mp4
   ```

2. **Verify file paths in js/data.js**
   ```javascript
   videoUrl: "assets/course-overview.mp4"  // Check path
   ```

3. **Hard refresh browser**
   ```
   Ctrl+Shift+R (Windows/Linux)
   Cmd+Shift+R (Mac)
   ```

4. **Clear browser cache**
   ```
   Ctrl+Shift+Delete
   ```

5. **Try different browser**
   - Chrome
   - Firefox
   - Safari
   - Edge

---

### Issue 2: "Video Not Available" Error

**Symptoms**:
- Error message appears
- Video won't load
- Status shows warning

**Solutions**:
1. **Create video files**
   ```bash
   # Quick test video
   ffmpeg -f lavfi -i color=c=blue:s=1920x1080:d=5 -f lavfi -i sine=f=1000:d=5 -pix_fmt yuv420p assets/course-overview.mp4
   ```

2. **Create WebM version**
   ```bash
   ffmpeg -i assets/course-overview.mp4 -c:v libvpx-vp9 -b:v 1M assets/course-overview.webm
   ```

3. **Create thumbnail**
   ```bash
   ffmpeg -i assets/course-overview.mp4 -ss 00:00:01 -vframes 1 -vf scale=1920x1080 assets/video-thumbnail.jpg
   ```

4. **Refresh browser**
   ```
   Ctrl+R
   ```

---

### Issue 3: Video Loads But Doesn't Play

**Symptoms**:
- Video appears to load
- Play button visible
- Clicking play does nothing

**Solutions**:
1. **Check video format**
   ```bash
   # Verify video codec
   ffmpeg -i assets/course-overview.mp4
   ```

2. **Re-encode video**
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k assets/course-overview.mp4
   ```

3. **Check browser compatibility**
   - Chrome: MP4 ✅, WebM ✅
   - Firefox: MP4 ✅, WebM ✅
   - Safari: MP4 ✅, WebM ❌
   - Edge: MP4 ✅, WebM ✅

4. **Try different browser**

---

### Issue 4: Video Buffers/Stutters

**Symptoms**:
- Video starts but stops frequently
- Loading spinner appears often
- Playback is choppy

**Solutions**:
1. **Reduce video bitrate**
   ```bash
   ffmpeg -i input.mp4 -b:v 2M assets/course-overview.mp4
   ```

2. **Compress video file**
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 28 assets/course-overview.mp4
   ```

3. **Check internet connection**
   - Test speed: speedtest.net
   - Minimum: 2 Mbps for smooth playback

4. **Close other applications**
   - Free up bandwidth
   - Reduce CPU usage

5. **Try different network**
   - Test on different WiFi
   - Test on mobile hotspot

---

### Issue 5: No Sound

**Symptoms**:
- Video plays
- No audio output
- Volume slider present

**Solutions**:
1. **Check system volume**
   - Unmute speakers
   - Increase volume

2. **Check browser volume**
   - Unmute browser tab
   - Increase video volume slider

3. **Check video has audio**
   ```bash
   ffmpeg -i assets/course-overview.mp4
   # Look for "Audio:" in output
   ```

4. **Re-encode with audio**
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -c:a aac -b:a 128k assets/course-overview.mp4
   ```

---

### Issue 6: Fullscreen Not Working

**Symptoms**:
- Fullscreen button visible
- Clicking doesn't work
- Video stays in window

**Solutions**:
1. **Try different browser**
2. **Check browser permissions**
   - Allow fullscreen in settings
3. **Try keyboard shortcut**
   - F key (in some browsers)
4. **Check browser extensions**
   - Disable ad blockers
   - Disable privacy extensions

---

### Issue 7: Mobile Video Won't Play

**Symptoms**:
- Works on desktop
- Doesn't work on mobile
- Mobile shows error

**Solutions**:
1. **Ensure MP4 is listed first**
   ```javascript
   <source src="assets/course-overview.mp4" type="video/mp4">
   <source src="assets/course-overview.webm" type="video/webm">
   ```

2. **Check mobile browser**
   - Safari (iOS): MP4 only
   - Chrome (Android): MP4 + WebM
   - Firefox (Android): MP4 + WebM

3. **Test on actual device**
   - Use network URL: http://10.42.3.140:3000
   - Test on different mobile device

4. **Check video format**
   ```bash
   ffmpeg -i assets/course-overview.mp4
   # Verify H.264 codec for mobile
   ```

---

### Issue 8: Server Error (404)

**Symptoms**:
- Network tab shows 404
- Video file not found
- Error in console

**Solutions**:
1. **Verify file exists**
   ```bash
   ls -la assets/course-overview.mp4
   ```

2. **Check file path**
   - Should be: `assets/course-overview.mp4`
   - Not: `./assets/course-overview.mp4`
   - Not: `/assets/course-overview.mp4`

3. **Restart server**
   ```bash
   # Stop: Ctrl+C
   # Start: npm start
   ```

4. **Check file permissions**
   ```bash
   # Make readable
   chmod 644 assets/course-overview.mp4
   ```

---

## 🛠️ Advanced Troubleshooting

### Check Video Codec
```bash
ffmpeg -i assets/course-overview.mp4
```

### Check Video Duration
```bash
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1:precision=2 assets/course-overview.mp4
```

### Test Video Playback
```bash
# Play locally
ffplay assets/course-overview.mp4
```

### Validate Video File
```bash
ffmpeg -i assets/course-overview.mp4 -f null -
```

---

## 📊 Browser DevTools

### Console Tab
- Check for JavaScript errors
- Look for video-related messages
- Check for CORS errors

### Network Tab
- Check video file requests
- Verify 200 status code
- Check file size
- Monitor load time

### Application Tab
- Check service worker cache
- Verify offline storage
- Check local storage

### Performance Tab
- Monitor CPU usage
- Check memory usage
- Identify bottlenecks

---

## 🔗 Useful Commands

### Create Test Video
```bash
ffmpeg -f lavfi -i color=c=blue:s=1920x1080:d=5 -f lavfi -i sine=f=1000:d=5 -pix_fmt yuv420p assets/course-overview.mp4
```

### Convert Video
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 assets/course-overview.mp4
```

### Create WebM
```bash
ffmpeg -i assets/course-overview.mp4 -c:v libvpx-vp9 -b:v 2M assets/course-overview.webm
```

### Create Thumbnail
```bash
ffmpeg -i assets/course-overview.mp4 -ss 00:00:01 -vframes 1 -vf scale=1920x1080 assets/video-thumbnail.jpg
```

### Check File Info
```bash
ffprobe assets/course-overview.mp4
```

---

## 📞 Getting Help

### Check These Files
1. **Browser Console** - F12
2. **Network Tab** - F12 > Network
3. **js/data.js** - Video configuration
4. **assets/ folder** - Video files

### Provide Information
- Browser name and version
- Error message (if any)
- File paths
- File sizes
- Video codec

### Resources
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [HTML5 Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Browser Compatibility](https://caniuse.com/video)

---

## ✅ Verification Checklist

- [ ] Video files exist in assets/ folder
- [ ] File paths correct in js/data.js
- [ ] Browser console shows no errors
- [ ] Network tab shows 200 status
- [ ] Video plays in at least one browser
- [ ] Audio works
- [ ] Controls work
- [ ] Mobile works

---

## 🎯 Quick Fix Checklist

1. [ ] Hard refresh (Ctrl+Shift+R)
2. [ ] Clear cache (Ctrl+Shift+Delete)
3. [ ] Check file paths
4. [ ] Verify files exist
5. [ ] Try different browser
6. [ ] Restart server (npm start)
7. [ ] Check console (F12)
8. [ ] Check network tab (F12)

---

**Status**: ✅ Complete  
**Date**: February 4, 2026  
**Version**: 1.0.0

For more help, check the browser console (F12) for specific error messages.
