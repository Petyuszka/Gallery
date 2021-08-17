const imagesData = [
    {photo: 'images/IMG_1744.JPG', title: 'Samurai', description: 'Japanese guy posing dressed as a samurai on the island of Itsukushima by the shore around tourists and deers.'},
    {photo: 'images/IMG_1748.JPG', title: 'Torii', description: 'A Torii - Japanese shrine gate - on the island of Itsukushima by the shore in the ocean.'},
    {photo: 'images/IMG_1769.JPG', title: 'Mossy shrine roof', description: 'Mossy roof of a japanese shrine on the island of Itsukushima.'},
    {photo: 'images/IMG_1800.JPG', title: 'Old and new', description: 'An old building did not get demolished, instead they built a new skyscraper around it in Kyoto, Japan.'},
    {photo: 'images/IMG_1821.JPG', title: 'Kinkaku-ji', description: 'Kinkaku-ji, officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan covered in gold by a beautiful lake and garden.'},
    {photo: 'images/IMG_2055.JPG', title: 'Rice field', description: 'A rice field in the countryside in Ishikawa prefecture. Beautiful nature around the hills of japan.'},
    {photo: 'images/IMG_2217.JPG', title: 'Tokyo at night', description: 'Tokyo street view at night in Shinjuku with many colorful glowing signs.'},
    {photo: 'images/IMG_2234.JPG', title: 'Akihabara', description: 'Akihabara, the capital of anime in Tokyo, Japan.'}
];

const maxImgIndex = imagesData.length - 1;

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    
    $(".box.active").removeClass("active");
    const currImg = imagesData[photoNumber];
    $('#bigPic').attr('src', currImg.photo);
    $('#title').text(currImg.title);
    $('#desc').text(currImg.description);
    $(".box[data-index=" + photoNumber + "]").addClass("active");
};

$(document).ready(() => {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    imagesData.forEach((item, index) => {
      $('#lower').append(`
      <div class = "box" data-index = "${index}" 
      style="background-image: url(${item.photo}); background-size: cover;">
      <div class = "title">${item.title}</div>
      </div>`)  
    });
    $(".box[data-index=" + currentPhoto + "]").addClass("active");
});

$('#rightBigArrow').click(() => {
    if (currentPhoto < maxImgIndex){
        currentPhoto++;
    }
    else {
      currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#leftBigArrow').click(() => {
    if (currentPhoto > 0){
        currentPhoto--;
    }
    else {
        currentPhoto = maxImgIndex;
    }
    loadPhoto(currentPhoto);
});

$(document).on("click", ".box", (event) => {
    let indexClicked = $(event.target).data('index');
    loadPhoto(indexClicked);
});