let isRecording = false;
    let recordedData = [];
    async function simulPlayer(key=String) {
        const aud = new Audio(`sounds/${key}.mp3`);
        aud.play()
        var key_text = document.getElementById('key-box');
      key_text.textContent = key;
      if (isRecording){
          recordedData.push(key);
      }
      
    }

    async function playSound(event) {
      const key = event.target.id;
      await simulPlayer(key);

      
    }

    const pianoKeys = document.querySelectorAll('.piano-key');
    pianoKeys.forEach((key) => {

      const userAgent = navigator.userAgent;
  
        if (/Mobile/.test(userAgent)) {
          // console.log('Mobile device');
          key.addEventListener('touchstart', playSound);
        } else if (/Tablet/.test(userAgent)) {
          // console.log('Tablet device');
          key.addEventListener('touchstart', playSound);
        } else {
          // console.log('Desktop device');
        key.addEventListener('click', playSound);

        }
      // key.addEventListener('mouseover', playSound);
      
    });
    
    
    

    function startRecording() {
      isRecording = true;
      recordedData = []; // Reset the recorded data
    //   console.log('Recording started...');
    }

    function stopRecording() {
      isRecording = false;
    //   console.log('Recording stopped.');
      var key_rec = document.getElementById('key-rec');
      key_rec.textContent = recordedData;
    //   console.log('Recorded data:', recordedData);
    }

    function toggleRecording() {
      if (isRecording) {
        stopRecording();
        document.getElementById('recordButton').textContent = 'Record';
      } else {
        startRecording();
        document.getElementById('recordButton').textContent = 'Recording';

      }
    }
    

    const recordButton = document.getElementById('recordButton');
    recordButton.addEventListener('click', toggleRecording);