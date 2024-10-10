// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Assuming this is for changing the icon style
    navbar.classList.toggle('active'); // Toggle the active class for the navbar
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {

    
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             // active navbar links
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
//             })
//         }
//     })
//     // sticky header
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);
//     // remove toggle icon and navbar when click navbar links (scroll)


//     // animation footer on scroll

// }

window.onscroll = () => {

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('header');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animated');

        }
        // if want to ise Animation that repeats on scroll use his 
        else {
            sec.classList.remove('show-animated');
        }
    });

    // sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicking on navbar links (optional part you mentioned)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navbar').classList.remove('active'); // Assuming navbar class is '.navbar'
            document.querySelector('.toggle-icon').classList.remove('active'); // Assuming toggle icon is '.toggle-icon'
        });
    });
    // animation footer on scroll (Add the logic for animating the footer here if needed)

        let footer = document.querySelector('.footer');
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            footer.classList.add('show-animated');
        }
    };