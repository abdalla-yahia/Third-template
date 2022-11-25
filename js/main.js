let links = document.getElementsByTagName('li')
let other_Links = document.querySelector('.other-links')
links[3].addEventListener('mouseenter', () => {
    other_Links.style.display = "block";
})
links[3].addEventListener('mouseleave', () => {
    other_Links.style.display="none"
})

other_Links.addEventListener('mouseenter', () => {
    other_Links.style.display="block"
})
other_Links.addEventListener('mouseleave', () => {
    other_Links.style.display="none"
})

let span_prog = document.querySelectorAll('.span-prog')
let Our_Skills = document.querySelector('#our-skills')
window.addEventListener("scroll", () => {

    if (window.scrollY  >= Our_Skills.offsetTop - 50)
    {
        // console.log();
    span_prog.forEach(e => {
            e.style.width = e.dataset.prog
        });
    }  
})



setInterval(()=>{
    let dayes = document.querySelector('.dayes')
    let houres = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')
    let next_year = document.querySelector('.next-year')
const date = new Date()

let month = ((((date.getFullYear()+1)*12) - ((date.getFullYear() * 12 )+((date.getMonth()+1))))*31);
let Dayes = (30 - date.getDate());
let Houres = (date.getHours())
let Minutes = (date.getMinutes())
let Seconds = (date.getSeconds());
let totalDayes = (month + Dayes);

    next_year.innerHTML = date.getFullYear()+1
//Set Dayes
let netDayes = totalDayes
if (netDayes < 10) {
        dayes.innerHTML ="0"+ netDayes
    }else dayes.innerHTML = netDayes
//Set Houres

let netHoures = Houres - 23
if (netHoures * -1 < 10) {
    houres.innerHTML = "0"+ netHoures * -1
}else houres.innerHTML = netHoures * -1

//Set Minutes
let netMinutes = Minutes - 59
if (netMinutes * -1 < 10) {
        minutes.innerHTML ="0"+ netMinutes *-1
    }else minutes.innerHTML = netMinutes * -1

//Set Seconds
let netSeconds = Seconds - 59
    if (netSeconds * -1 < 10) {
        seconds.innerHTML = "0" + netSeconds * -1;
    } else seconds.innerHTML = netSeconds * -1;
}, 1000)

let awesome = document.getElementById('awesome')
window.addEventListener('scroll', () => {
    if (window.scrollY >= awesome.offsetTop - 200) {
        console.log(awesome.offsetTop);
let awesome_box = document.querySelectorAll('.awesome-count')
setTimeout(() => {

setInterval(() => {
    awesome_box.forEach((e) => {
        if (Number(e.innerHTML) < Number(e.dataset.count))
            e.innerHTML++
            else {
                clearInterval(1)
            }
    })
},8)
}, 1500)
    }
})


let scroll_button = document.querySelector(".scroll-button");
let go_down = document.querySelector('.go-down')
window.addEventListener('scroll', () => {
    

if (window.scrollY <= go_down.offsetTop) {
    scroll_button.style.display ="none"
} else {
    
    scroll_button.style.display ="block"
}
})
scroll_button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
})


//Swith Dark mode
let dark_mode = document.querySelector('.dark-mode');
let span_dark_mode = document.querySelector('.sp-dark');

if (window.localStorage.getItem('them')) {
    document.documentElement.setAttribute('data-them', window.localStorage.getItem('them'))
    if (window.localStorage.getItem('them') === "dark") {
        span_dark_mode.classList.add("fa-moon")
    } else {
        span_dark_mode.classList.add("fa-sun")
    }
}
document.documentElement.getAttribute('data-them') === "dark" ? span_dark_mode.classList.add("dark") : "";

dark_mode.addEventListener('click', () => {
    dark_mode.classList.toggle('active')
    span_dark_mode.classList.toggle('dark')
    let switched = document.documentElement.getAttribute('data-them');
    let setAtt =  switched === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-them", setAtt)
    window.localStorage.setItem('them', setAtt)
    span_dark_mode.classList.contains('fa-sun') ? span_dark_mode.className = ('fas fa-moon sp-dark dark') : span_dark_mode.className=('fas fa-sun sp-dark')
    
})


//Show Videos

let list_videos = document.querySelectorAll('.list-of-videos li a');
let ifram_video = document.querySelector('.video-preview iframe');
let random_video = document.querySelector('.fa-random');

list_videos.forEach(e => {
    e.addEventListener('click', () => {
        ifram_video.src = e.dataset.src
        
    })
})

//Show Random Videos

random_video.addEventListener('click', () => {
    ifram_video.src = list_videos[Math.floor(Math.random() * list_videos.length)].dataset.src;
})