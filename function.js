$(function(){ var operation = "A"; 
var selected_index = -1;  
var tbClients = localStorage.getItem("tbClients");
tbClients = JSON.parse(tbClients);  
if(tbClients == null)  
	tbClients = []; 
});


function Add(){ 
	var client = JSON.stringify({ 
		name: $("#field1").val(), 
		email : $("#field2").val(),
		 password : $("#field3").val(), 
		 confirm_password : $("#field4").val() }); 
	tbClients.push(client);
	 localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
	 alert("The data was saved."); return true; 
	}
	function Edit(){
	 tbClients[selected_index] = JSON.stringify
	 ({  
	 name: $("#field1").val(), 
		email : $("#field2").val(),
		 password : $("#field3").val(), 
		 confirm_password : $("#field4").val() }); 
	 //Alter the selected item on the table localStorage.setItem("tbClients", JSON.stringify(tbClients)); alert("The data was edited.") operation = "A"; //Return to default value return true; }


$("#frmCadastre").bind("submit",function()
	{ 
		if(operation == "A") 
			return Add(); 
	else 
		return Edit(); });

function List(){ 
	$("#tblList").html(""); 
	$("#tblList").html( "<thead>"+ " <tr>"+ " <th></th>"+ " <th>name</th>"+ " <th>email</th>"+ " <th>password</th>"+" <th>confirm_password</th>"+ " </tr>"+ "</thead>"+  "<tbody>"+ "</tbody>" );
	 for(var i in tbClients){ var cli = JSON.parse(tbClients[i]);
	  $("#tblList tbody").append("<tr>"+ " <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" + " <td>"+cli.name+"</td>" + " <td>"+cli.email+"</td>" + " <td>"+cli.password+"</td>" + " <td>"+cli.confirm_password+"</td>" + "</tr>"); 
	}
	 }
$(".btnEdit").bind("click", function(){ operation = "E"; 
	selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
	 var cli = JSON.parse(tbClients[selected_index]);
	  $("#field1").val(cli.name); $("#field2").val(cli.email); 
	  $("#field3").val(cli.password); 
	  $("#field4").val(cli.confirm_password);
	   $("#field1").attr("readonly","readonly");
	   $("#field2").focus();
	    }
	    );

