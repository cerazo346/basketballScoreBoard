let guestScoreEl = document.getElementById("guestScore")
let homeScoreEl = document.getElementById("homeScore")
let guestScore = 0
let homeScore = 0

function homeOne(){
    homeScore++
    homeScoreEl.textContent = homeScore
}
function homeTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function resetHome(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
}

function guestOne(){
    guestScore++
    guestScoreEl.textContent = guestScore
}
function guestTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guestThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function resetGuest(){
    guestScore = 0
    guestScoreEl.textContent = guestScore
}