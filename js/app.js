const video = document.querySelector('video');
const listOfSpans = document.querySelectorAll('.lyrics span');

function stringToSec (hrsMinutes) {
    let scnds = 0;
    const hrMin = hrsMinutes.split(':');
    const secMl = hrMin[2].split(',');
    const str = '0.'+ secMl[1];
    scnds = (parseInt(hrMin[1]) * 60) + parseInt(secMl[0]) + parseFloat(str);

    return (scnds);
    // return ('horas: ' + hrMin[0] + ' - minutos: ' + hrMin[1] + ' - segundos: ' + secMl[0] + ' - milis:' + secMl[1]  + ' - sec: ' + str +' '+scnds);

}

function back2Normal(){
    for (let i = 0; i < listOfSpans.length; i++) {
        // const p = listOfSpans[i].firstElementChild.className="NHghlght";
        const p = listOfSpans[i].firstElementChild.style.backgroundColor = 'white';
    }
}

video.addEventListener('timeupdate', (event) => {
    let elCorrecto = -1;
    // back2Normal();
    for (let i = 0; i < listOfSpans.length; i++) {
        let videoT = video.currentTime;
        let startT = stringToSec(listOfSpans[i].dataset.start);
        let endT = stringToSec(listOfSpans[i].dataset.end);
        const p = listOfSpans[i].firstElementChild;
        
        // console.log(listOfSpans[i].dataset.start + ' y el tiempo del video: ' + videoT + ' - stringToSecs: ' + stringToSec(listOfSpans[i].dataset.start));
        
        console.log('i: ' + i + ' videoT: ' + videoT + ' startT: ' + startT + ' endT: ' + endT + ' text: ' + p.innerHTML);
        if (videoT > startT ){
            listOfSpans[i].style.backgroundColor = 'lightskyblue';
        }
        if (videoT > endT) {
            listOfSpans[i].style.backgroundColor = 'white';
        }
    }
    // if (elCorrecto >= 0 ){
    //     listOfSpans[elCorrecto].firstElementChild.style.backgroundColor = 'lightskyblue';
    //     console.log('yes ' + elCorrecto);
    // } else {
    //     console.log('no ' + elCorrecto);
    // }
});