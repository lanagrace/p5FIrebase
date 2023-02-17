function setup(){
    var canvas = createCanvas(window.innerWidth/2, window.innerHeight);
    canvas.parent('sketchContainer');


    db.collection('circles').get().then((querysnapshot)=>{
        querysnapshot.forEach((doc) => {
            fill(doc.data().color);
            ellipse(doc.data().x, doc.data().y, doc.data().size)
        })
    })
}

function draw(){

}