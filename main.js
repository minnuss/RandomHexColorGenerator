const title = document.querySelector('.title');
const btn = document.querySelector('.btn');
const codeID = document.querySelector('.codeID');

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', random);

function random() {

    // i < 6 because there is 5 more values for HEX code to be generated
    let val = '#';
    for (let i = 0; i < 6; i++) {

        let randomHexArray = Math.floor(Math.random() * (hexArray.length - 1));
        val += hexArray[randomHexArray];
    }
    // console.log(val)
    document.body.style.backgroundColor = val;
    codeID.textContent = `Code ID = ${val}`;
    title.style.color = `${val}`;
}


