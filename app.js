
const btn = document.querySelector('.talk');
const clickToSpeakBtn = document.querySelector('.clickToSpeak');
const content = document.querySelector('.content');
const voiceSelect = document.getElementById ('voiceSelect');
const textToSpeak = document.getElementById('textToSpeak');
const spokenText = document.getElementById('spokenText');

let voices = [];

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

window.speechSynthesis.onvoiceschanged = populateVoices;

function speak(sentence, voiceName) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    const selectedVoice = voices.find(voice => voice.name === voiceName);
    if (selectedVoice) {
        text_speak.voice = selectedVoice;
    }

    text_speak.onstart = () => {
        spokenText.value += `Speaking: ${sentence}\n`;
    };

    window.speechSynthesis.speak(text_speak);
}

btn.addEventListener('click', () => {
    const selectedVoiceName = voiceSelect.value;
    const text = textToSpeak.value;
    speak(text, selectedVoiceName);
});

clickToSpeakBtn.addEventListener('click', () => {
    recognition.start();
});

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss guna", 'Google UK English Male');
    }

    else if(hr == 12) {
        speak("Good night Boss guna", 'Google UK English Female');
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss guna", 'Google US English');
    }

    else {
        speak("Good Evening Boss guna", 'Google UK English Female');
    }
}

populateVoices();

window.addEventListener('load', ()=> {
    speak("Activating Spidy!");
    speak("Going online");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

recognition.onstart = () => {
    spokenText.value += "Spidy Assistant activated. Try speaking into the microphone.\n";
};

recognition.onspeechend = () => {
    spokenText.value += "Spidy Assistant ended.\n";
};

recognition.onerror = (event) => {
    spokenText.value += `Error occurred in Assistant: ${event.error}\n`;
};

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey buddy tell about yourself ') || message.includes('hey buddy')) {
        const finalText = "Hello ! Boss! My name is Spidy!,my boss name in guna! This  is spidy! Ai Assistent was create by javascript!  And this web designs are create by using ! HTML! AND !CSS! i can help to found some information and !details! thank you!";
        speech.text = finalText;
    }

    else if(message.includes('3411')) {
        const finalText = "hello ! Andiyappan !, !  !,you are studying bsc cs!, !  !, and your number is !6382644135 !,and yourgmail is  ! aravinaravindh36@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3412')) {
        const finalText ="hello ! assankanth !, ! !,you are studying bsc cs!, !  !, and your number is !6282086920 !,and yourgmail is  ! appunext825@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3413')) {
        const finalText = "hello ! buldonsheen raja !, ! !,you are studying bsc cs!, !  !, and your number is !8072491223!,and yourgmail is  ! buldon8848@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3414')) {
        const finalText = "hello ! chinnachamy !, ! !,you are studying bsc cs!, !  !, and your number is !7418758223!,and yourgmail is  ! chinnasamy8848@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3415')) {
        const finalText = "hello ! dhanush !, ! !,you are studying bsc cs!, !  !, and your number is !8590781604!,and yourgmail is  ! dhanushkutta092330@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3416')) {
        const finalText = "hello ! dinesh kumar!, ! !,you are studying bsc cs!, !  !, and your number is !6374539131 !,and yourgmail is  ! muthusamyk979@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    
    }
    else if(message.includes('3417')) {
        const finalText = "hello ! gilbert mariya lawrence !, ! !,you are studying bsc cs!, !  !, and your number is !8825903731 !,and yourgmail is  ! gilbertmariyalawrence@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
   
    else if(message.includes('3419')) {
        const finalText = "hello ! janarthanan !, ! !,you are studying bsc cs!, !  !, and your number is !6384711915 !,and yourgmail is  ! sjanarthanan70@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3420')) {
        const finalText = "hello ! jeeva!, ! !,you are studying bsc cs!, !  !, and your number is !6374998768 !,and yourgmail is  ! jeeva06092003@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3421')) {
        const finalText = "hello ! jeevan kumar !, ! !,you are studying bsc cs!, !  !, and your number is !8610979642!,and yourgmail is  ! jeevan20041204@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3422')) {
        const finalText = "hello ! jernine v jude!, ! !,you are studying bsc cs!, !  !, and your number is !9600558701!,and yourgmail is  !  mk@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3423')) {
        const finalText = "hello ! justin!, ! !,you are studying bsc cs!, !  !, and your number is !9677427352!,and yourgmail is  ! justinjj623@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3424')) {
        const finalText ="hello ! kandasamy !, ! !,you are studying bsc cs!, !  !, and your number is !9360196818 !,and yourgmail is  !  skandasamy718@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('426')) {
        const finalText = "hello ! kishore !, ! !,you are studying bsc cs!, !  !, and your number is !9360581708 !,and yourgmail is  ! mkishorekicha@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3427')) {
        const finalText = "hello ! manikandan !, ! !,you are studying bsc cs!, !  !, and your number is !7639584009 !,and yourgmail is  ! manikandanpandian65@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3428')) {
        const finalText = "hello ! maruhtu pandi!, ! !,you are studying bsc cs!, !  !, and your number is !8438016143 !,and yourgmail is  ! mmaruthupandi075 @gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3429')) {
        const finalText ="hello ! partha sarathi !, ! !,you are studying bsc cs!, !  !, and your number is !9363138498 !,and yourgmail is  ! parthajan29@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3430')) {
        const finalText = "hello ! robin berkmans !, ! !,you are studying bsc cs!, !  !, and your number is !8870398013  !,and yourgmail is  ! robinberkmans2004@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3431')) {
        const finalText = "hello !  ruban kumar !, ! !,you are studying bsc cs!, !  !, and your number is !8778673235 !,and yourgmail is  ! priyaruban7890@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3432')) {
        const finalText ="hello ! rubert manase !, ! !,you are studying bsc cs!, !  !, and your number is !9566742409 !,and yourgmail is  ! rubertmanasestmarys12b35@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3433')) {
        const finalText = "hello ! sonthose !, ! !,you are studying bsc cs!, !  !, and your number is !6382090290 !,and yourgmail is  ! sonthoshsanthose84874@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3434')) {
        const finalText = "hello ! sasi kumar !, ! !,you are studying bsc cs!, !  !, and your number is !9788525913 !,and yourgmail is  ! sasikumarssasikumar149@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3435')) {
        const finalText = "hello ! siva kumar  !, ! !,you are studying bsc cs!, !  !, and your number is !8870580307 !,and yourgmail is  ! daniel1591994@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3436')) {
        const finalText = "hello ! sriram  !, ! !,you are studying bsc cs!, !  !, and your number is !8072387576 !,and yourgmail is  ! sriram24032005@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3437')) {
        const finalText = "hello ! tharun johnson !, ! !,you are studying bsc cs!, !  !, and your number is !7904744231 !,and yourgmail is  ! johnson262005@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3438')) {
        const finalText = "hello ! thiru !, ! !,you are studying bsc cs!, !  !, and your number is !6374743152 !,and yourgmail is  ! thiru2b45@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3439')) {
        const finalText ="hello ! udhaya prakash!, ! !,you are studying bsc cs!, !  !, and your number is !6374979933 !,and yourgmail is  ! kudhyaprakash2004@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3440')) {
        const finalText ="hello ! ugin prabhakar !, ! !,you are studying bsc cs!, !  !, and your number is !8248681916 !,and yourgmail is  ! uginprabhakar@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3441')) {
        const finalText = "hello ! vallarasu !, ! !,you are studying bsc cs!, !  !, and your number is !7810020103 !,and yourgmail is  ! vallarasu619@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3442')) {
        const finalText = "hello ! varatharajan !, ! !,you are studying bsc cs!, !  !, and your number is !8754229524 !,and yourgmail is  ! vasanthvasanth91212@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
        else if(message.includes('3418')) {
            const finalText = " hello !  boss!,guna mukil lakkis !,  !,you are studying bsc cs!, !  !, and your number is !7373864283!,and yourgmail is  ! gunag0377gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
            speech.text = finalText;
    }
    else if(message.includes('hey  spidy') || message.includes('hi spidy')) {
        const finalText = "Hello boss!,my name is spidy!,what can i do for you?";
       speech.text = finalText;
    }


    
    else if(message.includes('3410')) {
        const finalText = "hello Sandhiya mary!,  ! ! !,you are studying bsc cs!, !  !, and your number is 9344359922 ! !,and your gmail is  !  sandy1819@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3409')) {
        const finalText = "hello pandi jothika!,  ! !,you are studying bsc cs!, !  !, and your number is 8248349601 ! !,and your gmail is  !  1212sankar@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3408')) {
        const finalText = "hello nagarathinam!,  ! !,you are studying bsc cs!, !  !, and your number is 9585395849 ! !,and your gmail is  !  nagarathinam26@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3407')) {
        const finalText = "hello marjuka rani !,  ! !,you are studying bsc cs!, !  !, and your number is 8148191630 ! !,and your gmail is  !  marjukarani5@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3406')) {
        const finalText = "hello lufna banu !,  ! !,you are studying bsc cs!, !  !, and your number is! 9659952636 !,and your gmail is  !  farooklufna26@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3402')) {
        const finalText = "hello christina !,  ! !,you are studying bsc cs!, !  !, and your number is 7904132130 ! !,and your gmail is  !  christinaarulvelankanni@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('3401')) {
        const finalText = "hello abitha malar !,  ! !,you are studying bsc cs!, !  !, and your number is 8870580307 ! !,and your gmail is  !  daniel1591994@gmail.com !,now you are studying sacred heart college of arts and science !, thank you !";
        speech.text = finalText;
    }
    else if(message.includes('126')) {
        const finalText = "hello professor Ramya! you have done your graduvation! Msc and !mphil!,and you are from ! dindigul!,your number is! 8110982126!,and your gmail is ram.menya11@gmail.com ";
        speech.text = finalText;
    }
    else if(message.includes('772')) {
        const finalText = "hello professor yogeswari! you have done your graduvation! mca and !mphil!,and you are from ! dindigul!,your number is! 6369728772 !,and your gmail is selva.yogi@gmail.com ";
            speech.text = finalText;
    }
    else if(message.includes('386')) {
        const finalText = "hello professor anne raja reega ruth! you have done your graduvation! mca and!,mphil!,and you are from ! dindigul!,your number is! 9626105386 !,and your gmail is reega09@gmail.com ";
        speech.text = finalText;
    }
    else if(message.includes('699')) {
        const finalText = "hello professor deva jothi! you have done your graduvation! mca!,and you are from ! dindigul!,your number is! 9361475699 !,and your gmail is devjoars@gmail.com ";
        speech.text = finalText;
    }
    else if(message.includes('560')) {
        const finalText = "hello professor jesintha mary ! you have done your graduvation! Mca!,and you are from ! dindigul!,your number is! 9884740560 !,and your gmail is ajm55mca@gmail.com ";
        speech.text = finalText;
    }
    else if(message.includes('sacred heart college address')) {
        const finalText = "rmtc colony!reddiapatty!,dindigul!,tamilnadu!,624003! ";
        speech.text = finalText;
    }
    else if(message.includes('sacred heart college number')) {
        const finalText = " A number is! 7 5! 5 0! 3 3! 5 4! 6 4!  !and !! 9 0! 9 4! 8 5! 6 2! 2 6! a gmil address is ! shcollegedindigul@gmail.com";
        speech.text = finalText;
    }
    
    
     else if(message.includes(' history of sacred heart college')) {
        const finalText = "the college was established in the year 2012!. the college, an abode for excellence!, is a service oriented self -finacing institution affiliated to !,madurai kamaraj university!..  ";
        speech.text = finalText;
    }
    else if(message.includes('college gold medalist')) {
        const finalText = "our university gold medalist! the first rank ! paul packia raj!,department of chemistry!,and ,!, first rank! part 1!,hindi!, second rank chemistry!, varshini!,department of !msc! chemistry! thired  rank! s.  claretraja!,department of chemistry!,thired part1! tamil! reshma!, department of mathes!,four th rank chemistry! archana!, department of !chemistry!,four th rank!paul wesly!, department of !bca!, seventh rank !mariya joshpin jesintha! department of!chemistry!, and!, !reshma ! ,department of mathes!, eight th rank!nisha devi!,department of chemistry";
        speech.text = finalText;
    }
    
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('    report')) {
        window.open("guna.ppt", "_blank");
        const finalText = "Opening report";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('open second local')) {
        window.open('E:\\')
        const finalText = "Opening second local disk e";
        speech.text = finalText;
    }
    else if(message.includes('345')) {
        window.open('bluetooth:///')
        const finalText = "Opening second local disk e";
        speech.text = finalText;
    }
        else if(message.includes('401')) {
        window.open('1.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 401 details";
        speech.text = finalText;
    }
     else if(message.includes('402')) {
        window.open('2.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 402 details";
        speech.text = finalText;
    }
     else if(message.includes('406')) {
        window.open('6.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 406 details";
        speech.text = finalText;
    }
     else if(message.includes('407')) {
        window.open('7.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 407 details";
        speech.text = finalText;
    }
     else if(message.includes('408')) {
        window.open('8.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText ="opening id number 408 details" 
        speech.text = finalText;
    }
     else if(message.includes('409')) {
        window.open('9.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 409 details";
        speech.text = finalText;
    }
     else if(message.includes('410')) {
        window.open('10.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 410 details";
        speech.text = finalText;
    }
     else if(message.includes('412')) {
        window.open('12.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 412 details";
        speech.text = finalText;
    }
     else if(message.includes('413')) {
        window.open('13.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 413 details";
        speech.text = finalText;
    }
     else if(message.includes('415')) {
        window.open('15.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 415 details";
        speech.text = finalText;
    }
     else if(message.includes('416')) {
        window.open('16.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 416 details";
        speech.text = finalText;
    }
     else if(message.includes('417')) {
        window.open('17.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = " opening id number 417 details";
        speech.text = finalText;
    }
     else if(message.includes('418')) {
        window.open('18.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "hello boss opening  your id number  details";
        speech.text = finalText;
    }
     else if(message.includes('419')) {
        window.open('19.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "hello boss opening  your id number 418 details";
        speech.text = finalText;
    }
     else if(message.includes('420')) {
        window.open('20.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 420 details";
        speech.text = finalText;
    }
     else if(message.includes('421')) {
        window.open('21.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 421 details";
        speech.text = finalText;
    }
     else if(message.includes('422')) {
        window.open('22.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 422 details";
        speech.text = finalText;
    }
     else if(message.includes('423')) {
        window.open('23.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 423 details";
        speech.text = finalText;
    }
     else if(message.includes('424')) {
        window.open('24.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 424 details";
        speech.text = finalText;
    }
     else if(message.includes('425')) {
        window.open('25.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 425 details";
        speech.text = finalText;
    }
     else if(message.includes('426')) {
        window.open('26.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 246 details";
        speech.text = finalText;
    }
     else if(message.includes('428')) {
        window.open('28.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 428 details";
        speech.text = finalText;
    }
     else if(message.includes('429')) {
        window.open('29.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 429 details";
        speech.text = finalText;
    }
     else if(message.includes('430')) {
        window.open('30.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 430 details";
        speech.text = finalText;
    }
    else if(message.includes('431')) {
        window.open('31.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 431 details";
        speech.text = finalText;
    }
    else if(message.includes('432')) {
        window.open('32.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 432 details";
        speech.text = finalText;
    }
    else if(message.includes('433')) {
        window.open('33.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 433 details";
        speech.text = finalText;
    }
    else if(message.includes('434')) {
        window.open('34.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 434 details";
        speech.text = finalText;
    }
    else if(message.includes('435')) {
        window.open('35.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 435 details";
        speech.text = finalText;
    }
    else if(message.includes('436')) {
        window.open('36.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "hello sriram opening id number 436 details";
        speech.text = finalText;
    }
    else if(message.includes('437')) {
        window.open('37.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 437 details";
        speech.text = finalText;
    }
    else if(message.includes('438')) {
        window.open('38.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 438 details";
        speech.text = finalText;
    }
    else if(message.includes('439')) {
        window.open('39.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number 439 details";
        speech.text = finalText;
    }
    else if(message.includes('440')) {
        window.open('40.gif')
        const audio = new Audio('song.mp3');
        audio.play();
        const finalText = "opening id number 440 details";
        speech.text = finalText;

    }

    else if (message.includes('call')) {
        const phoneNumber = message.match(/\d+/g).join('');
        makeCall(7373864283);
        speech.text = `Calling ${phoneNumber}`;
    }
    else if(message.includes('442')) {
        window.open('42.gif')
        const audio = new Audio('song.mp3');
        audio.play(); 
        const finalText = "opening id number  442 details";
        speech.text = finalText;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
        }
    

  // ...existing code...

  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  speech.onstart = () => {
      spokenText.value += `Speaking: ${speech.text}\n`;
  };

  window.speechSynthesis.speak(speech);
}