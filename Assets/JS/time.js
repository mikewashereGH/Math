var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
    console.log('Good Morning')
} else if (curHr < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}