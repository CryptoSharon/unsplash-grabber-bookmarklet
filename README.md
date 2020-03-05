# unsplash-grabber-bookmarklet
Bookmarklet to grab and credit any photo from Unsplash with one click

---

Grab and credit any photo from Unsplash with one click on a bookmarklet. Ready for blogging, auto-resized to 1200x800 (you can customise to your own preferred size on the bookmarklet)

## Instructions

Drag the following bookmarklet to your bookmarks bar:

<a href="javascript:(()=>{const t=t=>{prompt('url & credit',t)},e=location.href.split('/'),n=e[e.length-1];fetch('https://api.unsplash.com/photos/'+n,{headers:{'Content-Type':'application/json',Authorization:'Client-ID ByNZ31dx-lH97g-4OmS8mwZAltk_x48-RGTbU72B-Lk'}}).then(t=>t.json()).then(e=>{const n=e.urls.raw.concat('&h=800&w=1200'),s=`Photo by <a href='${e.user.links.html}'>${e.user.name}</a> on Unsplash`;t(`<center><img src='${n}'></center><br><center><sup>${s}</sup></center>`)}).catch(e=>t(e))})();"><img src="https://i.ibb.co/V3Rxkn2/Segmento-7.jpg" alt="UnsplashGrabber"></a>
