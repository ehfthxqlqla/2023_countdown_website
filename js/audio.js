var music_list = ["./_audios_/bgm.mp3", "./_audios_/silence.mp3"]
var audio = new Audio()
var nowtime = 0
var custom = null
var testing = null

function toggleaudio()
{
    audio.src = music_list[0]

    audio.play()
    audio.volume = 0.45
    audio.loop = true
}

function pause()
{
    audio.pause()
    nowtime = audio.currentTime
    alert(nowtime)
}

function resume()
{
    audio.src = music_list[0]

    audio.play()
    audio.volume = 0.45
    audio.currentTime = nowtime
    audio.loop = true
}

function stop()
{
    audio.pause()
    audio.currentTime = 0
}

//pause는 일시정지


//stop은 없다...
//pause하고 시간을 0으로...

function mute()
{

    if (testing == null)
    {
        audio.volume = 0
        testing = "0"
    }

    else if (testing == "0")
    {
        audio.volume = 0.45
        testing = null
    }
}