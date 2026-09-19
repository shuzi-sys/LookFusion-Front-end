import { useEffect, useRef, useState } from 'react';

/*
1 - Crear intersectionobserver
2 - crear funcion callback
3 - funcion callback(entry) -> adhiere el "." en su css al ser observada

*/

function callback(entry){
  if (entry[0].IsIntersecting){
    entry[0].target.classList.add("show");
  }  
}

export function useScrollReveal(){

    const observer = new IntersectionObserver(callback, [])


}