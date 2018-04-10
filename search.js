
if (process.argv.length > 2) 
{

   var exts = process.argv.slice(2, process.argv.length);

    const fs = require ('fs');
    fs.readdir(process.cwd(), (err, data) => { 
					
           if (err) {
			   console.log(err);
			   return;
		   }
		  
		   				 data.forEach((file) => {

				           exts.forEach((val) => {
					
					 if (file.includes('.'+val)){
						 
					     console.log(file);
					 }
});
			  
});
		  
});
}
     else{
	     console.log('no extensions');
}




