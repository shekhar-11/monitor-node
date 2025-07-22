

const randGen = (arr)=>{
    let random = Math.floor(Math.random()*(arr.length))

    return random
}


const array = [1,2,3,4,5,6,7,8,9,10];

export const slowfile = ()=>{
    const delay = [1000,2000,3000,4000,5000,6000,100,200,300]
    const msval = [200, 201, 202, 204, 301, 400, 401, 403, 404, 500];
    const ms = msval[randGen(msval)]
    if(array[randGen(array)]===9)
    {
        const error = [
            "Jyada ho gya",
            "Late h ",
            "Ruko zara",
            "Delay h",
            "Waiting",
            "Titli Uri Urr na ski",
            "Why this kolaveri Di",
        ]
        throw new Error(error[randGen(error)]);
    }
    let latency = delay[randGen(delay)]
    return new Promise((resolve,reject)=>setTimeout(()=>resolve(ms) ),delay)

}




// module.exports = slowfile