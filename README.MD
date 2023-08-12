### Media-cdn a png passtrough for the jellyfin splash screen



### how to build
1. change the fs code in index.html for your install of jellyfin
```
  const img = fs.readFileSync("C:\\ProgramData\\Jellyfin\\Server\\data\\splashscreen.png");01~
``` on windows 
and i dont know linux and mac paths
