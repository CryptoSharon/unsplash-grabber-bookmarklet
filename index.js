(() => {
  const report = text => {
  	prompt('url & credit', text)
  }

  const splitAddress = location.href.split('/')

  const ID = splitAddress[splitAddress.length-1]

  const headers = {'Content-Type': 'application/json',
  'Authorization': 'Client-ID ByNZ31dx-lH97g-4OmS8mwZAltk_x48-RGTbU72B-Lk'}

  fetch('https://api.unsplash.com/photos/' + ID, {headers})
    .then(r => r.json())
    .then(json => {
			//report(JSON.stringify(json.urls))
      const url = json.urls.raw.concat("&h=800&w=1200")
      const credit = `Photo by <a href="${json.user.links.html}">${json.user.name}</a> on <a href="${json.links.html}">Unsplash</a>`
      const html = `<center><img src="${url}"></center><br><center><sup>${credit}</sup></center>`
			report(html)
  }).catch(e => report(e))
})()
