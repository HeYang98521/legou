
/* 
    倒计时
*/
function resultTime(){
    let time=document.querySelector('#header .head .time')


    let localTime=new Date()
    let elevTime=new Date('2020/11/11 00:00:00')
    let diffTime=elevTime-localTime

    if(diffTime>=0){
        //天
        let day=Math.floor(diffTime/1000/60/60/24)
        if(day<10){
            day=`0${day}`
        }

        //时
        let hour=Math.floor(diffTime/1000/60/60%24)
        if(hour<10){
            hour=`0${hour}`
        }

        //分
        let minute=Math.floor(diffTime/1000/60%60)
        if(minute<10){
            minute=`0${minute}`
        }

        //秒
        let second=Math.floor(diffTime/1000%60)
        if(second<10){
            second=`0${second}`
        }

        time.innerHTML=`距双十一狂欢还有 ${day} 天 ${hour} 小时 ${minute} 分 ${second} 秒`
    }


    
}
resultTime();
setInterval(resultTime,1000)

/* 
    banner
*/
let ulBanner=document.querySelector('#main ul')
let liBanner=document.querySelectorAll('#main ul li')
let mian=document.querySelector('#main')

let scrWid=window.screen.availWidth

mian.style.width=scrWid+'px'

liBanner[0].style.width=scrWid+'px';
liBanner[1].style.width=scrWid+'px';
liBanner[2].style.width=scrWid+'px';
ulBanner.style.width=scrWid*(liBanner.length+1)+'px'

ulBanner.appendChild(liBanner[0].cloneNode(true))

//轮播
let index=0;
setInterval(function(){
    index++
    startMove(ulBanner,{left:-scrWid*index},1000,'easeIn',function(){
        if(index==liBanner.length){
            index=0;
            ulBanner.style.left=0
        }
    })
},3000)




console.log(liBanner.length)
