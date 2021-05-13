
exports.slugger = (...args) => {
    args = args.map((arg) =>arg.split(/\s+/).join('-'))
    return args.join('-')
}
// export default slugger
// console.log(slugger("hey", "there", "policeman"))