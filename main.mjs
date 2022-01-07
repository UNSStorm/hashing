import bcrypt from "./node_modules/bcryptjs";

const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
    const hash = crypto.createHash('md5').update(val).digest('hex');
    console.log(hash + 'click');
    
    const input = document.getElementById('input');
    input.value = hash;
});

