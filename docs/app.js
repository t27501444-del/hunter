const USER = "t27501444-de1";
const REPO = "hunter";
const api =
`https://api.github.com/repos/${USER}/${REPO}/releases/latest`;

fetch(api)

.then(r=>r.json())

.then(data=>{

document.getElementById("version").innerText=data.tag_name;

const asset=data.assets[0];

document.getElementById("downloads").innerText=asset.download_count;

document.getElementById("downloadButton").href=asset.browser_download_url;

document.getElementById("releaseNote").innerText=data.body;

})

.catch(error=>{

console.log(error);

});
