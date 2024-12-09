const ip = '111.219.239.99'


function ipManupulation(){
    let res = 0;
    let masIp = ip.split('.');
    let secMasIp = masIp.map(i =>Number(i)).filter(item => item !== Number);
    for(let i=0; i< secMasIp.length; i++){
       res |= secMasIp[i] << (8*(3-i))
    }
    return(res)
}
console.log(ipManupulation())