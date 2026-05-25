Document.addEventListener("DOMContentLoaded", () => {

    const url = 'https://picsum.photos/v2/list?page=2&limit=100';

    const res = await fetch(url);

    if (res.ok === true) {
        console.log(res)

    }

    else {
        alert('Error fetching data');
    }
});