
		$(document).ready(function(){
	  $("#addRecord").click(function(){
		const startYear= document.getElementById('startYear').value;
		if (startYear <= 2000) {
      window.alert('Incorrect year: ' + startYear)
      return}
	  $.ajax({
				method: 'POST',
				url: '/users/',
				type: 'POST',
				
				cache: false,
				data: {
					fullName:$('#fullName').val(),
					major:$('#major').val(),
					startYear: $('#startYear').val(),
					
				}
				
			})
			console.log("Records Added successfully");
			});
			});
	
	$(document).ready(function(){
	  $("#loadData").click(function(){
	  $("#enteredRecords").empty();
		$.getJSON("/users", function(result){
		  $.each(result, function(i, field){
		   for(var a=0;a<field.length;a++){
				$("#enteredRecords").append(field[a].fullName + " , " + field[a].major + " ,  " + field[a].startYear + "<button value='" +field[a].id+ "' id ='deleteData'>Delete</button>" +"<br>" );
				console.log(field[a].id);
				
			   }
		  
		  });
		});
	  });
	});
	
			
			
			
		  
		$(document).on("click","#deleteData",function(){
	   const id= $(this).val();	
		console.log(id);
	  $.ajax({
				method: 'DELETE',
				url: '/user/'+id,
				type: '',
				
				cache: false,
				
					
				}
				
				
			)
			console.log("Records Deleted successfully");
			reFill();
			});
			
			
		  
		 
		
	
function reFill()
			{
			document.getElementById("enteredRecords").innerHTML=" ";
			$.getJSON("/users", function(result){
		  $.each(result, function(i, field){
		   for(var a=0;a<field.length;a++){
				$("#enteredRecords").append(field[a].fullName + " , " + field[a].major + " ,  " + field[a].startYear + "<button value='" +field[a].id+ "' id ='deleteData'>Delete</button>" +"<br>" );
				console.log(field[a].id);
			   }
		  
		  });
		});
		}