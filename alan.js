const music = new Audio('audio/Alan/1.mp3');
//music.play()

const songs = [             //Array of songs
    {
        id:'1',
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/1.jpg"
    },
    {
        id:'2',
        songName: `Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/2.jpg"
    },
    {
        id:'3',
        songName: `Cartoon - On & On <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/Alan/3.jpg"
    },
    {
        id:'4',
        songName: `Warriyo  <br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/Alan/4.jpg"
    },
    {
        id:'5',
        songName: `Gazi <br>
        <div class="subtitle">Ertugrul</div>`,
        poster: "img/Alan/5.jpg"
    },
    {
        id:'6',
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: "img/Alan/6.jpg"
    },
    {
        id:'7',
        songName: `Somebody Like you <br>
        <div class="subtitle">Alan Walker x Au/Ra
        </div>`,
        poster: "img/Alan/7.jpg"
    },
    {
        id:'8',
        songName: `The Drum <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/8.jpg"
    },
    {
        id:'9',
        songName: `End Of Time <br>
        <div class="subtitle">Ahrix, Alan Walker & K-391</div>`,
        poster: "img/Alan/9.jpg"
    },
    {
        id:'10',
        songName: `Are you Lonely <br>
        <div class="subtitle">Alan Walker x Steve Aoki</div>`,
        poster: "img/Alan/10.jpg"
    },
    {
        id:'11',
        songName: `Sorry <br>
        <div class="subtitle">Alan Walker x ISÁK
        </div>`,
        poster: "img/Alan/11.jpg"
    },
    {
        id:'12',
        songName: `Force <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/12.jpg"
    },
    {
        id:'13',
        songName: `I don't Wanna Go <br>
        <div class="subtitle">Alan Walker & Julie Bergan</div>`,
        poster: "img/Alan/13.jpg"
    },
    {
        id:'14',
        songName: `Light Dreams <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/14.jpg"
    },
    {
        id:'15',
        songName: `Flying Dreams <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/15.jpg"
    },
    {
        id:'16',
        songName: `New Heart <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/16.jpg"
    },
    {
        id:'17',
        songName: `The Raid <br>
        <div class="subtitle">Instrumental- Alan Walker</div>`,
        poster: "img/Alan/17.jpg"
    },
    {
        id:'18',
        songName: `Routine <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/18.jpg"
    },
    {
        id:'19',
        songName: `Sing me to Sleep <br>
        <div class="subtitle">Alan Walker &Jesper Borgen</div>`,
        poster: "img/Alan/19.jpg"
    },
    {
        id:'20',
        songName: `This is me <br>
        <div class="subtitle"> Alan Walker & Keala Settle
        </div>`,
        poster: "img/Alan/20.jpg"
    },
    {
        id:'21',
        songName: `Lily <br>
        <div class="subtitle">Alan Walker, Emelie Hollow & K-391
        </div>`,
        poster: "img/Alan/21.jpg"
    },
    {
        id:'22',
        songName: `Sky - VIP <br>
        <div class="subtitle">Alan Walker x Alex Skrindo</div>`,
        poster: "img/Alan/22.jpg"
    },
    {
        id:'23',
        songName: `Memories <br>
        <div class="subtitle">MC Daniell & Alan Walker</div>`,
        poster: "img/Alan/23.jpg"
    },
    {
        id:'24',
        songName: `Long Road <br>
        <div class="subtitle">Avicii & Alan Walker</div>`,
        poster: "img/Alan/24.jpg"
    },
    {
        id:'25',
        songName: `Hope <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/Alan/25.jpg"
    },
]    






//To get all the song song names and posters

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


//search songs 

let searchresults=document.getElementsByClassName('searchresults')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;
    searchresults.appendChild(card);
});

let input=document.getElementsByTagName('input')[0];

input.addEventListener('keyup',() => {
    let inputvalue= input.value.toUpperCase();
    let items = searchresults.getElementsByTagName('a');

    for(let i=0 ; i<items.length;i++){
        let as=items[i].getElementsByClassName('content')[0];
        let textvalue = as.textContent || as.innerText;

        if(textvalue.toUpperCase().indexOf(inputvalue)>-1){
            items[i].style.display="flex";
            
        }
        else{
            items[i].style.display="none";
            
        }

        if(input.value == 0){
            searchresults.style.display="none";
            
        }
        else{
            searchresults.style.display="";
        }
    }
});

//To scroll the popsongs

let popsongleft=document.getElementById('popsongleft');
let popsongright=document.getElementById('popsongright');
let popsongs=document.getElementsByClassName('popsongs')[0];

popsongright.addEventListener('click',()=>{
    popsongs.scrollLeft+=330;
})

popsongleft.addEventListener('click',()=>{
    popsongs.scrollLeft-=330;
})


//To scroll the  poparts

let popartleft=document.getElementById('popartleft');
let popartright=document.getElementById('popartright');
let item=document.getElementsByClassName('item')[0];

popartright.addEventListener('click',()=>{
    item.scrollLeft+=330;
})

popartleft.addEventListener('click',()=>{
    item.scrollLeft-=330;
});


//To animate the waves and change the masterplay icon

let masterPlay=document.getElementById('masterPlay');
let wave= document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{

    if (music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    }
    else
    {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
});

//Changing the background of Current Song
const makeAllBackground= ()=> {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgba(105, 105, 105, .0)';
    })
}

//Changing all the icons to play icon
const makeAllPlays= ()=> {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

//Playing a song using play icon anywhere

let index=0;
let postermasterplay= document.getElementById('postermasterplay');
let downloadmusic=document.getElementById('downloadmusic');
let title=document.getElementById('title');



Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        
        index = el.target.id;
        music.src=`audio/Alan/${index}.mp3`;                                    //Giving the music source
        postermasterplay.src= `img/Alan/${index}.jpg`;                          //Changing the poster to current song
        masterPlay.classList.remove('bi-play-fill');                            //Removing play icon and adding pause icon
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');                                          //Starting wave animation

        downloadmusic.href = `audio/Alan/${index}.mp3`                          //Setting source for downloading song
        
        //Changing the name of download file to the name of the song
        let songTitles = songs.filter((els) =>{                                 
            return els.id == index; 
        });
        songTitles.forEach(elss =>{
            let {songName}= elss;
            title.innerHTML = songName
            downloadmusic.setAttribute('download',songName);
        });
        // makeAllPlays();
        // makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        music.play();
    });
})


//Playing a song from clicking a div in popsongs

Array.from(document.getElementsByClassName('musicphoto')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
      
        index = el.target.id-25 ;
        music.src=`audio/Alan/${index}.mp3`;
        postermasterplay.src= `img/Alan/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        wave.classList.add('active1');

        downloadmusic.href = `audio/Alan/${index}.mp3`
        
        let songTitles = songs.filter((els) =>{
            return els.id == index; 
        });
        songTitles.forEach(elss =>{
            let {songName}= elss;
            title.innerHTML = songName
            downloadmusic.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        music.play();
    });
})


//Playing a song from clicking in div on lhs

Array.from(document.getElementsByClassName('lhsmusicphoto')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
  
        index = el.target.id-25 ;
        console.log(index);
        music.src=`audio/Alan/${index}.mp3`;
        postermasterplay.src= `img/Alan/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        wave.classList.add('active1');

        downloadmusic.href = `audio/Alan/${index}.mp3`
        
        let songTitles = songs.filter((els) =>{
            return els.id == index; 
        });
        songTitles.forEach(elss =>{
            let {songName}= elss;
            title.innerHTML = songName
            downloadmusic.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
        makeAllPlays();
        music.play();
    });
})


//Seek Manipulation and time manipulation
let currentStart= document.getElementById('currentstart');
let currentEnd= document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let musiccurr=music.currentTime;
    let musicdur=music.duration;

    let min1= Math.floor(musicdur/60);
    let sec1 = Math.floor(musicdur%60);

    if (sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText= `${min1}:${sec1}`;

    let min2 = Math.floor(musiccurr / 60);
    let sec2 = Math.floor(musiccurr % 60);
    if (sec2 < 10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText= `${min2}:${sec2}`;

    let progressbar = parseInt((musiccurr / musicdur)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}% `;
    dot.style.left= `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration /100;
})

//Vol manipulaton
let volicon= document.getElementById('volicon');
let vol= document.getElementById('vol');
let volbar= document.getElementsByClassName('volbar')[0];
let voldot= document.getElementById('voldot');

vol.addEventListener('change', ()=>{
    if (vol.value==0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.add('bi-volume-off-fill');
    }

    if(vol.value>0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.add('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-off-fill');
    }

    if (vol.value >60){
        volicon.classList.add('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-off-fill');
    }

    let vola= vol.value;
    music.volume = vola/100;
    volbar.style.width = `${vola}%`
    voldot.style.left = `${vola}%`
})

//Using prev and next icons to change songs

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index=index-1;
    console.log(index);
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/Alan/${index}.mp3`;
    postermasterplay.src= `img/Alan/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active1');
    downloadmusic.href = `audio/Alan/${index}.mp3` 
    // console.log(`audio/Alan/${index}.mp3`);
    let songTitles = songs.filter((els) =>{
        return els.id == index; 
    });
    songTitles.forEach(elss =>{
        let {songName}= elss;
        title.innerHTML = songName
        downloadmusic.setAttribute('download',songName);
      
    });
    music.play();
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
});

next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    downloadmusic.href = `audio/Alan/${index}.mp3`
    music.src=`audio/Alan/${index}.mp3`;
    postermasterplay.src= `img/Alan/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active1');
    downloadmusic.href = `audio/Alan/${index}.mp3` 
    let songTitles = songs.filter((els) =>{
        return els.id == index; 
    });
    songTitles.forEach(elss =>{
        let {songName}= elss;
        title.innerHTML = songName
        downloadmusic.setAttribute('download',songName);
    });

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    music.play();
})


//shuffle button

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=>{
    let a= shuffle.innerHTML;
    switch(a){
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const nextmusic = ()=>{
    if(index==songs.length){
        index=1;
    }
    else{
        index++
    }
    music.src=`audio/Alan/${index}.mp3`;
    postermasterplay.src= `img/Alan/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active1');
    music.play();

    downloadmusic.href = `audio/Alan/${index}.mp3`
    
    let songTitles = songs.filter((els) =>{
        return els.id == index; 
    });
    songTitles.forEach(elss =>{
        let {songName}= elss;
        title.innerHTML = songName
        downloadmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
}

const repeatmusic = ()=>{
    index;
    music.src=`audio/Alan/${index}.mp3`;
    postermasterplay.src= `img/Alan/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active1');
    music.play();

    downloadmusic.href = `audio/Alan/${index}.mp3`
    
    let songTitles = songs.filter((els) =>{
        return els.id == index; 
    });
    songTitles.forEach(elss =>{
        let {songName}= elss;
        title.innerHTML = songName
        downloadmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
}

const randommusic= ()=>{
    if(index==songs.length){
        index=1;
    }
    else{
        index = Math.floor((Math.random() * songs.length+1));
    }
    music.src=`audio/Alan/${index}.mp3`;
    postermasterplay.src= `img/Alan/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active1');
    music.play();

    downloadmusic.href = `audio/Alan/${index}.mp3`
    
    let songTitles = songs.filter((els) =>{
        return els.id == index; 
    });
    songTitles.forEach(elss =>{
        let {songName}= elss;
        title.innerHTML = songName
        downloadmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";    
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch(b){
        case "repeat":
            repeatmusic();
            break;
        
        case "next":
            nextmusic();
            break;

        case "random":
            randommusic();
            break;
    }     
})



let menulistactivebutton = document.getElementById('menulistactivebutton');
let menuSide= document.getElementsByClassName('menuSide')[0];


if(Math.max(window.innerWidth)<930){

menulistactivebutton.addEventListener('click', ()=>{
    menuSide.style.transform = "translateX(5%)";
    menulistactivebutton.style.opacity = 0;
})

let songSide = document.getElementsByClassName('songSide')[0];

songSide.addEventListener('click',()=>{
    menuSide.style.transform="translateX(-100%)";
    menulistactivebutton.style.opacity = 1;

})
}
