
$('#turnOn').on('click', function(){
	console.log('turning lights on!');
    $.ajax({
        type: 'POST',
        url: '/on'
    });
})

$('#turnOff').on('click', function(){
	console.log('turning lights off!');
    $.ajax({
        type: 'POST',
        url: '/off'
    });
})