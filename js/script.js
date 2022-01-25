var count = 0
var result = null
var btn = null
var date = new Date()
var dummy = 0

var dday = new Date("January 1, 2023, 0:00:00").getTime();

function countdown()
{
    var date = new Date()

    var nowyear = date.getFullYear()

    var today = new Date().getTime();
    var gap = dday - today;
    var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((gap % (1000 * 60)) / 1000);
    // alert('day:'+day)
    // alert('hour:'+hour)
    // alert('min:'+min)
    // alert('sec:'+sec)

    var htmlday = document.getElementById("day")
    htmlday.innerText = day

    var htmlhour = document.getElementById("hour")
    htmlhour.innerText = hour

    var htmlmin = document.getElementById("minute")
    htmlmin.innerText = min

    var htmlsec = document.getElementById("second")
    htmlsec.innerText = sec

    if (nowyear == 2023)
    {
        var kocls = document.getElementsByClassName("koclass")
        htmlday.innerText = ""
        htmlhour.innerText = ""
        htmlmin.innerText = ""
        htmlsec.innerText = ""
        

        for (var i = 0; i < kocls.length; i++)
        {
            kocls[i].remove()
        }

        var resultelement = document.getElementById("result")
        var resultenelement = document.getElementById("result-en")
        resultelement.innerText = "2023년 새해복 많이 쳐받으세요"
        resultenelement.innerText = "Happy Now Year 2023"
        return
    }
}

function run()
{
    btn = document.getElementById("count-button")
    btn.disabled = "disabled"
    btn.innerText = "이미 실행됨"

    btn.id = "count-buttons"

    setInterval(countdown, 1000)
}

function confirms()
{
    var conf = confirm("정말로 페이지를 새로고침 하시겠습니까?")

    if (conf == true)
    {
        location.reload()
    }

    if (conf == false)
    {
        dummy = 0
    }
}
