document.addEventListener('DOMContentLoaded', function() {
    // Add tooltips to ranking boxes
    const rankingBoxes = document.querySelectorAll('.ranking-box');
    rankingBoxes.forEach(box => {
        const rank = box.getAttribute('data-rank');
        const type = box.getAttribute('data-type');
        let tooltipText = '';
        
        if (type === 'journal') {
            tooltipText = `Journal Ranking: ${rank}`;
        } else if (type === 'conference') {
            tooltipText = `Conference Ranking: ${rank}`;
        } else if (type === 'patent') {
            tooltipText = 'Patent';
        }
        
        box.setAttribute('title', tooltipText);
    });
}); 