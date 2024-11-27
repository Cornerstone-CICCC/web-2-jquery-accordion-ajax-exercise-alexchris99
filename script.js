$(function() {
  // your code here
  // acordion
  $(".accordion > .accordion-header").on("click", function(){
    $(".accordion-content").not($(this).next()).slideUp()
    if(($(this).next()).is(":hidden")==true){
      $(this).next().slideDown()
    }
    else{
      $(this).next().slideUp()
    }
  })
  // fetch data
  $(".todos").find("button").on("click",()=>{
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: 'GET',
      success: function
      (response){
        arr = response.todos
        arr.forEach(element => {
          $(".todos").find("ul").append(`<li>${element.todo}</li>`)
        });
      },
      error: function(err){
        console.error(err)
      }
    })
  })
})