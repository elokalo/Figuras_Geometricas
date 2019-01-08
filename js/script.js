 (function(){
 	"use strict";

 	document.addEventListener('DOMContentLoaded', function(){

 		const botonera = document.querySelectorAll('button');
		const figura = document.getElementById('figura');
		 
		eventos();
 	
		function eventos() { 
			botonera[0].addEventListener('click', cuadrado);
			botonera[1].addEventListener('click', rectangulo);
			botonera[2].addEventListener('click', triangulo);
			botonera[3].addEventListener('click', circulo);
			botonera[4].addEventListener('click', rombo);
			botonera[5].addEventListener('click', romboide);
			botonera[6].addEventListener('click', trapecio);
		}

 		function cuadrado(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='150px';
			figura.style.height='150px';
			figura.style.backgroundColor= 'orange';
			figura.style.borderRadius = '0%';
			figura.style.border = 'none';
			figura.style.transform='rotate(0deg)';
			calculosCuadrado();
		}
		 
		function rectangulo(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='250px';
			figura.style.height='150px';
			figura.style.backgroundColor= 'red';
			figura.style.borderRadius = '0%';
			figura.style.border = 'none';
			figura.style.transform='rotate(0deg)';
			calculosRectangulo();
		}

		function triangulo(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='150px';
			figura.style.height='150px';
			figura.style.backgroundColor= 'transparent';
			figura.style.borderRadius = '0%';
			figura.style.borderTop= '0px solid transparent';
			figura.style.borderRight= '100px solid transparent';
			figura.style.borderLeft= '100px solid transparent';
			figura.style.borderBottom= '150px solid pink';
			figura.style.transform='rotate(0deg)';
			calculosTriangulo();
		}

		function circulo(){
			figura.style.transition ='all 0.4s ease-in-out';
			figura.style.width = '150px';
			figura.style.height='150px';
			figura.style.borderRadius = '50%';
			figura.style.backgroundColor = 'green';
			figura.style.border = 'none';
			figura.style.transform='rotate(0deg)';
			calculosCirculo();
		}

		function rombo(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='100px';
			figura.style.height='100px';
			figura.style.transform='rotate(45deg) skew(11deg, 11deg)';
			figura.style.backgroundColor= 'blue';
			figura.style.borderRadius = '0%';
			figura.style.border = 'none';
			calculosRombo();
		}

		function romboide(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='250px';
			figura.style.height='150px';
			figura.style.backgroundColor= 'gray';
			figura.style.borderRadius = '0%';
			figura.style.border = 'none';
			figura.style.transform='rotate(0deg) skew(-15deg)';
			calculosRomboide();
		}

		function trapecio(){
			figura.style.transition='all 0.4s ease-in-out';
			figura.style.width='250px';
			figura.style.height='150px';
			figura.style.backgroundColor= 'transparent';
			figura.style.borderRadius = '0%';
			figura.style.borderRight= '70px solid transparent';
			figura.style.borderLeft= '70px solid transparent';
			figura.style.borderBottom= '150px solid salmon';
			figura.style.transform='rotate(0deg)';

			calculosTrapecio();
		}

		function calculosCuadrado(){ 
			let lado = document.querySelectorAll('.ladoCua');
			let resPe = document.querySelector('#rePeCua');
			let resAr = document.querySelector('#reArCua');

			lado[0].addEventListener('input', function(){
				let perimetro = (lado[0].value)*4;
				resPe.value = Number(perimetro).toFixed(4);
			});

			lado[1].addEventListener('input', function(){
				let area = Math.pow(lado[1].value, 2); 
				resAr.value = Number(area).toFixed(4);
			});
		}

		function calculosRectangulo(){
			let base = document.querySelectorAll('.baseRec');
			let altura = document.querySelectorAll('.alturaRec');
			let resPe = document.querySelector('#rePeRec');
			let resAr = document.querySelector('#reArRec');

			base[0].addEventListener('input', perRectangulo);
			altura[0].addEventListener('input', perRectangulo);
			base[1].addEventListener('input', arRectangulo);
			altura[1].addEventListener('input', arRectangulo);

			function perRectangulo(){
				let perimetro = (2*base[0].value)+(2*altura[0].value);
				resPe.value = Number(perimetro).toFixed(4);
			}

			function arRectangulo(){
				let area = base[1].value*altura[1].value;
				resAr.value = Number(area).toFixed(4);
			}

		}

		function calculosTriangulo(){
			let lado = document.querySelector('#ladoTri');
			let base = document.querySelector('#baseTri');
			let altura = document.querySelector('#alturaTri');
			let resPe = document.querySelector('#rePeTri');
			let resAr = document.querySelector('#reArTri');

			lado.addEventListener('input', function(){
				let perimetro = (lado.value)*3;
				resPe.value = Number(perimetro).toFixed(4);
			});

			base.addEventListener('input', arTriangulo);
			altura.addEventListener('input', arTriangulo);

			function arTriangulo(){
				let area = (base.value*altura.value)/2;
				resAr.value = Number(area).toFixed(4);
			}
		}

		function calculosCirculo(){
			let diametro = document.querySelector('#diametro');
			let radio = document.querySelector('#radio');
			let resPe = document.querySelector('#rePeCir');
			let resAr = document.querySelector('#reArCir');

			diametro.addEventListener('input', function(){
				let perimetro = diametro.value*Math.PI;
				resPe.value = Number(perimetro).toFixed(4); 
			});

			radio.addEventListener('input', function(){
				let perimetro = Math.pow(radio.value, 2)*Math.PI;
				resAr.value = Number(perimetro).toFixed(4); 
			});
		}

		function calculosRombo(){
			let lado = document.querySelector('#ladoRombo');
			let diagMay = document.querySelector('#diagMay');
			let diagMen = document.querySelector('#diagMen');
			let resPe = document.querySelector('#rePeRombo');
			let resAr = document.querySelector('#reArRombo');

			lado.addEventListener('input', function(){
				let perimetro = lado.value*4;
				resPe.value = Number(perimetro).toFixed(4);
			});

			diagMay.addEventListener('input', areaRombo);
			diagMen.addEventListener('input', areaRombo);

			function areaRombo(){
				let area = (diagMay.value*diagMen.value)/2;
				resAr.value = Number(area).toFixed(4);
			}
		}

		function calculosRomboide(){
			let base = document.querySelectorAll('.baseRom');
			let altura = document.querySelectorAll('.alturaRom');
			let resPe = document.querySelector('#rePeRom');
			let resAr = document.querySelector('#reArRom');

			base[0].addEventListener('input', perRectangulo);
			altura[0].addEventListener('input', perRectangulo);
			base[1].addEventListener('input', arRectangulo);
			altura[1].addEventListener('input', arRectangulo);

			function perRectangulo(){
				let perimetro = (2*base[0].value)+(2*altura[0].value);
				resPe.value = Number(perimetro).toFixed(4);
			}

			function arRectangulo(){
				let area = base[1].value*altura[1].value;
				resAr.value = Number(area).toFixed(4);
			}
		}

		function calculosTrapecio(){
			let lado = document.querySelectorAll('.ladoTrap');
			let altura = document.querySelector('#alturaTrap');
			let baseMay = document.querySelector('#baseMay');
			let baseMen = document.querySelector('#baseMen');
			let resPe = document.querySelector('#rePeTrap');
			let resAr = document.querySelector('#reArTrap');

			lado[0].addEventListener('input', perTrap);
			lado[1].addEventListener('input', perTrap);
			lado[2].addEventListener('input', perTrap);
			lado[3].addEventListener('input', perTrap);

			function perTrap(){
				let perimetro = (1*lado[0].value) + (1*lado[1].value) + (1*lado[2].value) + (1*lado[3].value);
				resPe.value = Number(perimetro).toFixed(4);
			}

			altura.addEventListener('input', arTrap);
			baseMay.addEventListener('input', arTrap);
			baseMen.addEventListener('input', arTrap);
			
			function arTrap(){
				let area = (altura.value*(1*baseMay.value+1*baseMen.value))/2;
				resAr.value = Number(area).toFixed(4);
			}
		}

 	});
 })();

 $(function(){

		$('button.cuadrado').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.cuadrado').slideDown(1000);
			
		});

		$('button.rectangulo').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.rectangulo').slideDown(1000);
		});

		$('button.triangulo').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.triangulo').slideDown(1000);
		});

		$('button.circulo').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.circulo').slideDown(1000);
		});

		$('button.rombo').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.rombo').slideDown(1000);
		});
		
		$('button.romboide').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.romboide').slideDown(1000);
		});

		$('button.trapecio').on('click', function(){
			$('input[type="number"]').val('');
			$('div.formula').slideUp();
			$('div.trapecio').slideDown(1000);
		});
		
 });