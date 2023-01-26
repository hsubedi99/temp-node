const {readFile, writeFile} = require('fs');
console.log("start");

readFile('./content/subfolder/test.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    } else{
        const first = result;
        readFile('./content/subfolder/second.txt', 'utf-8', (err, result) =>{
            if(err){
                console.log(err);
                return;
            }else{
                const second = result;
                // console.log(result);
                writeFile('./content/result.txt', `Here is the result: ${first}, ${second},}`, (err, result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log("Done with this");
                    }
                }
                )
                
            }
        })

    }
})
console.log("starting next text");