var now = moment();

$('time').each(function(i, e) {
    var time = moment($(e).attr('datetime'));

    if(now.diff(time, 'days') <= 1) {
        $(e).html('<span>' + time.from(now) + '</span>');
    }
});


moment().format('MMMM Do YYYY, h:mm:ss a');