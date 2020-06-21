// Display current date
const currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// Display timeblocks in colours according to past, present or future
const currentHour = moment().hours();
const timeBlockArray = $(".timeBlock").children();

timeBlockArray.each((index, value) => {
  const blockHour = $(value).attr("data-hour");
  if (currentHour > blockHour) {
    $(value).find(".description").addClass("past");
  } else if (currentHour < blockHour) {
    $(value).find(".description").addClass("future");
  } else {
    $(value).find(".description").addClass("present");
  }
});

// Get user input of description and put in local storage
$(".button").on("click", (event) => {
  const id = $(event.currentTarget.parentElement).parent().attr("data-hour");
  const userInput = $(event.currentTarget.parentElement).parent().find(".description").val();
  localStorage.setItem(id, userInput);
});

// Display saved description from local storage after refreshing
timeBlockArray.each((index, value) => {
    const blockHour = $(value).attr("data-hour");
    const storedDescription = localStorage.getItem(blockHour)
    $(value).find(".description").val(storedDescription)
});