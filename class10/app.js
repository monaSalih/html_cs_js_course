alert("insert student degree");
let prompt_msg = prompt("degree");
let prompt_name= prompt("inter student name")
let convert_to_integer = parseInt(prompt_msg);

if (convert_to_integer >= 50)
    console.log("studen name",prompt_name,"studen degree",convert_to_integer,"pass");
else
    console.log("faild");


// let prompt_while

// while (convert_to_integer > 2 && convert_to_integer < 2)
//     {prompt_msg = prompt("1+1 = ");
//     convert_to_imteger = parseInt(prompt_msg);
//     console.log(convert_to_imteger);
// }

// if (convert_to_integer > 2)
// {prompt_msg = prompt("1+1 = ");
// alert("pov:bigger than right answer")
//  convert_to_integer = parseInt(prompt_msg);}
// else if (convert_to_integer > 2)
// {prompt_msg = prompt("1+1 = ");
// alert("pov:lower than right answer")
// convert_to_integer = parseInt(prompt_msg);