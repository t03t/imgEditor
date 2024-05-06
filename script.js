document.addEventListener('DOMContentLoaded', function() {
    const tools = document.querySelectorAll('.tool');
    const panelImages = document.querySelectorAll('.panel__img');
    const bgImg = document.querySelector('.canvas__bg-img');
    const fgImg = document.querySelector('.canvas__fg-img');

    // Tool activation and tracking which tool is active
    let activeTool = 'foreground'; // Default to foreground

    tools.forEach(tool => {
        tool.addEventListener('click', function() {
            tools.forEach(t => t.classList.remove('tool--active'));
            this.classList.add('tool--active');
            activeTool = this.querySelector('.tool__icon').classList.contains('fa-crop-alt') ? 'background' : 'foreground';
        });
    });

    // Image selection for canvas
    panelImages.forEach(image => {
        image.addEventListener('click', function() {
            if (activeTool === 'background') {
                bgImg.src = this.src; // Set clicked image as background
            } else {
                fgImg.src = this.src; // Set clicked image as foreground
            }
        });
    });
});
