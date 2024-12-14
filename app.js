const compress = (a, b = true) => {

  if(!verifica(a))
  {
    throw new Error("InvalidType");
  }

  if(a && a.length === 0)
  {
    //throw new Error ("Sirul a este vid.");
    return a;
  }
  let str_a2 ="";

  if(b===true)
  {
    for(let i = 0; i<a.length; i++)
    {
      let j = i+1;
      let numara_enc=1;
      while(a[i] === a[j])
      {
        numara_enc++;
        if(numara_enc === 9)
        {
          j++;  //break;
        }
        else
        {
          j++;
        }
      }
      str_a2 += a[i] + (numara_enc > 1 ? numara_enc : '1');
      i=j-1;
    }
  }
  else if(b===false)
  {
    for(let i=0; i<a.length; i++)
    {
      let caracter = a[i];
      let repeta_dec = 1;
      {
        if(i+1<a.length && !isNaN(parseInt(a[i + 1], 10)))
        {
            repeta_dec = parseInt(a[i + 1], 10);
            i++; 
        }
        str_a2 += caracter.repeat(repeta_dec);

      }
    }
    //str_a2 = str_a2.concat(`${numara_dec}${a[i]}`);
  }
  return str_a2;
};


module.exports = compress

function verifica(a) {
  return (typeof a === "string" || a instanceof String);
}

let sir1= "";
let sir2="a4b5c2d4";
let sir3="aaaaaaaaaaaaaaaaaaaaiiiiccccccccccccccccccccccccccccccc";
let sir4="xyzttttttt";


console.log(compress(sir1));
console.log(compress(sir2, false));
console.log(compress(sir3, true));
console.log(compress(sir4, true));