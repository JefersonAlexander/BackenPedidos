import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS =require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

GenerarClave(){
  let clave = generador(8,false); // catidad de caracteres y facil de recordar
  return clave;
}

CifrarClave(clave:string){
  let claveCifrada = cryptoJS.MD5(clave).toString(); // md5 metodo de cifrado de clave
  return claveCifrada;
  
}

}
