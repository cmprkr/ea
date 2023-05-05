document.getElementById('sidebar').innerHTML = `<img src="img/logo/ea-logo.png" class="hover button-home"><img src="img/icon/menu_FILL1_wght400_GRAD0_opsz48.png" class="inv button-menu hover"><div class="navigationbar"><a class="button-home">HOME</a><a class="button-about">ABOUT</a><a class="button-members">MEMBERS</a><a class="button-schedule">SCHEDULE & STANDINGS</a><a class="button-showcases">SHOWCASES</a><a class="button-apply">APPLY</a><a class="button-contact">CONTACT</a><a class="button-shop">SHOP</a></div>`
document.querySelector('head').innerHTML = `<title>Elite Academy League</title><meta charset="UTF-8"><link rel="stylesheet" href="css/main.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">`

document.addEventListener("DOMContentLoaded", function() {

    const buttonHomes = document.querySelectorAll('.button-home');
    const buttonAbouts = document.querySelectorAll('.button-about');
    const buttonMenus = document.querySelectorAll('.button-menu');
    const buttonMemberss = document.querySelectorAll('.button-members');
    const buttonSchedules = document.querySelectorAll('.button-shcedule');
    const buttonShowcasess = document.querySelectorAll('.button-showcases');
    const buttonApplys = document.querySelectorAll('.button-apply');
    const buttonContacts = document.querySelectorAll('.button-contact');
    const buttonShops = document.querySelectorAll('.button-shop');

    function clearMainContent() {
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').style.backgroundImage = '';
        document.getElementById('main').style.backgroundColor = '#ffffff'
    };

    function homepage() {

        // Select the main element
        const mainElement = document.getElementById('main');

        // Create the first div with class "fullscreen"
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.className = 'fullscreen';

        // Create the image element and set its source and style attributes
        const imageElement = document.createElement('img');
        imageElement.src = 'img/logo/ea-logo-white-text.png';
        imageElement.style.width = '40%';

        // Append the image element to the fullscreen div and the fullscreen div to the main element
        fullscreenDiv.appendChild(imageElement);
        mainElement.appendChild(fullscreenDiv);

        // Create the second div with class "childcontainer"
        const childcontainerDiv = document.createElement('div');
        childcontainerDiv.className = 'childcontainer';

        // Create the paragraph element and set its class and text content
        const paragraphElement = document.createElement('p');
        paragraphElement.className = 'title hover button-members';
        paragraphElement.textContent = 'MEMBER CLUBS';

        // Create the two image elements and set their source and style attributes
        const iconElement = document.createElement('img');
        iconElement.src = 'img/icon/keyboard_double_arrow_down_FILL0_wght400_GRAD0_opsz48.png';
        iconElement.className = 'icon';

        const iconElement2 = document.createElement('img');
        iconElement2.src = 'img/icon/keyboard_double_arrow_down_FILL0_wght400_GRAD0_opsz48.png';
        iconElement2.className = 'icon';

        const mapImageElement = document.createElement('img');
        mapImageElement.src = 'img/EA_Members_Map_2022-1024x740.jpg';
        mapImageElement.style.display = 'block';
        mapImageElement.style.margin = '0 auto';
        mapImageElement.style.maxWidth = '100%';
        mapImageElement.style.height = 'auto';

        // Append the paragraph, icon, and map image elements to the childcontainer div
        childcontainerDiv.appendChild(paragraphElement);
        childcontainerDiv.appendChild(iconElement);
        childcontainerDiv.appendChild(mapImageElement);

        // Append the childcontainer div to the main element
        mainElement.appendChild(childcontainerDiv);

        // Create the third div with class "childcontainer" and set its background color and style attributes
        const partnerDiv = document.createElement('div');
        partnerDiv.className = 'childcontainer';
        partnerDiv.style.backgroundColor = '#032D6B';
        partnerDiv.style.maxWidth = '100%';
        partnerDiv.style.height = 'auto';

        // Create the first div with class "imagerow" and append the six image elements with source and style attributes
        const imageRow1Div = document.createElement('div');
        imageRow1Div.className = 'imagerow';
        const instagramImages = ['344258871_965653871555237_5287499136383649001_n.jpg', '343417716_947455103074599_2914635602181485100_n.jpg', '342635573_1333131647273049_355761575680642296_n.jpg', '342188780_114934384884989_7224514991140320918_n.jpg', '338362019_217083724340226_732005820872203066_n.jpg', '336181327_2073753299485047_91679150523117515_n.jpg'];
        for (const img of instagramImages) {
          const imageElement = document.createElement('img');
          imageElement.src = `img/instagram/${img}`;
          imageElement.style.height = '400px';
          imageRow1Div.appendChild(imageElement);
        }

        // Append the image row and the "OUR PARTNERS" paragraph element to the partner div
        partnerDiv.appendChild(imageRow1Div);
        const partnersTitle = document.createElement('p');
        partnersTitle.className = 'title';
        partnersTitle.style.marginTop = '25px';
        partnersTitle.textContent = 'OUR PARTNERS';
        partnerDiv.appendChild(partnersTitle);
        partnerDiv.appendChild(iconElement2);

        // Create the second div with class "imagerow" and append the six partner logos with links
        const imageRow2Div = document.createElement('div');
        imageRow2Div.className = 'imagerow';

        const partnerLinks = [
          { src: 'img/logo/non-ea/Capelli_Logo.png', href: 'https://capellisport.com/' },
          { src: 'img/logo/non-ea/Jungo-white_websitelogo.png', href: 'https://www.jungo-sports.com/' },
          { src: 'img/logo/non-ea/ea-home-hudl-white.png', href: 'https://www.hudl.com/' },
          { src: 'img/logo/non-ea/ESS-White-logo-1.png', href: 'https://europeansoccersolutions.com/' },
          { src: 'img/logo/non-ea/NEXTPRO_Logo_white2.png', href: 'https://nextpro.com/' },
          { src: 'img/logo/non-ea/ea-home-canopy-white.png', href: 'https://activatecanopy.com/' }
        ];

        for (const partner of partnerLinks) {
          const partnerLink = document.createElement('a');
          partnerLink.href = partner.href;
          partnerLink.target = '_blank';
          const partnerLogo = document.createElement('img');
          partnerLogo.src = partner.src;
          partnerLogo.style.width = 'auto';
          partnerLink.appendChild(partnerLogo);
          imageRow2Div.appendChild(partnerLink);
        }

        // Append the image row and the partner div to the main element
        partnerDiv.appendChild(imageRow2Div);
        mainElement.appendChild(partnerDiv);

        // Create the fourth div with class "childcontainer" and set its background color and style attributes
        const footerDiv = document.createElement('div');
        footerDiv.className = 'childcontainer';
        footerDiv.style.backgroundColor = '#132031';

        // Create the three child elements: icon, title, and image row with two links
        const backToTopIcon = document.createElement('img');
        backToTopIcon.src = 'img/icon/keyboard_double_arrow_up_FILL0_wght400_GRAD0_opsz48.png';
        backToTopIcon.className = 'icon';

        const backToTopTitle = document.createElement('p');
        backToTopTitle.className = 'title hover button-top';
        backToTopTitle.textContent = 'BACK TO TOP';

        const socialMediaRow = document.createElement('div');
        socialMediaRow.className = 'imagerow';
        const socialMediaLinks = [
          { src: 'img/logo/non-ea/new-Instagram-logo-white-glyph.png', href: 'https://www.instagram.com/eliteacademyleague/' },
          { src: 'img/logo/non-ea/twitter-icon-18-256.png', href: 'https://twitter.com/EliteAcademyL' },
        ];

        for (const link of socialMediaLinks) {
          const socialLink = document.createElement('a');
          socialLink.href = link.href;
          socialLink.target = '_blank';
          const socialLogo = document.createElement('img');
          socialLogo.src = link.src;
          socialLogo.style.width = '20px';
          socialLogo.style.height = '20px';
          socialLogo.className = 'hover';
          socialLink.appendChild(socialLogo);
          socialMediaRow.appendChild(socialLink);
        }

        const footerSubtitle = document.createElement('p');
        footerSubtitle.className = 'subtitle';
        footerSubtitle.textContent = '\u00A9 2020 ELITE ACADEMY LEAGUE. ALL RIGHTS RESERVED.';
        footerSubtitle.style.color = 'white';

        // Append the three child elements to the footer div and the footer div to the main element
        footerDiv.appendChild(backToTopIcon);
        footerDiv.appendChild(backToTopTitle);
        footerDiv.appendChild(socialMediaRow);
        footerDiv.appendChild(footerSubtitle);
        mainElement.appendChild(footerDiv);

        const buttonTop = document.querySelector('.button-top');

        buttonTop.addEventListener('click', function() {
            mainElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function aboutpage() {

        clearMainContent();

        document.getElementById('main').style.backgroundColor = '#032D6B';
        document.getElementById('main').style.backgroundImage = 'url(img/logo/eal-diag.png)';

        const main = document.querySelector('#main');

        const background = document.createElement('div');
        background.className = 'background';

        const purpose = document.createElement('div');
        purpose.className = 'childcontainer';
        const purposeText = document.createElement('div');
        purposeText.className = 'dynamictext';
        purposeText.style.height = 'auto';
        purposeText.style.padding = '10px';
        const purposeTitle = document.createElement('p');
        purposeTitle.className = 'title';
        purposeTitle.style.fontSize = '40px';
        purposeTitle.style.marginTop = '20px';
        purposeTitle.style.color = 'white';
        purposeTitle.textContent = 'OUR PURPOSE';
        const purposeDesc = document.createElement('p');
        purposeDesc.style.marginTop = '15px';
        purposeDesc.style.fontSize = '18px';
        purposeDesc.style.color = 'white';
        purposeDesc.textContent = 'The Elite Academy League is composed of member clubs that represent Elite competitive clubs in their market and have shown to be of the standard and will benefit from being part of this platform. By unifying clubs from within the conferences, we have maintained the defining standards of previous elite platforms with a collective approach to making sure the platform sits atop the youth landscape.';
        purposeText.appendChild(purposeTitle);
        purposeText.appendChild(purposeDesc);
        purpose.appendChild(purposeText);

        const mission = document.createElement('div');
        mission.className = 'childcontainer';
        const missionText = document.createElement('div');
        missionText.className = 'dynamictext';
        missionText.style.height = 'auto';
        missionText.style.padding = '10px';
        const missionTitle = document.createElement('p');
        missionTitle.className = 'title';
        missionTitle.style.fontSize = '40px';
        missionTitle.style.marginTop = '20px';
        missionTitle.style.color = 'white';
        missionTitle.textContent = 'OUR MISSION';
        const missionDesc = document.createElement('p');
        missionDesc.style.marginTop = '15px';
        missionDesc.style.fontSize = '18px';
        missionDesc.style.color = 'white';
        missionDesc.textContent = 'The Elite Academy League has a mission to provide a National platform with a standards based league giving clubs the ability to provide full developmental model and pathway with top competition and exposure.';
        missionText.appendChild(missionTitle);
        missionText.appendChild(missionDesc);
        mission.appendChild(missionText);

        const vision = document.createElement('div');
        vision.className = 'childcontainer';
        const visionText = document.createElement('div');
        visionText.className = 'dynamictext';
        visionText.style.height = 'auto';
        visionText.style.padding = '10px';
        visionText.style.color = 'white';
        const visionTitle = document.createElement('p');
        visionTitle.className = 'title';
        visionTitle.style.fontSize = '40px';
        visionTitle.style.marginTop = '20px';
        visionTitle.style.color = 'white';
        visionTitle.textContent = 'OUR VISION';
        const visionDesc = document.createElement('p');
        visionDesc.style.marginTop = '15px';
        visionDesc.style.fontSize = '18px';
        visionDesc.textContent = 'Our vision is to sit atop the youth landscape providing Elite Academy clubs and leaders the opportunity to guide the league and have autonomy to develop the game in the US. This league will serve to provide a seamless elite pathway for clubs and players to excel in the competitive landscape.';
        visionText.appendChild(visionTitle);
        visionText.appendChild(visionDesc);
        vision.appendChild(visionText);

        background.appendChild(purpose);
        background.appendChild(mission);
        background.appendChild(vision);
        main.appendChild(background);
    }

    buttonHomes.forEach(function(buttonHome) {

        buttonHome.onclick = function() {

            clearMainContent();
            homepage();
        };
    });

    buttonAbouts.forEach(function(buttonAbout) {

        buttonAbout.onclick = function() {

            clearMainContent();
            aboutpage();
        };
    });

    homepage();
});