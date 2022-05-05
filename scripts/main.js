window.onload = async () => {
    // init advice id and text with random advice
    const randomAdvice = await fetchRandomAdvice();
    insertInDOM(randomAdvice.id, randomAdvice.advice);
    
    // click listener to show new advice
    let newAdviceBtn = document.getElementById('show-new-advice');
    newAdviceBtn.addEventListener('click', async () => {
        const randomAdvice = await fetchRandomAdvice();
        insertInDOM(randomAdvice.id, randomAdvice.advice);
    });
    
    // fetch new advice via the simple adviceSlip-API
    async function fetchRandomAdvice() {
        const adviceApiUrl = 'https://api.adviceslip.com/advice';
        const res = await fetch(adviceApiUrl, {method: 'GET'});
        const data = await res.json();
        return data.slip;
    }

    // insert new advice id and advice text into DOM
    function insertInDOM(adviceID, adviceText) {
        let adviceIdElmnt = document.getElementById('advice-id');
        let adviceTextElmnt = document.getElementById('advice-text');

        adviceIdElmnt.textContent = adviceID;
        adviceTextElmnt.textContent = `"${adviceText}"`;
    }
}