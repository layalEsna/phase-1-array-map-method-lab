const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'

];


function titleCased() {

  return tutorials.map(sen => {
    return sen.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  })
}






// function titleCased() {
//   //const specialWords = { oo: 'OO', api: 'API', nan: 'NaN', stoppropagation:'stoppropagation', preventdefault: 'PreventDefault', jsonp: 'JSONP' }
//   const specialWords = ['OO', 'API']
//   return tutorials.map(sen => {
//     //console.log(sen)
//     return sen.split(' ').map(word => {
//       //console.log(word)
//       //let lowerCaseWords = word.toLowerCase()
//       if (specialWords.hasOwnProperty(lowerCaseWords)) {
//         return specialWords[lowerCaseWords]
//       } else {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

//       }
//     }).join(' ')
//   })

// }




console.log(titleCased(tutorials))

