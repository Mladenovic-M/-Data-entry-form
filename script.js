function submit(){
	let ime=document.querySelector('#ime').value;
	let prezime=document.querySelector('#prezime').value;
	let br=document.querySelector('#br_telefona').value;
	let gmail=document.querySelector('#gmail').value;
	let obavestenje=document.querySelector('.obavestenje');
    ime=ime.length;

    obavestenje.innerHTML = '';

    if(ime === '' || prezime === '' || br === '' || gmail === ''){
    	obavestenje.innerHTML=`<p>Sva polja moraju biti popunjena</p>`;
    	 return;
    }


	if(ime> 15){
		obavestenje.innerHTML=`<p>Ime ne sme da bude duze od 15 karaktera</p>`;
		 return;
	}

	if(prezime.length > 30){
		obavestenje.innerHTML=`<p>Proveri da li si dobro uneo prezime</p>`;
		 return;
	}

//Provera broja telefona
	if(br.charAt(0) === '0'&& br.charAt(1) === '6'){

		}else{
			obavestenje.innerHTML=`<p>Kreni sa 06</p>`;
			 return;
		}

	let duzina= br.length;
    let pocizija= br.indexOf('6');
    let izmedju=(br.substring(pocizija +1,duzina));

    if(izmedju > 0 && !isNaN(izmedju) && izmedju.trim() !== ''){
    	
    }else{
    	obavestenje.innerHTML=`<p>Nisi dobro uneo broj telefona</p>`;
    	 return;
    }

    //Provera gmail adrese
    if(gmail.indexOf('@') && gmail.indexOf('.')){
    	let pozicijaAt=gmail.indexOf('@');
    	let pozicijaB=gmail.indexOf('.');
    	let nadzor=gmail.substring(0,pozicijaAt);
    	let izmedju2=gmail.substring(pozicijaAt+1,pozicijaB);
    	let posle=gmail.substring(pozicijaB+1,gmail.length);
    
    	let duzina=izmedju2.length;

    	if(nadzor.length>0 && duzina ===5 && posle.length>0){
    		console.log("radii");
    	}else{
    		obavestenje.innerHTML=`<p>Nisi dobro uneo gmail adresu</p>`;
    		 return;
    	}
    }else{
    	obavestenje.innerHTML=`<p>Nisi uneo pravilnu gmail adresu</p>`;
    	 return;
    }

}

