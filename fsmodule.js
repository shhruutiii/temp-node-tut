const {readFileSync , writeFileSync}= require ('fs')
console.log('start')
const first =readFileSync('./folder/subfolder/text.txt','utf8')
const second =readFileSync('./folder/text1.txt','utf8')
console.log(first,second)
writeFileSync(
    './folder/resultsyn.txt',
    `here is the result : ${first} , ${second}`,
    {flag:'a'} 
)
console.log('done with the task')
console.log('starting with the next one')