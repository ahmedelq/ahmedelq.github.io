uinf = undefined;
$.ajax({
    url : "https://www.cloudflare.com/cdn-cgi/trace",
    type : "GET",
    async: false,
    success : function(response) {
        uinf = response;
    }
 });



 const url = 'https://script.google.com/macros/s/AKfycbwmGJ4pIhzonEyUVgnrcnoi2NCKmzelb_HVE74LMNHFercEMoSW/exec';
 document.getElementById('send').addEventListener('click', function() {
    $('#icon').removeClass()
    $('#icon').addClass('fas fa-spinner fa-spin')

    
    
      var info={
            ot:new Date(),
            tz:(new Date()).getTimezoneOffset()/60,
            rf: document.referrer,
            ua: navigator.userAgent,
            lg: navigator.languages.join(', '),
            uf:uinf,
            fb:document.getElementById('message').value
        };
      $.ajax({
        url: url,
        data: info, 
        type: 'POST', 
        dataType: 'json', 
        crossDomain: true, 
        success: function(response) {
          if(response.result == "success")
            $('form').addClass('d-none');
            $('#thankyou').removeClass('d-none');
        }, 
        error: function() {
          alert('Ops, something is wrong please try again.');
        } 
    });
 });
