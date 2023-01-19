export const resta = (a,b) =>{
    const h1 = document.createElement('h1');
    h1.innerText = `El resultado  es ${a}+${b}=${a-b}`;
    document.body.append( h1 );
}