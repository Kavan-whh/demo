$(document).ready(function() {
  // $('#app div').html('测试')
  $('#app .get').click(function(event) {
    /* Act on the event */
    let self=this;
    $.ajax({
      url: '/api/posts',
      type: 'get',
      dataType: 'json',
      data: {id: 1}
    })
    .done(function(data) {
      console.log(data);
    });
  });


  $('#app .post').click(function(event) {
    /* Act on the event */
    let self=this;
    $.ajax({
      url: '/api/posts',
      type: 'post',
      dataType: 'json',
      data: {id: 3,"title": "json-server", "author": "typicode" }
    })
    .done(function(data) {
      console.log(data);
    });
  });



});
