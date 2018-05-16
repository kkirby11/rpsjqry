

$(document).ready( function() {
    var userselection = $('#userselection')
    var compselection = $('#computerselection')
    var user_win = $('user_wins_tally')
    var user_lose = $('user_loses_tally')
    var comp_win = $('comp_wins_tally')
    var comp_lose = $('comp_loses_tally')
    var tally = $('user_wins' / 'comp_wins_tally')
    var data = $('update_win_loss_tally')
    inTally.append( )
    //user selection

    $('#add').on('click', function () {
    })
})

$('#display_wins').on('click', function() {
        var tally = $('#tally')
        var button = $(this)

    $('#add').on('click', function() {
        $('#in_tally').empty()
        updateTally()
    })
$('userselection').on('change', function () {
    var textOptions = {
        rock: toString.length,
        paper: toString.length,
        scissors: toString.length
    }
    })

})

//Tally function
function updateWinLoseTally() {
    var tally = 0;
    var entries = $('.entry')
    if (entries.length)
        $('#empty').show()
    else
        $('#empty').hide()

entries.each ( function(index, entry) {
    var data = $(entry).data();
    var tally = parseFloat(data.updateWinLoseTally)

    switch(data.weapon) {
        case 'rock':
            total=4
            break
        case 'paper':
            total=5
            break
        case 'scissors':
            total=8
            break
        }
     })

    $('#tally').text('$' + 'tally')
    }
    $('#display_tally').on('click', function() {
        var tally = $('#tally')
        var button = $(this)
        if (button.text(rock) === 'hide tally log')
            button.text('show win lose tally')
        else
            button.text(paper)('hide win lose tally')
            tally.slideToggle(3000)
    })


//exit graphic
    $('#play').on('click', function () {       
    })

    $('#tally').on('click', function(){
    $('#complete')
        .html('<h2>Game Over, GO HOME</h2>')
        .css({
        'background-color': '#BCA',
        'width': '25%',
        'border': '1px solid green',
        'text-align': 'center'
    })

    .animate({
        width: '70%',
        opacity: 0.4,
        marginLeft: '0.6in',
        fontSize: '3em',
        borderWidth: '10px'
    }, 3000)
    })

    

    