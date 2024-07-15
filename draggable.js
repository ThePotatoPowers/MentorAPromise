const numberToSpanish = {
    0: 'cero',
    1: 'uno',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve',
    10: 'deiz',
}



var msg = new SpeechSynthesisUtterance();
msg.text = '0';

function speak() {
    window.speechSynthesis.speak(msg);
}

const divA = document.getElementById('divA');
const divB = document.getElementById('divB');
const countB = document.getElementById('countB');

divA.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

[divA, divB].forEach(div => {
    div.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    div.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.block1.dragging');
        if (draggable && e.target !== draggable && !e.target.classList.contains('block1')) {
            e.target.appendChild(draggable);
            msg.text = updateCount();
            speak();
            msg.text = numberToSpanish[msg.text];
            speak();
        }
    });
});

document.querySelectorAll('.block1').forEach(item => {
    // generate random color
    const listOfColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black'];
    const randomColor = listOfColors[Math.floor(Math.random() * listOfColors.length)];
    //item.style.backgroundColor = randomColor;

    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

function updateCount() {
    countB.textContent = divB.children.length;
    if (divB.children.length === 3) {
        document.getElementById('check').src = 'assets/check.svg';
    }
    else {
        document.getElementById('check').src = 'assets/incorrect.svg';
    }

    return countB.textContent;
    

}