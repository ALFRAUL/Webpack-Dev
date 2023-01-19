import '../assets/css/styles.css'
import jest from '../assets/imgs/jest.png'
export const sumar = (a,b) =>{
    console.log("suma")
    const h1 = document.createElement('h1');
    h1.innerText = `El resultado de la suma es ${a}+${b}=${a+b}`;
    document.body.append( h1 );
    const img = document.createElement('img');
    img.src = jest;
    document.body.append( img );

}