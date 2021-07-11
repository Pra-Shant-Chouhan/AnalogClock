setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;      //hour hand rotation 12 hr =360deg, 1hr=30deg rotation due to min. 60 min = 30deg so 1 min = 1/2deg
    mrotation = 6 * mtime;   // 60 min =360deg ,1min =6deg ,minutes formula is 6m
    srotation = 6 * stime;  // second hand rotation =

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);