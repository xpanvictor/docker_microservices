window.onload = function () {
  items = document.querySelectorAll('.item');

  let voted = false;

  items.forEach((e) => {
    document.addEventListener('click', vote);
  });

  function vote(e) {
    const side = e.target.innerText;
    if (!voted) {
      fetch(`/vote/${side}`)
        .then((res) => {
          if (res.status == 200) {
            voted = true;
          }
          res.json();
        })
        .then((data) => console.log(data));
    } else {
      alert('Voted already');
    }
  }
};
