var circleForm = document.querySelector('#circleForm');

circleForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submitted');
    db.collection("circles").doc().set({
        color: circleForm.color.value,
        size: circleForm.size.value,
        x: circleForm.x.value,
        y: circleForm.y.value

    }).then(()=>{
        location.reload();
    })

})