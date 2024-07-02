function generateBlocks() {
    const numberInput1 = document.getElementById('numberInput1').value;
    const numberInput2 = document.getElementById('numberInput2').value;
    const functionInput = document.getElementById('functionSelect').value;
    console.log(functionInput)
    var value = 0;
    var remainder = 0;


    try {
        if (isNaN(numberInput1) || isNaN(numberInput2)) {
            throw 'Please enter a valid number in both fields';
        }
    } catch (error) {
        alert(error);
        return;
    }
    switch (functionInput.toLowerCase()) {
        case 'add':
            value = parseInt(numberInput1) + parseInt(numberInput2);
            document.getElementById('functionImage').src = 'assets/addition.svg'
            break;
        case 'subtract':
            value = parseInt(numberInput1) - parseInt(numberInput2);
            document.getElementById('functionImage').src = 'assets/subtraction.svg'
            break;
        case 'multiply':
            value = parseInt(numberInput1) * parseInt(numberInput2);
            document.getElementById('functionImage').src = 'assets/multiply.svg'
            break;
        case 'divide':
            if (parseInt(numberInput2) == 0) {
                alert('Cannot divide by zero');
                return;
            }
            if (parseInt(numberInput1) < 0 && parseInt(numberInput2) > 0) value = Math.ceil(parseInt(numberInput1) / parseInt(numberInput2));
            else value = Math.floor(parseInt(numberInput1) / parseInt(numberInput2));
            document.getElementById('functionImage').src = 'assets/division.svg'
            remainder = parseInt(numberInput1) % parseInt(numberInput2);

            break;

        default:
            generateBlocks1(numberInput1);
            break;
    }

    const blocksContainer1 = document.getElementById('blocksContainer1');
    blocksContainer1.innerHTML = '';

    const blocksContainer2 = document.getElementById('blocksContainer2');
    blocksContainer2.innerHTML = '';



    const blocksContainerRemainder = document.getElementById('blocksContainerRemainder');
    blocksContainerRemainder.innerHTML = '';

    

    const blocksContainerFinal = document.getElementById('blocksContainerFinal');
    blocksContainerFinal.innerHTML = '';
    
    document.getElementById('equalImage').src = 'assets/equal.svg'

    // append text saying Number 1 to blocksContainer1, not in block form just text
    const number1Key = document.createElement('div');
    number1Key.className = 'blockKey';
    number1Key.innerHTML = 'Number 1:'; 
    blocksContainer1.appendChild(number1Key);

    // Generate new blocks
    if (numberInput1 < 0) {
        for (let i = numberInput1; i < 0; i++) {
            const block = document.createElement('div');
            block.className = 'block1';
            block.innerHTML = i;
            blocksContainer1.appendChild(block);
        }

    }
    else {
        for (let i = 0; i < numberInput1; i++) {
            const block = document.createElement('div');
            block.className = 'block1';
            block.innerHTML = i + 1;
            blocksContainer1.appendChild(block);
        }
    }
    

    const number2Key = document.createElement('div');
    number2Key.className = 'blockKey';
    number2Key.innerHTML = 'Number 2:'; 
    blocksContainer2.appendChild(number2Key);

    if (numberInput2 < 0) {
        for (let i = numberInput2; i < 0; i++) {
            const block = document.createElement('div');
            block.className = 'block2';
            block.innerHTML = i;
            blocksContainer2.appendChild(block);
        }

    }
    else {
        for (let i = 0; i < numberInput2; i++) {
            const block = document.createElement('div');
            block.className = 'block2';
            block.innerHTML = i + 1;
            blocksContainer2.appendChild(block);
        }
    }

    

    if (remainder != 0) {
        const remainderKey = document.createElement('div');
        remainderKey.className = 'blockKey';
        remainderKey.innerHTML = 'Remainder: '; 
        blocksContainerRemainder.appendChild(remainderKey);
        if (remainder < 0) {
            for (let i = remainder; i < 0; i++) {
                const block = document.createElement('div');
                block.className = 'blockRemainder';
                block.innerHTML = i;
                blocksContainerRemainder.appendChild(block);
            }
        }
        else {
            for (let i = 0; i < remainder; i++) {
            const block = document.createElement('div');
            block.className = 'blockRemainder';
            block.innerHTML = i + 1;
            blocksContainerRemainder.appendChild(block);
        }
        }
        
        
    }

    const finalKey = document.createElement('div');
    finalKey.className = 'blockKey';
    finalKey.innerHTML = 'Final Answer: '; 
    blocksContainerFinal.appendChild(finalKey);

    if (value >= 0) {
        for (let i = 0; i < value; i++) {
            const block = document.createElement('div');
            block.className = 'blockFinal';
            block.innerHTML = i + 1;
            blocksContainerFinal.appendChild(block);  
        }
    }
    else {
        for (let i = value; i < 0; i++) {
            const block = document.createElement('div');
            block.className = 'blockFinal';
            block.innerHTML = i;
            blocksContainerFinal.appendChild(block);  
        }
    }
    
    
    

    
}
