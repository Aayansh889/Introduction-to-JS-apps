var choice= prompt("Welcome to perimeter calculator. /n Please enter your choice: /n1. Perimeter of rectangle /n2.Perimeter of triangle. /n3. Perimeter of circle. /n4. Perimeter of parellelogram")
if (choice=='1') {
    var l= prompt("Enter the length")
    var b=prompt("Enter the breadth")
    var result= 2*[Number(l)+Number(b)]
    alert('The area is' + result)
}
if (choice=='2') {
    var h= prompt("Enter the height")
    var b=prompt("Enter the base")
    var result=Number(h) +Number(b) + Number(h)**2+Number(b)**2**0.5
    alert('The area is' + result)
}
if (choice=='3') {
    var r= prompt("Enter the radius")
    var result= 2*3.14*Number(r)
    alert('The area is' + result)
}
if (choice=='4') {
    var h= prompt("Enter the height")
    var cb=prompt("Enter the corresponding base")
    var result= 2*[Number(h)+Number(cb)]
    alert('The area is' + result)
}