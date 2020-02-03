//Selectors

d3.select(); // --> like querySelector
d3.selectAll(); // --> like querySelectorAll

d3.select('h1').style('color','red')
.attr('class', 'heading')
.text('New h1 text')

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');
