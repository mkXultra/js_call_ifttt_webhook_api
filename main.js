const https = require('https'); 
const fs = require('fs').promises


async function main(){
  const {webhookApiKey, executeEventName} = await readConf(isDev());
  const callUrl = makeUrl(webhookApiKey, executeEventName);
  const result = await get(callUrl)
  console.log(result)
}

main()

function get(callUrl){
  return new Promise((resolve,reject)=>{
    https.get(callUrl, (resp) => { 
        let data = ''; 
        resp.on('data', (chunk) => { 
            data += chunk; 
        }); 
        resp.on('end', () => { 
            resolve(data);
        }); 
    }).on("error", (err) => { 
        reject(err)
    });
  })
}

async function readConf(isDev = false){
  const confFile = isDev? 'conf_dev.json':'conf.json';
  const confStr = await fs.readFile(confFile,'utf-8');
  return JSON.parse(confStr)
}

function makeUrl(apiKey,serviceName){
  return `https://maker.ifttt.com/trigger/${serviceName}/with/key/${apiKey}`
}

function isDev(){
  if(process.argv.length > 2){
    return process.argv[2] === '--dev'
  }else{
    return false
  }
}