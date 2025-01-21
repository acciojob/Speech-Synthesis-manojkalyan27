
  const voicesDropdown = document.querySelector('[name="voice"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
 

  const msg = new SpeechSynthesisUtterance();
  let voices = [];

  //Your code goes here
    window.speechSynthesis.onvoiceschanged = () => {

        voices = window.speechSynthesis.getVoices();   

        voices.forEach((voice,i) => {
            voicesDropdown.options[i] = new Option(voice.name,i) // creates new option
        }
        )
    }

    voicesDropdown.addEventListener("change", 
        () =>  msg.voice = voices[voicesDropdown.value] //voice will be changed to dropdown value
    )


	speakButton.addEventListener("click",()=>{
        //Below .text, .rate, .pitch ,.speak are given inbuilt   
        msg.text = document.querySelector('textarea').value;
        msg.rate = document.querySelector('[name="rate"]').value;
        msg.pitch = document.querySelector('[ name="pitch"]').value;
        window.speechSynthesis.speak(msg);
    })

    stopButton.addEventListener("click",()=>{
        window.speechSynthesis.cancel();
        //tops being spoken immediately
})