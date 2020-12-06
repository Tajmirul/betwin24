$(document).ready(function () {


    // my code ----------------------------------------------------------------------    
    var placeBetPopup = $('#place-bet');

    // game filter ----------------------------
    $('.side-bar a').click(function(event) {

        // adding active class to clicked side-bar item
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // hideing all element
        $('.all-match').hide();

        // show filtered elements
        $($(this).data('show')).show();


        event.preventDefault();

    });

    // all popup ----------------------------
    $('.open-popup').click(function(event) {

        var dataPopup = $(this).data('popup');

        $('.popup-container').show();

        if (dataPopup === '#place-bet'){

            // getting data (field-data, selected-shot, selected-teams, bet-rate)
            let  betRate = $(this).text();
            let fieldData = $(this).prev('p').text();
            let selectedShot = $($(this).parents('.collapse')[0]).prev().text();
            let selectedTeams = $($(this).parents('.collapse')[1]).prev().find('.teams').text();

            // putting data to popup
            placeBetPopup.find('.bet-rate .number').text(betRate);
            placeBetPopup.find('.field-data').text(fieldData);
            placeBetPopup.find('.selected-shot').text(selectedShot);
            placeBetPopup.find('.selected-teams').text(selectedTeams);
            updateBet();

        }

        $(dataPopup).fadeIn(200);
        $('.overlay').fadeIn(200);


        event.preventDefault();
    });
    $('.overlay, .close-popup').click(function() {

        $('.popup-container').hide();
        $('.popup').fadeOut(200);
        $('.overlay').fadeOut(200);

    });

    $(placeBetPopup.find('.bet-amount')[0]).on('input', updateBet);


    function updateBet() {

        // getting rate and amount
        let betRate = parseFloat(placeBetPopup.find('.bet-rate .number').text());

        let betAmount = $(placeBetPopup.find('input.bet-amount')[0]).val();

        // update total stake
        if (betAmount === ''){
            placeBetPopup.find('.total-stake .number').text('0');
        } else {
            placeBetPopup.find('.total-stake .number').text(betAmount);
        }
        placeBetPopup.find('.posible-return .number').text(betRate * betAmount);

        // update posible return


    };


});


