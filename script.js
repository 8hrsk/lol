function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    }) 
}

let fanfic = 13282729;
//let id = 13285973;
let id = fanfic;

function ref(id) {
        fetch("https://ficbook.net/srv/statistics/store/ref", {
        "headers": {
        "accept": "*/*",
        "accept-language": "ru-RU,ru;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-kl-ajax-request": "Ajax_Request"
        },
        "referrer": "https://ficbook.net/readfic/" + id,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"part_id\":0,\"fic_id\":" + id + ",\"referer\":\"ficbook.net/fanfiction/cartoon/telegram_-_ehrsk\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
        }
    )
}


while (true) {

    for (let i = 0; i < 2000; i++) {
        ref(id);
        await sleep(6);
    }

    console.log('Фанфик ', id, ' в говне)');
    id -= 1;
    await sleep(5)
    
}