



function palindrom_check(str)
{
  return str === str.split("").reverse().join("");
}

console.log(palindrom_check('madam'));
