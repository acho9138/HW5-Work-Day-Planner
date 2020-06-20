// Display current date
const currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// Display timeblocks in colours according to past, present or future
const currentHour = moment().hours();
const timeBlockArray = $('.timeBlock').children();

timeBlockArray.each((index, value) => {
    const blockHour = $(value).attr('data-hour');
    if (currentHour > blockHour) {
        $(value).find('.description').addClass('past')
    } else if (currentHour < blockHour) {
        $(value).find('.description').addClass('future')
    } else {
        $(value).find('.description').addClass('present')
    }
})