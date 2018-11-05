
// function validisbn(){
// 	var isbnNum=document.getElementById('isbNum_id');
// 	var isbnN=isbnNum.value;
// 	var numRex=/^[0-9]*\d$/ ;
// 	 isbnNum.style.color = "white";

//         if (numRex.test(isbnN)) {
//             isbnNum.style.backgroundColor = "";
//             isbnNum.style.color = "black";
//         }
//         else {
//             // isbnNum.style.backgroundColor = "red";
//             isbnNum.style.color = "red";
//             // isbnNum.style.borderColor = "red";
//         }
// }


var my_submit=document.getElementById('my_submit');
var update_id_1=document.getElementById('my_update');
update_id_1.setAttribute("class","button_show");
// my_submit.addEventListener('click',submitForm);


function submitForm(e){

	var bookName_id=document.getElementById('bookName_id').value;
	var AuthorName_id=document.getElementById('AuthorName_id').value;
	var date_id=document.getElementById('date_id').value;
	var isbNum_id=document.getElementById('isbNum_id').value;

	// if(!bookName_id || !AuthorName_id || !date_id || !isbNum_id){
	// 	return false;
	// }

	if(bookName_id == ""){
		document.getElementById('bookName').innerHTML="please fill up Book Title";
		return false;
	}
	if(!isNaN(bookName_id)){
		document.getElementById('bookName').innerHTML="*Please fill up character*";
		return false;
	}

	if((bookName_id.length<1) || (bookName_id.length>13)){
		document.getElementById('bookName').innerHTML="*Please fill the userName between 3 and 15*";
		return false;
	}
	else{
		document.getElementById('bookName').style.display="none";

	}
	



	if(AuthorName_id == ""){
		document.getElementById('authorName').innerHTML="please fill up Author Name";
		return false;
	}
	if(!isNaN(AuthorName_id)){
		document.getElementById('authorName').innerHTML="*Please fill up character*";
		return false;
	}

	if((AuthorName_id.length<3) || (AuthorName_id.length>13)){
		document.getElementById('authorName').innerHTML="*Please fill the Author Name between 3 and 15*";
		return false;
	}else{
		document.getElementById('authorName').style.display="none";
	}
	

	if(date_id == ""){
		document.getElementById('dateName').innerHTML="please fill up Correct Date";
		return false;
	}
	else{
		document.getElementById('dateName').style.display="none";
	}


	if(isbNum_id == ""){
		document.getElementById('isbnNum').innerHTML="please fill up Isbn Number";
		return false;
	}
	if(isNaN(isbNum_id)){
		document.getElementById('isbnNum').innerHTML="Enter Only Number";
		return false;
	}

	if((isbNum_id.length<1) || (isbNum_id.length>13)){
		document.getElementById('isbnNum').innerHTML="*Please fill the isbn Number between 1 and 13*";
		return false;
	}
	else{
		document.getElementById('isbnNum').style.display="none";
	}




	



	

	

	

	// var inputvalue='';

	var formData={
		name:bookName_id,
		author:AuthorName_id,
		date:date_id,
		isbn:isbNum_id
	};


	var result=JSON.parse(localStorage.getItem('formDatas'));

	console.log(result);

	
		for(var i=0;i<result.length;i++){
			var a=result[i].isbn;
			console.log(a);
			if(a===formData.isbn){
				document.getElementById('isbnNum_i').innerHTML="kkkkk";
				return false;
			}
		}



	if(localStorage.getItem('formDatas')===null){
		var formDatas=[];
		formDatas.push(formData);
		localStorage.setItem('formDatas',JSON.stringify(formDatas));
	}else{
		var formDatas=JSON.parse(localStorage.getItem('formDatas'));
		formDatas.push(formData);
		localStorage.setItem('formDatas',JSON.stringify(formDatas));
			
	}

	
	

	

	// localStorage.setItem('book','hrll');
	// console.log(localStorage.getItem('book'));
	// localStorage.removeItem('book');

	document.getElementById('main_form').reset();

	fetchformDatas();
	e.preventDefault();

};

function deleteFromData(isbn){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));

	for(var i=0;i<formDatas.length;i++){
		if(i===parseInt(isbn)){
			formDatas.splice(i,1);
		}
	}
	localStorage.setItem('formDatas',JSON.stringify(formDatas));
	// e.preventDefault();
	fetchformDatas();


}

//show data in input Field.....0

function editFromData(isbn){
	var update_id_1=document.getElementById('my_update');
	update_id_1.setAttribute("class","button_show1  btn btn-primary");
	var submit_hide=document.getElementById('my_submit');
	submit_hide.setAttribute("class"," btn btn-primary button_show");

	var formDatas=JSON.parse(localStorage.getItem('formDatas'));

	for(var i=0;i<formDatas.length;i++){
		if(formDatas[i].isbn===isbn){
			var name=formDatas[i].name;
			var author=formDatas[i].author;
			var date=formDatas[i].date;
			var isbn=formDatas[i].isbn;
			var inputTitle=document.getElementById('bookName_id').setAttribute("value",name);
			var authorName=document.getElementById('AuthorName_id').setAttribute("value",author);
			var dateName=document.getElementById('date_id').setAttribute("value",date);
			var isbnNum=document.getElementById('isbNum_id').setAttribute("value",isbn);
			
		}
	}

	// document.getElementById('main_form').reset();
	// fetchformDatas();

	event.preventDefault();
}



//Update Data
// var update_id=document.getElementById('my_update');

// update_id.addEventListener('click',function(e){
function updateForm(e){

	var bookName_id=document.getElementById('bookName_id').value;
	var AuthorName_id=document.getElementById('AuthorName_id').value;
	var date_id=document.getElementById('date_id').value;
	var isbNum_id=document.getElementById('isbNum_id').value;


	
	// if(!bookName_id || !AuthorName_id || !date_id || !isbNum_id){
	// 	return false;
	// }

	if(bookName_id == ""){
		document.getElementById('bookName').innerHTML="please fill up Book Title";
		return false;
	}
	if(!isNaN(bookName_id)){
		document.getElementById('bookName').innerHTML="*Please fill up character*";
		return false;
	}

	if((bookName_id.length<1) || (bookName_id.length>13)){
		document.getElementById('bookName').innerHTML="*Please fill the userName between 3 and 15*";
		return false;
	}
	else{
		document.getElementById('bookName').style.display="none";

	}
	



	if(AuthorName_id == ""){
		document.getElementById('authorName').innerHTML="please fill up Author Name";
		return false;
	}
	if(!isNaN(AuthorName_id)){
		document.getElementById('authorName').innerHTML="*Please fill up character*";
		return false;
	}

	if((AuthorName_id.length<3) || (AuthorName_id.length>13)){
		document.getElementById('authorName').innerHTML="*Please fill the Author Name between 3 and 15*";
		return false;
	}else{
		document.getElementById('authorName').style.display="none";
	}
	

	if(date_id == ""){
		document.getElementById('dateName').innerHTML="please fill up Correct Date";
		return false;
	}
	else{
		document.getElementById('dateName').style.display="none";
	}


	if(isbNum_id == ""){
		document.getElementById('isbnNum').innerHTML="please fill up Isbn Number";
		return false;
	}
	if(isNaN(isbNum_id)){
		document.getElementById('isbnNum').innerHTML="Enter Only Number";
		return false;
	}

	if((isbNum_id.length<1) || (isbNum_id.length>13)){
		document.getElementById('isbnNum').innerHTML="*Please fill the isbn Number between 1 and 13*";
		return false;
	}
	else{
		document.getElementById('isbnNum').style.display="none";
	}






	var formData={
		name:bookName_id,
		author:AuthorName_id,
		date:date_id,
		isbn:isbNum_id
	};

	update(formData);
	fetchformDatas();

};



function update(oldData){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));

	var newarr=[];
	for(var i=0;i<formDatas.length;i++){
		if(formDatas[i].isbn===oldData.isbn){
			formDatas[i].name=oldData.name;
			formDatas[i].author=oldData.author;
			formDatas[i].date=oldData.date;
			formDatas[i].isbn=oldData.isbn;
		}
	}

	newarr = formDatas;
	localStorage.setItem('formDatas',JSON.stringify(newarr));
}





// document.addEventListener('DOMContentLoaded',function(){
// 	document.getElementById('id_of_select').onchange=shortEventFun;
// 	fetchformDatas();
// 	event.preventDefault();

// },false);


//sort Data.......

document.querySelector('select[name="selectValue"]').onchange=shortEventFun;

function shortEventFun(event){
	// alert('hh');
	// console.log(e.target.value)
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));
	var inputvalue=event.target.value.toUpperCase();
	// console.log(inputvalue);
	var th=document.querySelectorAll('th.sort');
	

		if(inputvalue===th[0].innerHTML.toUpperCase()){
			for(var i=0;i<formDatas.length;i++){
				// console.log(formDatas)
				formDatas.sort(function(a,b){
					var nameA=a.name.toUpperCase();
					var nameB=b.name.toUpperCase();

					if(nameA<nameB){
						return -1;
					} else if(nameA>nameB){
						return 1;
					}
					return 0;
					
				});

				// console.log(formDatas);
				localStorage.setItem('formDatas',JSON.stringify(formDatas));

			}
		}

		else if(inputvalue===th[1].innerHTML.toUpperCase()){
			for(var i=0;i<formDatas.length;i++){
				// console.log(formDatas)
				formDatas.sort(function(a,b){
					var nameA=a.author.toUpperCase();
					var nameB=b.author.toUpperCase();

					if(nameA<nameB){
						return -1;
					} else if(nameA>nameB){
						return 1;
					}
					return 0;
					
				});

				// console.log(formDatas);
				localStorage.setItem('formDatas',JSON.stringify(formDatas));
			}
		}

		else if(inputvalue===th[2].innerHTML.toUpperCase()){
			for(var i=0;i<formDatas.length;i++){
				// console.log(formDatas)
				formDatas.sort(function(a,b){
					// var nameA=new Date(a.date);
					// var nameB=new Date(b.date);
					var dateA= new Date(a.date);
					var dateB= new Date(b.date);

					if(dateA.getDate() < dateB.getDate()){
						return -1;
					} else if(dateA.getDate() > dateB.getDate()){
						return 1;
					}
					return 0;
					
				});

				// console.log(formDatas);
				localStorage.setItem('formDatas',JSON.stringify(formDatas));

			}
		}

		else if(inputvalue===th[3].innerHTML.toUpperCase()){
			for(var i=0;i<formDatas.length;i++){
				// console.log(formDatas)
				formDatas.sort(function(a,b){
					var nameA=parseInt(a.isbn);
					var nameB=parseInt(b.isbn);

					if(nameA<nameB){
						return -1;
					} else if(nameA>nameB){
						return 1;
					}
					return 0;
					
				});

				// console.log(formDatas);
				localStorage.setItem('formDatas',JSON.stringify(formDatas));
			}
		}


		fetchformDatas();
			
}


// Fetch All data ......

function fetchformDatas(){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));
	var tbody_html=document.getElementById('tbody_html');

	tbody_html.innerHTML='';

	for(var i=0; i<formDatas.length;i++){
		var name=formDatas[i].name;
		var author=formDatas[i].author;
		var date=formDatas[i].date;
		var isbn=formDatas[i].isbn;

		tbody_html.innerHTML +='<tr><td>'+name+'</td><td>'+
				author+'</td><td>'+
				date+'</td><td>'+isbn
				+'</td><td class="d-flex"><a href="" onclick="deleteFromData(\''+i+'\')"><i class="far fa-trash-alt"></i></a> <a href="" class="ml-auto" onclick="editFromData(\''+isbn+'\')"><i class="fas fa-pencil-alt  "></i></a></td></tr>';

	}


}


//Search item

function mySearchFun() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("search_input1");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbody_html");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}









// var result=JSON.parse(localStorage.getItem('formDatas'));

// 	console.log(result);

	
// 		for(var i=0;i<result.length;i++){
// 			var a=result[i];
// 			console.log(a.isbn);
// 		}
