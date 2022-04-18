exports.fetchKey = async function() {
    return new Promise(async function(resolve, rej) {
        require('https').get('https://soundcloud.com/', (res) => {
            let r = ''
            res.on('data', async (d) => {
                r += d
            })

            res.on('end', async () => {
                const res = r.split('<script crossorigin src="');
                const urls = [];
                res.forEach(urlA => {
                    const urlreg = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
                    let url = urlA.replace('"></script>', ''); let res = url.split('\n')[0]; 
                    if(urlreg.test(res)) urls.push(res);
                });
                async function fetchKey() {
                    return new Promise(async function(resolve, rej) {
                        let key;
                        require('https').get(urls[urls.length - 1], async a => {
                            let data = ''
                            a.on('data', async d => {
                                data += d
                            })

                            a.on('end', () => {
                                if(data.includes(',client_id:"')) {
                                    const thingA = data.split(',client_id:"');
                                    key = thingA[1].split('"')[0];
                                    return resolve(key)
                                }
                                return resolve('')
                            })

                            a.on('error', () => rej(err))
                        });
                    })
                }
                const key = await fetchKey()
                if(key) {resolve(key)} else {rej(new Error(`Unable to fetch a SoundCloud API key! This most likely has happened due to either making too many requests, or the SoundCloud website has changed!`))}
            })
        }).on('error', async e => {
            rej(e)
        })
    })
};

exports.testKey = function(key) {
    return new Promise(function(res, rej) {
        if(!key) {return rej(new Error(`No SoundCloud API key provided`))} else {
            require('https').get(`https://api-v2.soundcloud.com/search?client_id=${key}&q=this%20package%20gave%20me%20neck%20pains&limit=0`, async (result) => {
                if(result.statusCode === 401 || result.statusCode === 403) return res(false);
                if(result.statusCode === 404 || result.statusCode === 200) return res(true)
            }).on('error', e => {
                return rej(e)
            })
        }
    })
}