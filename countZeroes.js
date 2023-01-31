function countZeros(binary_num ) {
    var rem;
    var count=0
   while(binary_num>=0){
    rem=(binary_num%10);
    if(rem==0){
      count++;
    }
    binary_num= parseInt(binary_num/10);
  }
    return count;
  }
  let num=10101;
  let result = countZeros(num);
  console.log(result);