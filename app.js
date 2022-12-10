const textArr = [
    `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects.`,
    `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it.`,
    `But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure.`,
    `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.`,
    `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`,
    `To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.`,
    `To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.`,
    `But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure.`,
    `No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.`
]
const amount = document.getElementById('amount');
const btn =document.querySelector('.btn');
const result =document.querySelector('.result');


btn.addEventListener('click', (e)=>{
    e.preventDefault();


    let value = parseInt(amount.value);
    if(value <=0 || value > 9 || isNaN(value)){
        result.innerHTML=`<p>${textArr[Math.floor(Math.random()*textArr.length)]}</p>`
    }else{
        let tempTextArr = textArr.slice(0, value)
        
        tempTextArr = tempTextArr.map(el=>`<p>${el}</p>`).join('');
        result.innerHTML= tempTextArr;
    }
})

