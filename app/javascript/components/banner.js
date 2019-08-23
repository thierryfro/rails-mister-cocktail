import Typed from 'typed.js';

const initTyped = () => {
  new Typed('#typed', {
    strings: ["The Best drinks!", "PQP CONSEGUI!!!","Tome todas!"],
    typeSpeed: 50,
    loop: true
  });
}


export { initTyped };
