const cavab = document.querySelectorAll('.sual1')
const cavab2 = document.querySelectorAll('.sual2')
const cavab3 = document.querySelectorAll('.sual3')
const cavab4 = document.querySelectorAll('.sual4')
const cavab5 = document.querySelectorAll('.sual5')
const cavab6 = document.querySelectorAll('.sual6')
const cavab7 = document.querySelectorAll('.sual7')
const cavab8 = document.querySelectorAll('.sual8')
const cavab9 = document.querySelectorAll('.sual9')
const cavab10 = document.querySelectorAll('.sual10')
const cavab11 = document.querySelectorAll('.sual11')
const cavab12 = document.querySelectorAll('.sual12')
const cavab13 = document.querySelectorAll('.sual13')
const cavab14 = document.querySelectorAll('.sual14')
const cavab15 = document.querySelectorAll('.sual15')
const cavab16 = document.querySelectorAll('.sual16')
const cavab17 = document.querySelectorAll('.sual17')
const cavab18 = document.querySelectorAll('.sual18')
const cavab19 = document.querySelectorAll('.sual19')
const cavab20 = document.querySelectorAll('.sual20')
const cavab21 = document.querySelectorAll('.sual21')
const cavab22 = document.querySelectorAll('.sual22')
const cavab23 = document.querySelectorAll('.sual23')
const cavab24 = document.querySelectorAll('.sual24')
const cavab25 = document.querySelectorAll('.sual25')

let score = 0;

cavab[0].addEventListener('click', () => {
    cavab[0].style.backgroundColor = 'red'
    cavab[0].style.color = 'white'
    if (cavab[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab').innerHTML = `Duz cavab: ${cavab[2].innerHTML}`
    }
    cavab[1].remove()
    cavab[2].remove()
    cavab[3].remove()
})
cavab[1].addEventListener('click', () => {
    cavab[1].style.backgroundColor = 'red'
    cavab[1].style.color = 'white'
    if (cavab[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab').innerHTML = `Duz cavab:${cavab[2].innerHTML}`
    }
    cavab[0].remove()
    cavab[2].remove()
    cavab[3].remove()
})
cavab[2].addEventListener('click', () => {
    cavab[2].style.backgroundColor = 'green'
    cavab[2].style.color = 'white'
    if (cavab[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab[1].remove()
    cavab[0].remove()
    cavab[3].remove()
})
cavab[3].addEventListener('click', () => {
    cavab[3].style.backgroundColor = 'red'
    cavab[3].style.color = 'white'
    if (cavab[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab').innerHTML = `Duz cavab: ${cavab[2].innerHTML}`
    }
    cavab[1].remove()
    cavab[2].remove()
    cavab[0].remove()
})
cavab2[0].addEventListener('click', () => {
    cavab2[0].style.backgroundColor = 'red'
    cavab2[0].style.color = 'white'
    if (cavab2[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab2').innerHTML = `Duz cavab: ${cavab2[3].innerHTML}`
    }
    cavab2[1].remove()
    cavab2[2].remove()
    cavab2[3].remove()
})
cavab2[1].addEventListener('click', () => {
    cavab2[1].style.backgroundColor = 'red'
    cavab2[1].style.color = 'white'
    if (cavab2[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab2').innerHTML = `Duz cavab: ${cavab2[3].innerHTML}`
    }
    cavab2[0].remove()
    cavab2[2].remove()
    cavab2[3].remove()
})
cavab2[2].addEventListener('click', () => {
    cavab2[2].style.backgroundColor = 'red'
    cavab2[2].style.color = 'white'
    if (cavab2[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab2').innerHTML = `Duz cavab: ${cavab2[3].innerHTML}`
    }
    cavab2[0].remove()
    cavab2[1].remove()
    cavab2[3].remove()
})
cavab2[3].addEventListener('click', () => {
    cavab2[3].style.backgroundColor = 'green'
    cavab2[3].style.color = 'white'
    if (cavab2[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab2').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab2[0].remove()
    cavab2[1].remove()
    cavab2[2].remove()
})
cavab3[0].addEventListener('click', () => {
    cavab3[0].style.backgroundColor = 'green'
    cavab3[0].style.color = 'white'
    if (cavab3[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab3').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab3[1].remove()
    cavab3[2].remove()
    cavab3[3].remove()
})
cavab3[1].addEventListener('click', () => {
    cavab3[1].style.backgroundColor = 'red'
    cavab3[1].style.color = 'white'
    if (cavab3[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab3').innerHTML = `Duz cavab: ${cavab3[0].innerHTML}`
    }
    cavab3[0].remove()
    cavab3[2].remove()
    cavab3[3].remove()
})
cavab3[2].addEventListener('click', () => {
    cavab3[2].style.backgroundColor = 'red'
    cavab3[2].style.color = 'white'
    if (cavab3[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab3').innerHTML = `Duz cavab: ${cavab3[0].innerHTML}`
    }
    cavab3[0].remove()
    cavab3[1].remove()
    cavab3[3].remove()
})
cavab3[3].addEventListener('click', () => {
    cavab3[3].style.backgroundColor = 'red'
    cavab3[3].style.color = 'white'
    if (cavab3[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 

    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab3').innerHTML = `Duz cavab: ${cavab3[0].innerHTML}`
    }
    cavab3[0].remove()
    cavab3[1].remove()
    cavab3[2].remove()
})
cavab4[0].addEventListener('click', () => {
    cavab4[0].style.backgroundColor = 'red'
    cavab4[0].style.color = 'white'
    if (cavab4[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab4').innerHTML = `Duz cavab: ${cavab4[2].innerHTML}`
    }
    cavab4[1].remove()
    cavab4[2].remove()
    cavab4[3].remove()
})
cavab4[1].addEventListener('click', () => {
    cavab4[1].style.backgroundColor = 'red'
    cavab4[1].style.color = 'white'
    if (cavab4[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab4').innerHTML = `Duz cavab: ${cavab4[2].innerHTML}`
    }
    cavab4[0].remove()
    cavab4[2].remove()
    cavab4[3].remove()
})
cavab4[2].addEventListener('click', () => {
    cavab4[2].style.backgroundColor = 'green'
    cavab4[2].style.color = 'white'
    if (cavab4[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab4').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab4[0].remove()
    cavab4[1].remove()
    cavab4[3].remove()
})
cavab4[3].addEventListener('click', () => {
    cavab4[3].style.backgroundColor = 'red'
    cavab4[3].style.color = 'white'
    if (cavab4[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 

    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab4').innerHTML = `Duz cavab: ${cavab4[2].innerHTML}`
    }
    cavab4[0].remove()
    cavab4[1].remove()
    cavab4[2].remove()
})
cavab5[0].addEventListener('click', () => {
    cavab5[0].style.backgroundColor = 'red'
    cavab5[0].style.color = 'white'
    if (cavab5[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab5').innerHTML = `Duz cavab: ${cavab5[1].innerHTML}`
    }
    cavab5[1].remove()
    cavab5[2].remove()
    cavab5[3].remove()
})
cavab5[1].addEventListener('click', () => {
    cavab5[1].style.backgroundColor = 'green'
    cavab5[1].style.color = 'white'
    if (cavab5[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab5').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab5[0].remove()
    cavab5[2].remove()
    cavab5[3].remove()
})
cavab5[2].addEventListener('click', () => {
    cavab5[2].style.backgroundColor = 'red'
    cavab5[2].style.color = 'white'
    if (cavab5[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab5').innerHTML = `Duz cavab: ${cavab5[1].innerHTML}`
    }
    cavab5[0].remove()
    cavab5[1].remove()
    cavab5[3].remove()
})
cavab5[3].addEventListener('click', () => {
    cavab5[3].style.backgroundColor = 'red'
    cavab5[3].style.color = 'white'
    if (cavab5[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 

    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab5').innerHTML = `Duz cavab: ${cavab5[1].innerHTML}`
    }
    cavab5[0].remove()
    cavab5[1].remove()
    cavab5[2].remove()
})
cavab6[0].addEventListener('click', () => {
    cavab6[0].style.backgroundColor = 'red'
    cavab6[0].style.color = 'white'
    if (cavab6[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab6').innerHTML = `Duz cavab: ${cavab6[2].innerHTML}`
    }
    cavab6[1].remove()
    cavab6[2].remove()
    cavab6[3].remove()
})
cavab6[1].addEventListener('click', () => {
    cavab6[1].style.backgroundColor = 'red'
    cavab6[1].style.color = 'white'
    if (cavab6[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab6').innerHTML = `Duz cavab: ${cavab6[2].innerHTML}`
    }
    cavab6[0].remove()
    cavab6[2].remove()
    cavab6[3].remove()
})
cavab6[2].addEventListener('click', () => {
    cavab6[2].style.backgroundColor = 'green'
    cavab6[2].style.color = 'white'
    if (cavab6[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab6').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab6[0].remove()
    cavab6[1].remove()
    cavab6[3].remove()
})
cavab6[3].addEventListener('click', () => {
    cavab6[3].style.backgroundColor = 'red'
    cavab6[3].style.color = 'white'
    if (cavab6[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 

    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab6').innerHTML = `Duz cavab: ${cavab6[2].innerHTML}`
    }
    cavab6[0].remove()
    cavab6[1].remove()
    cavab6[2].remove()
})
cavab7[0].addEventListener('click', () => {
    cavab7[0].style.backgroundColor = 'red'
    cavab7[0].style.color = 'white'
    if (cavab7[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab7').innerHTML = `Duz cavab: ${cavab7[3].innerHTML}`
    }
    cavab7[1].remove()
    cavab7[2].remove()
    cavab7[3].remove()
})
cavab7[1].addEventListener('click', () => {
    cavab7[1].style.backgroundColor = 'red'
    cavab7[1].style.color = 'white'
    if (cavab7[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab7').innerHTML = `Duz cavab: ${cavab7[3].innerHTML}`
    }
    cavab7[0].remove()
    cavab7[2].remove()
    cavab7[3].remove()
})
cavab7[2].addEventListener('click', () => {
    cavab7[2].style.backgroundColor = 'red'
    cavab7[2].style.color = 'white'
    if (cavab7[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab7').innerHTML = `Duz cavab: ${cavab7[3].innerHTML}`
    }
    cavab7[0].remove()
    cavab7[1].remove()
    cavab7[3].remove()
})
cavab7[3].addEventListener('click', () => {
    cavab7[3].style.backgroundColor = 'green'
    cavab7[3].style.color = 'white'
    if (cavab7[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab7').innerHTML = `Duz cavabdir`

    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab7[0].remove()
    cavab7[1].remove()
    cavab7[2].remove()
})
cavab8[0].addEventListener('click', () => {
    cavab8[0].style.backgroundColor = 'red'
    cavab8[0].style.color = 'white'
    if (cavab8[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab8').innerHTML = `Duz cavab: ${cavab8[1].innerHTML}`
    }
    cavab8[1].remove()
    cavab8[2].remove()
    cavab8[3].remove()
})
cavab8[1].addEventListener('click', () => {
    cavab8[1].style.backgroundColor = 'green'
    cavab8[1].style.color = 'white'
    if (cavab8[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab8').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab8[0].remove()
    cavab8[2].remove()
    cavab8[3].remove()
})
cavab8[2].addEventListener('click', () => {
    cavab8[2].style.backgroundColor = 'red'
    cavab8[2].style.color = 'white'
    if (cavab8[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab8').innerHTML = `Duz cavab: ${cavab8[1].innerHTML}`
    }
    cavab8[0].remove()
    cavab8[1].remove()
    cavab8[3].remove()
})
cavab8[3].addEventListener('click', () => {
    cavab8[3].style.backgroundColor = 'red'
    cavab8[3].style.color = 'white'
    if (cavab8[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab8').innerHTML = `Duz cavab: ${cavab8[1].innerHTML}`
    }
    cavab8[0].remove()
    cavab8[1].remove()
    cavab8[2].remove()
})
cavab9[0].addEventListener('click', () => {
    cavab9[0].style.backgroundColor = 'red'
    cavab9[0].style.color = 'white'
    if (cavab8[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab9').innerHTML = `Duz cavab: ${cavab9[1].innerHTML}`
    }
    cavab9[1].remove()
    cavab9[2].remove()
    cavab9[3].remove()
})
cavab9[1].addEventListener('click', () => {
    cavab9[1].style.backgroundColor = 'green'
    cavab9[1].style.color = 'white'
    if (cavab9[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab9').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab9[0].remove()
    cavab9[2].remove()
    cavab9[3].remove()
})
cavab9[2].addEventListener('click', () => {
    cavab9[2].style.backgroundColor = 'red'
    cavab9[2].style.color = 'white'
    if (cavab9[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab9').innerHTML = `Duz cavab: ${cavab9[1].innerHTML}`
    }
    cavab9[0].remove()
    cavab9[1].remove()
    cavab9[3].remove()
})
cavab9[3].addEventListener('click', () => {
    cavab9[3].style.backgroundColor = 'red'
    cavab9[3].style.color = 'white'
    if (cavab9[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab9').innerHTML = `Duz cavab: ${cavab9[1].innerHTML}`
    }
    cavab9[0].remove()
    cavab9[1].remove()
    cavab9[2].remove()
})
cavab10[0].addEventListener('click', () => {
    cavab10[0].style.backgroundColor = 'green'
    cavab10[0].style.color = 'white'
    if (cavab10[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab10').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab10[1].remove()
    cavab10[2].remove()
    cavab10[3].remove()
})
cavab10[1].addEventListener('click', () => {
    cavab10[1].style.backgroundColor = 'red'
    cavab10[1].style.color = 'white'
    if (cavab9[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab10').innerHTML = `Duz cavab: ${cavab10[0].innerHTML}`
    }
    cavab10[0].remove()
    cavab10[2].remove()
    cavab10[3].remove()
})
cavab10[2].addEventListener('click', () => {
    cavab10[2].style.backgroundColor = 'red'
    cavab10[2].style.color = 'white'
    if (cavab10[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab10').innerHTML = `Duz cavab: ${cavab10[0].innerHTML}`
    }
    cavab10[0].remove()
    cavab10[1].remove()
    cavab10[3].remove()
})
cavab10[3].addEventListener('click', () => {
    cavab10[3].style.backgroundColor = 'red'
    cavab10[3].style.color = 'white'
    if (cavab10[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab10').innerHTML = `Duz cavab: ${cavab10[0].innerHTML}`
    }
    cavab10[0].remove()
    cavab10[1].remove()
    cavab10[2].remove()
})
cavab11[0].addEventListener('click', () => {
    cavab11[0].style.backgroundColor = 'red'
    cavab11[0].style.color = 'white'
    if (cavab11[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab11').innerHTML = `Duz cavab: ${cavab11[1].innerHTML}`
    }
    cavab11[1].remove()
    cavab11[2].remove()
    cavab11[3].remove()
})
cavab11[1].addEventListener('click', () => {
    cavab11[1].style.backgroundColor = 'green'
    cavab11[1].style.color = 'white'
    if (cavab11[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab11').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab11[0].remove()
    cavab11[2].remove()
    cavab11[3].remove()
})
cavab11[2].addEventListener('click', () => {
    cavab11[2].style.backgroundColor = 'red'
    cavab11[2].style.color = 'white'
    if (cavab11[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab11').innerHTML = `Duz cavab: ${cavab11[1].innerHTML}`
    }
    cavab11[0].remove()
    cavab11[1].remove()
    cavab11[3].remove()
})
cavab11[3].addEventListener('click', () => {
    cavab11[3].style.backgroundColor = 'red'
    cavab11[3].style.color = 'white'
    if (cavab11[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab11').innerHTML = `Duz cavab: ${cavab11[1].innerHTML}`
    }
    cavab11[0].remove()
    cavab11[1].remove()
    cavab11[2].remove()
})
cavab12[0].addEventListener('click', () => {
    cavab12[0].style.backgroundColor = 'red'
    cavab12[0].style.color = 'white'
    if (cavab12[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab12').innerHTML = `Duz cavab: ${cavab12[2].innerHTML}`
    }
    cavab12[1].remove()
    cavab12[2].remove()
    cavab12[3].remove()
})
cavab12[1].addEventListener('click', () => {
    cavab12[1].style.backgroundColor = 'red'
    cavab12[1].style.color = 'white'
    if (cavab11[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab12').innerHTML = `Duz cavab: ${cavab12[2].innerHTML}`
    }
    cavab12[0].remove()
    cavab12[2].remove()
    cavab12[3].remove()
})
cavab12[2].addEventListener('click', () => {
    cavab12[2].style.backgroundColor = 'green'
    cavab12[2].style.color = 'white'
    if (cavab12[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab12').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab12[0].remove()
    cavab12[1].remove()
    cavab12[3].remove()
})
cavab12[3].addEventListener('click', () => {
    cavab12[3].style.backgroundColor = 'red'
    cavab12[3].style.color = 'white'
    if (cavab12[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab12').innerHTML = `Duz cavab: ${cavab12[2].innerHTML}`
    }
    cavab12[0].remove()
    cavab12[1].remove()
    cavab12[2].remove()
})
cavab13[0].addEventListener('click', () => {
    cavab13[0].style.backgroundColor = 'red'
    cavab13[0].style.color = 'white'
    if (cavab13[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab13').innerHTML = `Duz cavab: ${cavab13[2].innerHTML}`
    }
    cavab13[1].remove()
    cavab13[2].remove()
    cavab13[3].remove()
})
cavab13[1].addEventListener('click', () => {
    cavab13[1].style.backgroundColor = 'red'
    cavab13[1].style.color = 'white'
    if (cavab13[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab13').innerHTML = `Duz cavab: ${cavab13[2].innerHTML}`
    }
    cavab13[0].remove()
    cavab13[2].remove()
    cavab13[3].remove()
})
cavab13[2].addEventListener('click', () => {
    cavab13[2].style.backgroundColor = 'green'
    cavab13[2].style.color = 'white'
    if (cavab13[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab13').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab13[0].remove()
    cavab13[1].remove()
    cavab13[3].remove()
})
cavab13[3].addEventListener('click', () => {
    cavab13[3].style.backgroundColor = 'red'
    cavab13[3].style.color = 'white'
    if (cavab13[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab13').innerHTML = `Duz cavab: ${cavab13[2].innerHTML}`
    }
    cavab13[0].remove()
    cavab13[1].remove()
    cavab13[2].remove()
})
cavab14[0].addEventListener('click', () => {
    cavab14[0].style.backgroundColor = 'red'
    cavab14[0].style.color = 'white'
    if (cavab14[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab14').innerHTML = `Duz cavab: ${cavab14[2].innerHTML}`
    }
    cavab14[1].remove()
    cavab14[2].remove()
    cavab14[3].remove()
})
cavab14[1].addEventListener('click', () => {
    cavab14[1].style.backgroundColor = 'red'
    cavab14[1].style.color = 'white'
    if (cavab14[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab14').innerHTML = `Duz cavab: ${cavab14[2].innerHTML}`
    }
    cavab14[0].remove()
    cavab14[2].remove()
    cavab14[3].remove()
})
cavab14[2].addEventListener('click', () => {
    cavab14[2].style.backgroundColor = 'green'
    cavab14[2].style.color = 'white'
    if (cavab14[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab14').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab14[0].remove()
    cavab14[1].remove()
    cavab14[3].remove()
})
cavab14[3].addEventListener('click', () => {
    cavab14[3].style.backgroundColor = 'red'
    cavab14[3].style.color = 'white'
    if (cavab14[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab14').innerHTML = `Duz cavab: ${cavab14[2].innerHTML}`
    }
    cavab14[0].remove()
    cavab14[1].remove()
    cavab14[2].remove()
})
cavab15[0].addEventListener('click', () => {
    cavab15[0].style.backgroundColor = 'red'
    cavab15[0].style.color = 'white'
    if (cavab15[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab15').innerHTML = `Duz cavab: ${cavab15[1].innerHTML}`
    }
    cavab15[1].remove()
    cavab15[2].remove()
    cavab15[3].remove()
})
cavab15[1].addEventListener('click', () => {
    cavab15[1].style.backgroundColor = 'green'
    cavab15[1].style.color = 'white'
    if (cavab15[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab15').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab15[0].remove()
    cavab15[2].remove()
    cavab15[3].remove()
})
cavab15[2].addEventListener('click', () => {
    cavab15[2].style.backgroundColor = 'red'
    cavab15[2].style.color = 'white'
    if (cavab15[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab15').innerHTML = `Duz cavab: ${cavab15[1].innerHTML}`
    }
    cavab15[0].remove()
    cavab15[1].remove()
    cavab15[3].remove()
})
cavab15[3].addEventListener('click', () => {
    cavab15[3].style.backgroundColor = 'red'
    cavab15[3].style.color = 'white'
    if (cavab15[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab15').innerHTML = `Duz cavab: ${cavab15[1].innerHTML}`
    }
    cavab15[0].remove()
    cavab15[1].remove()
    cavab15[2].remove()
})
cavab16[0].addEventListener('click', () => {
    cavab16[0].style.backgroundColor = 'green'
    cavab16[0].style.color = 'white'
    if (cavab16[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab16').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab16[1].remove()
    cavab16[2].remove()
    cavab16[3].remove()
})
cavab16[1].addEventListener('click', () => {
    cavab16[1].style.backgroundColor = 'red'
    cavab16[1].style.color = 'white'
    if (cavab15[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab16').innerHTML = `Duz cavab: ${cavab16[0].innerHTML}`
    }
    cavab16[0].remove()
    cavab16[2].remove()
    cavab16[3].remove()
})
cavab16[2].addEventListener('click', () => {
    cavab16[2].style.backgroundColor = 'red'
    cavab16[2].style.color = 'white'
    if (cavab16[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab16').innerHTML = `Duz cavab: ${cavab16[0].innerHTML}`
    }
    cavab16[0].remove()
    cavab16[1].remove()
    cavab16[3].remove()
})
cavab16[3].addEventListener('click', () => {
    cavab16[3].style.backgroundColor = 'red'
    cavab16[3].style.color = 'white'
    if (cavab16[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab16').innerHTML = `Duz cavab: ${cavab16[0].innerHTML}`
    }
    cavab16[0].remove()
    cavab16[1].remove()
    cavab16[2].remove()
})
cavab17[0].addEventListener('click', () => {
    cavab17[0].style.backgroundColor = 'red'
    cavab17[0].style.color = 'white'
    if (cavab17[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab17').innerHTML = `Duz cavab: ${cavab17[2].innerHTML}`
    }
    cavab17[1].remove()
    cavab17[2].remove()
    cavab17[3].remove()
})
cavab17[1].addEventListener('click', () => {
    cavab17[1].style.backgroundColor = 'red'
    cavab17[1].style.color = 'white'
    if (cavab17[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab17').innerHTML = `Duz cavab: ${cavab17[2].innerHTML}`
    }
    cavab17[0].remove()
    cavab17[2].remove()
    cavab17[3].remove()
})
cavab17[2].addEventListener('click', () => {
    cavab17[2].style.backgroundColor = 'green'
    cavab17[2].style.color = 'white'
    if (cavab17[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab17').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab17[0].remove()
    cavab17[1].remove()
    cavab17[3].remove()
})
cavab17[3].addEventListener('click', () => {
    cavab17[3].style.backgroundColor = 'red'
    cavab17[3].style.color = 'white'
    if (cavab17[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab17').innerHTML = `Duz cavab: ${cavab17[2].innerHTML}`
    }
    cavab17[0].remove()
    cavab17[1].remove()
    cavab17[2].remove()
})
cavab18[0].addEventListener('click', () => {
    cavab18[0].style.backgroundColor = 'red'
    cavab18[0].style.color = 'white'
    if (cavab18[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab18').innerHTML = `Duz cavab: ${cavab18[2].innerHTML}`
    }
    cavab18[1].remove()
    cavab18[2].remove()
    cavab18[3].remove()
})
cavab18[1].addEventListener('click', () => {
    cavab18[1].style.backgroundColor = 'red'
    cavab18[1].style.color = 'white'
    if (cavab18[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab18').innerHTML = `Duz cavab: ${cavab18[2].innerHTML}`
    }
    cavab18[0].remove()
    cavab18[2].remove()
    cavab18[3].remove()
})
cavab18[2].addEventListener('click', () => {
    cavab18[2].style.backgroundColor = 'green'
    cavab18[2].style.color = 'white'
    if (cavab18[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab18').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab18[0].remove()
    cavab18[1].remove()
    cavab18[3].remove()
})
cavab18[3].addEventListener('click', () => {
    cavab18[3].style.backgroundColor = 'red'
    cavab18[3].style.color = 'white'
    if (cavab18[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab18').innerHTML = `Duz cavab: ${cavab18[2].innerHTML}`
    }
    cavab18[0].remove()
    cavab18[1].remove()
    cavab18[2].remove()
})
cavab19[0].addEventListener('click', () => {
    cavab19[0].style.backgroundColor = 'red'
    cavab19[0].style.color = 'white'
    if (cavab19[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab19').innerHTML = `Duz cavab: ${cavab19[1].innerHTML}`
    }
    cavab19[1].remove()
    cavab19[2].remove()
    cavab19[3].remove()
})
cavab19[1].addEventListener('click', () => {
    cavab19[1].style.backgroundColor = 'green'
    cavab19[1].style.color = 'white'
    if (cavab19[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab19').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab19[0].remove()
    cavab19[2].remove()
    cavab19[3].remove()
})
cavab19[2].addEventListener('click', () => {
    cavab19[2].style.backgroundColor = 'red'
    cavab19[2].style.color = 'white'
    if (cavab19[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab19').innerHTML = `Duz cavab: ${cavab19[1].innerHTML}`
    }
    cavab19[0].remove()
    cavab19[1].remove()
    cavab19[3].remove()
})
cavab19[3].addEventListener('click', () => {
    cavab19[3].style.backgroundColor = 'red'
    cavab19[3].style.color = 'white'
    if (cavab19[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab19').innerHTML = `Duz cavab: ${cavab19[1].innerHTML}`
    }
    cavab19[0].remove()
    cavab19[1].remove()
    cavab19[2].remove()
})
cavab20[0].addEventListener('click', () => {
    cavab20[0].style.backgroundColor = 'red'
    cavab20[0].style.color = 'white'
    if (cavab20[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab20').innerHTML = `Duz cavab: ${cavab20[1].innerHTML}`
    }
    cavab20[1].remove()
    cavab20[2].remove()
    cavab20[3].remove()
})
cavab20[1].addEventListener('click', () => {
    cavab20[1].style.backgroundColor = 'green'
    cavab20[1].style.color = 'white'
    if (cavab20[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab20').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab20[0].remove()
    cavab20[2].remove()
    cavab20[3].remove()
})
cavab20[2].addEventListener('click', () => {
    cavab20[2].style.backgroundColor = 'red'
    cavab20[2].style.color = 'white'
    if (cavab20[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab20').innerHTML = `Duz cavab: ${cavab20[1].innerHTML}`
    }
    cavab20[0].remove()
    cavab20[1].remove()
    cavab20[3].remove()
})
cavab20[3].addEventListener('click', () => {
    cavab20[3].style.backgroundColor = 'red'
    cavab20[3].style.color = 'white'
    if (cavab20[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab20').innerHTML = `Duz cavab: ${cavab20[1].innerHTML}`
    }
    cavab20[0].remove()
    cavab20[1].remove()
    cavab20[2].remove()
})
cavab21[0].addEventListener('click', () => {
    cavab21[0].style.backgroundColor = 'red'
    cavab21[0].style.color = 'white'
    if (cavab21[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab21').innerHTML = `Duz cavab: ${cavab21[2].innerHTML}`
    }
    cavab21[1].remove()
    cavab21[2].remove()
    cavab21[3].remove()
})
cavab21[1].addEventListener('click', () => {
    cavab21[1].style.backgroundColor = 'red'
    cavab21[1].style.color = 'white'
    if (cavab21[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab21').innerHTML = `Duz cavab: ${cavab21[2].innerHTML}`
    }
    cavab21[0].remove()
    cavab21[2].remove()
    cavab21[3].remove()
})
cavab21[2].addEventListener('click', () => {
    cavab21[2].style.backgroundColor = 'green'
    cavab21[2].style.color = 'white'
    if (cavab21[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab21').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab21[0].remove()
    cavab21[1].remove()
    cavab21[3].remove()
})
cavab21[3].addEventListener('click', () => {
    cavab21[3].style.backgroundColor = 'red'
    cavab21[3].style.color = 'white'
    if (cavab21[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab21').innerHTML = `Duz cavab: ${cavab21[2].innerHTML}`
    }
    cavab21[0].remove()
    cavab21[1].remove()
    cavab21[2].remove()
})
cavab22[0].addEventListener('click', () => {
    cavab22[0].style.backgroundColor = 'red'
    cavab22[0].style.color = 'white'
    if (cavab22[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab22').innerHTML = `Duz cavab: ${cavab22[1].innerHTML}`
    }
    cavab22[1].remove()
    cavab22[2].remove()
    cavab22[3].remove()
})
cavab22[1].addEventListener('click', () => {
    cavab22[1].style.backgroundColor = 'green'
    cavab22[1].style.color = 'white'
    if (cavab22[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab22').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab22[0].remove()
    cavab22[2].remove()
    cavab22[3].remove()
})
cavab22[2].addEventListener('click', () => {
    cavab22[2].style.backgroundColor = 'red'
    cavab22[2].style.color = 'white'
    if (cavab22[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab22').innerHTML = `Duz cavab: ${cavab22[1].innerHTML}`
    }
    cavab22[0].remove()
    cavab22[1].remove()
    cavab22[3].remove()
})
cavab22[3].addEventListener('click', () => {
    cavab22[3].style.backgroundColor = 'red'
    cavab22[3].style.color = 'white'
    if (cavab22[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab22').innerHTML = `Duz cavab: ${cavab22[1].innerHTML}`
    }
    cavab22[0].remove()
    cavab22[1].remove()
    cavab22[2].remove()
})
cavab23[0].addEventListener('click', () => {
    cavab23[0].style.backgroundColor = 'green'
    cavab23[0].style.color = 'white'
    if (cavab23[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab23').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab23[1].remove()
    cavab23[2].remove()
    cavab23[3].remove()
})
cavab23[1].addEventListener('click', () => {
    cavab23[1].style.backgroundColor = 'red'
    cavab23[1].style.color = 'white'
    if (cavab23[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab23').innerHTML = `Duz cavab: ${cavab23[0].innerHTML}`
    }
    cavab23[0].remove()
    cavab23[2].remove()
    cavab23[3].remove()
})
cavab23[2].addEventListener('click', () => {
    cavab23[2].style.backgroundColor = 'red'
    cavab23[2].style.color = 'white'
    if (cavab23[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab23').innerHTML = `Duz cavab: ${cavab23[0].innerHTML}`
    }
    cavab23[0].remove()
    cavab23[1].remove()
    cavab23[3].remove()
})
cavab23[3].addEventListener('click', () => {
    cavab23[3].style.backgroundColor = 'red'
    cavab23[3].style.color = 'white'
    if (cavab23[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab23').innerHTML = `Duz cavab: ${cavab23[0].innerHTML}`
    }
    cavab23[0].remove()
    cavab23[1].remove()
    cavab23[2].remove()
})
cavab24[0].addEventListener('click', () => {
    cavab24[0].style.backgroundColor = 'green'
    cavab24[0].style.color = 'white'
    if (cavab24[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab24').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab24[1].remove()
    cavab24[2].remove()
    cavab24[3].remove()
})
cavab24[1].addEventListener('click', () => {
    cavab24[1].style.backgroundColor = 'red'
    cavab24[1].style.color = 'white'
    if (cavab24[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab24').innerHTML = `Duz cavab: ${cavab24[0].innerHTML}`
    }
    cavab24[0].remove()
    cavab24[2].remove()
    cavab24[3].remove()
})
cavab24[2].addEventListener('click', () => {
    cavab24[2].style.backgroundColor = 'red'
    cavab24[2].style.color = 'white'
    if (cavab24[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab24').innerHTML = `Duz cavab: ${cavab24[0].innerHTML}`
    }
    cavab24[0].remove()
    cavab24[1].remove()
    cavab24[3].remove()
})
cavab24[3].addEventListener('click', () => {
    cavab24[3].style.backgroundColor = 'red'
    cavab24[3].style.color = 'white'
    if (cavab24[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab24').innerHTML = `Duz cavab: ${cavab24[0].innerHTML}`
    }
    cavab24[0].remove()
    cavab24[1].remove()
    cavab24[2].remove()
})
cavab25[0].addEventListener('click', () => {
    cavab25[0].style.backgroundColor = 'red'
    cavab25[0].style.color = 'white'
    if (cavab25[0].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab25').innerHTML = `Duz cavab: ${cavab25[2].innerHTML}`
    }
    cavab25[1].remove()
    cavab25[2].remove()
    cavab25[3].remove()
})
cavab25[1].addEventListener('click', () => {
    cavab25[1].style.backgroundColor = 'red'
    cavab25[1].style.color = 'white'
    if (cavab25[1].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab25').innerHTML = `Duz cavab: ${cavab25[2].innerHTML}`
    }
    cavab25[0].remove()
    cavab25[2].remove()
    cavab25[3].remove()
})
cavab25[2].addEventListener('click', () => {
    cavab25[2].style.backgroundColor = 'green'
    cavab25[2].style.color = 'white'
    if (cavab25[2].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        document.getElementById('duzCavab25').innerHTML = `Duz cavabdir`
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
    }
    cavab25[0].remove()
    cavab25[1].remove()
    cavab25[3].remove()
})
cavab25[3].addEventListener('click', () => {
    cavab25[3].style.backgroundColor = 'red'
    cavab25[3].style.color = 'white'
    if (cavab25[3].style.backgroundColor == 'green') {
        score += 4
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`; 
        
    }else{
        score = score - 1
        const netice = document.getElementById('xal').innerHTML = `Netice: ${score}`;
        document.getElementById('duzCavab25').innerHTML = `Duz cavab: ${cavab25[2].innerHTML}`
    }
    cavab25[0].remove()
    cavab25[1].remove()
    cavab25[2].remove()
})