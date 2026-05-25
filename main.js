document.addEventListener("DOMContentLoaded", async () => {

    const url = 'https://picsum.photos/v2/list?page=2&limit=100';

    const res = await fetch(url);

    const h1 = document.querySelector('h1');

    const ancher = document.querySelector('a');





    if (res.ok === true) {
        console.log(res);

        const data = await res.json();

        const iNumber = (Math.round(Math.random() * 10) * 100);


        console.log(iNumber);

        const imgData = data[67];

        ancher.textContent = imgData.author;

        ancher.href = imgData.url;

        h1.style.backgroundImage = `url(${imgData.download_url})`;


        console.log(data);

    }

    else {
        alert('Error fetching data');
    }


});