document.addEventListener('DOMContentLoaded', function() {
    // Get the main display element
    const mainDisplay = document.getElementById('mainDisplay');
    const mainDisplayContainer = mainDisplay.parentElement;

    // Get all thumbnail containers
    const thumbnails = document.querySelectorAll('.thumbnail-container');

    // Add click event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const type = this.dataset.type;
            const src = this.dataset.src;

            if (type === 'image') {
                // If it's an image, update the main image
                mainDisplayContainer.innerHTML = `
                    <img id="mainDisplay" src="${src}" class="img-fluid" alt="RootGone Weeding Auger" 
                         style="max-height: 100%; max-width: 100%; object-fit: contain;">
                `;
            } else if (type === 'video') {
                // If it's a video, replace with iframe
                mainDisplayContainer.innerHTML = `
                    <iframe 
                        style="width: 100%; height: 100%;"
                        src="${src}" 
                        title="Product Demo Video" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
            }
        });
    });
});