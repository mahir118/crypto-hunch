cryptoIDs = ['btc','eth','sol','usdt','bnb','lite','bat','wrx','doge']
for (i of cryptoIDs) {
    const i = document.getElementById('name');
}

const price = {
    "async" : true,
    "scroosdomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Csolana%2Cbinancecoin%2Ctether%2Cbasic-attention-token%2Cwazirx&vs_currencies=usd",
    "method" : "GET",
     "headers" : {}
}

$.ajax(price).done(function (response) {
    btc.innerHTML = '$' + response.bitcoin.usd;
    eth.innerHTML = '$' + response.ethereum.usd;
    sol.innerHTML = '$' + response.solana.usd;
    usdt.innerHTML = '$' + response.tether.usd;
    bnb.innerHTML = '$' + response.binancecoin.usd;
    lite.innerHTML = '$' + response.litecoin.usd;
    bat.innerHTML = '$' + response["basic-attention-token"].usd;
    wrx.innerHTML = '$' + response.wazirx.usd;
    doge.innerHTML = '$' + response.dogecoin.usd;
})

const search = () => {
    const search = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('#cards div');
    const section = document.getElementsByTagName('section');
    let  count = 9;

    for (let card of cards) {
        let ID = card.getAttribute('id');
        if (search != ID) {
            card.style.display='none';
            count -= 1;
        }
        if (count == 0) {
            cat.style.display='block';
            oops.style.display='block';
            cat.style.animation= 'transitionIn 0.3s';
            oops.style.animation= 'transitionIn 0.3s';
        }
    }

    for (let card of cards) {
        let ID = card.getAttribute('id');
        if (search == ID) {
            document.getElementById(search).style.display='inline-block';
            cat.style.display='none';
            oops.style.display='none';
        }
    }

    if (!search) {
        cat.style.display='none';
        oops.style.display='none';
        for (let card of cards) {
                card.style.display='inline-block';
        }
    }

}

const form = document.getElementById('form');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    search();
})

const logo = document.getElementById('logo');

logo.addEventListener('click', async function(e){
    e.preventDefault();
    search();
})


