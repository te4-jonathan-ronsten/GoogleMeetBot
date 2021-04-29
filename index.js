const button = document.querySelector('#test');
button.addEventListener('click', runBot);

async function runBot() {
    const response = await fetch('http://localhost:3030');
    // .then(response => {})
    console.log(response);
}