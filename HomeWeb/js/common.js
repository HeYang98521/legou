
/* 
    需求：在线客服
    1. 鼠标移入a标签，
        1.1. 改变背景图
        1.2. 显示当前a标签下面的span标签

    2. 鼠标移出a标签，
        1.1. 改变背景图
        1.2. 隐藏当前a标签下面的span标签
*/  
let online=document.querySelectorAll('#online a');
// console.log(online)

for(let a=0;a<online.length;a++){

    //鼠标移入
    online[a].addEventListener('mouseover',function(){
        online[a].style.backgroundPositionX='-50px';
        this.querySelector('span').style.display='block'
        
    })
    //鼠标移出
    online[a].addEventListener('mouseout',function(){
        online[a].style=`
            background-position-x:0；
        `
        online[a].querySelector('span').style=`
            display:none;
        `
        // online[a].style.backgroundPositionX='0';
        // this.querySelector('span').style.display='none'
        
    })

}

/* 
    需求： 滚动滚动条,判断滚动距离大于800时，显示回到顶部按钮，否则就隐藏

    事件源： window(推荐)  document   

    事件类型： onscroll
*/  
//注册滚动事件
    window.addEventListener('scroll',function(){
        //获取滚动距离
        let sTop=document.documentElement.scrollTop||document.body.scrollTop//兼容性问题
        //console.log(sTop)
        
        //判断
        if(sTop>=800){
            document.querySelector('#online .online4').style.display='block'
        }
        //隐藏
        else{
            document.querySelector('#online .online4').style.display='none'
        }
    })

    

/* 
    需求： 
        1、点击回到顶部按钮
        2、缓慢让滚动条回到页面顶部

    分析： 
        1、点击按钮, 每隔多少毫秒,改变滚动条的位置
        2、点击按钮, 每隔30毫秒,在原来的基础上(起始值) - 50， 再赋值给当前滚动距离
*/ 
let online4=document.querySelector('#online .online4');
online4.style.display='none'


//注册事件
online4.addEventListener('click', function (){
    //1、 点击时,设置运动总时间
    let t = 1000

    //2、 点击时,获取总路程
    let s = document.documentElement.scrollTop ;

    //3、 每次运动的速度
    let v = s/t;//1ms运动的距离

    //4、 开启计时器
    let timeId = setInterval(function (){

        //获取当前的滚动距离 = 起始值
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;

        //运动

        document.documentElement.scrollTop = sTop - v*30
        document.body.scrollTop = sTop - v*30

        //判断
        if(sTop <= 0){
            clearInterval( timeId )
        }

    }, 30)
})




let loginbtn1=document.querySelector('#header .loginbtn1')
let loginbtn2=document.querySelector('#header .loginbtn2')
let loginBox=document.querySelector('#loginBox')
let user=document.querySelector('#loginBox .user')
let userImg=document.querySelector('#loginBox .userImg')
let userLetter=document.querySelector('#loginBox .userLetter')
let psw=document.querySelector('#loginBox .psw')
let pswImg=document.querySelector('#loginBox .pswImg')
let pswLetter=document.querySelector('#loginBox .pswLetter')
let form=document.querySelector('form')
let deleteBtn=document.querySelector('.delete')
// console.log(form)




//模态框尺寸
function loginBoxSize(){
    loginBox.style.width=document.documentElement.clientWidth+'px'
    loginBox.style.height=document.documentElement.clientHeight+'px'
}
loginbtn1.addEventListener('click',function(){
    //显示模态框
    loginBox.style=`display:block;`
    loginBoxSize()  
})
window.addEventListener('resize',function(){
    loginBoxSize()
})




//delete按钮
deleteBtn.addEventListener('click',function(){
    loginBox.style=`display:none`
})



/* 
    提交按钮flag
*/
let userFlag=false,
    pswFlag=false;




/* 
    用户名
*/
// 判断用户名长度是否大于0, 大于：显示删除按钮  否则就隐藏
user.addEventListener('input',function(){
    if(user.value.length>0){
        userImg.style=`display:block`
    }else{
        userImg.style=`display:none`
    }
    
})

//失去焦点用户名
user.addEventListener('blur',function(){
    //输入是否正确
    let userVal=user.value
    let userReg=/^[A-z0-9_]{5,12}$/
    let userResult = userReg.test( userVal )
    if(!userResult){
        user.style='border:1px solid red'
        userLetter.innerHTML = '请输入正确的用户名';
        userFlag=false
    }else{
        userLetter.innerHTML = '';
        user.style='border:1px solid #ccc'
        userFlag=true
    }
})


// 点击x按钮清除用户名
userImg.addEventListener('click',function(){
    user.value=""
})





/* 
    密码框
*/
// 点击眼睛开关
let flagEye=true
pswImg.addEventListener('click',function(){
    if(flagEye){
        pswImg.src="./images/open.png"
        psw.type='text'
    }else{
        pswImg.src="./images/close.png"
        psw.type='password'
    }
    flagEye=!flagEye
})
//密码失去焦点
psw.addEventListener('blur',function(){
    let pswVal=psw.value
    let pswReg=/^[A-z0-9-_]{5,14}$/
    let pswresult=pswReg.test(pswVal)
    if(!pswresult){
        pswLetter.innerHTML='请输入正确的密码'
        psw.style=`border:1px solid red`
        pswFlag=false
    }else{
        pswLetter.innerHTML=''
        psw.style='border:1px solid #ccc'
        pswFlag=true
    }
})




 /* 
    提交按钮 
 */
form.addEventListener('submit',function(event){
    if(!userFlag){
        user.style='border:1px solid red'
        userLetter.innerHTML = '请输入正确的用户名';
        event.preventDefault()
    }else if(!pswFlag){
        pswLetter.innerHTML='请输入正确的密码'
        pswLetter.style=`color:red;`
        psw.style=`border:1px solid red`
        event.preventDefault()
    }
})



/* 
    导航栏下拉框
*/
let li=document.querySelectorAll('#header .menu .warp li')
console.log(li)
for(let a=0;a<li.length;a++){
    li[a].addEventListener('mouseover',function(){
        // console.log('123')
        this.style.backgroundColor='#FFD33E'
        this.querySelector('p').style.display='block'
    })
    li[a].addEventListener('mouseout',function(){
        // console.log('123')
        this.style.backgroundColor='#65A070'
        this.querySelector('p').style.display='none'
    })
}
// let p=document.querySelectorAll('#header .menu .warp li p')
let a=document.querySelectorAll('#header .menu .warp li p a')
console.log(a)
for(let b=0;b<a.length;b++){
    a[b].addEventListener('mouseover',function(){
        this.style=`background-color:#D6B7B4`
    })
    a[b].addEventListener('mouseout',function(){
        this.style=`background-color:#FFD33E`
    })
}