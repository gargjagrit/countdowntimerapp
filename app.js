(function (){
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24

    let birthday = "Aug 8, 2021 11:30:00", countdown = new Date(birthday).getTime(),
    x = setInterval(function(){
        let now = new Date().getTime(),
        flag = countdown - now

        document.getElementById('days').innerHTML = Math.floor(flag / day)
        document.getElementById('hours').innerHTML = Math.floor((flag % day) / hour)
        document.getElementById('minutes').innerHTML = Math.floor((flag % hour) / minute)
        document.getElementById('seconds').innerHTML = Math.floor((flag % minute) / second)

        //If I reach my birthday

        if(flag<=0){
            document.getElementById('content').style.display = "block"
            document.getElementById('countdown').style.display = "none"
            document.getElementById('myBirthday').innerHTML = "Happy Birthday To You! Many Many Congratulations , Have A Great Year!"
            document.getElementById('gift').style.visibility="visible"
            document.getElementById('sentence').style.visibility="visible"
            clearInterval(x)
        }
    
    },0)
    
}())

