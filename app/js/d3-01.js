(function() {
  const dataset = [
    { 'name': 'A', 'value': 5 },
    { 'name': 'B', 'value': 6 },
    { 'name': 'C', 'value': 8 },
    { 'name': 'D', 'value': 1 },
    { 'name': 'E', 'value': 2 },
    { 'name': 'F', 'value': 6 },
    { 'name': 'G', 'value': 8 },
    { 'name': 'H', 'value': 6 },
    { 'name': 'I', 'value': 10 },
    { 'name': 'J', 'value': 9 }
  ];
  const width = 400;
  const height = 400;
  const padding = 30;

  const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

  const xScale = d3.scaleBand()
    .rangeRound([padding, width - padding])
    .padding(0.1)
    .domain(dataset.map(function(d) { return d.name; }));

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d.value; })])
    .range([height - padding, padding]);

  svg.append('g')
    .attr('transform', 'translate(' + 0 + ',' + (height - padding) + ')')
    .call(d3.axisBottom(xScale));

  svg.append('g')
    .attr('transform', 'translate(' + padding + ',' + 0 + ')')
    .call(d3.axisLeft(yScale));

  svg.append('g')
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d) { return xScale(d.name); })
    .attr('y', function(d) { return yScale(d.value); })
    .attr('width', xScale.bandwidth())
    .attr('height', function(d) { return height - padding - yScale(d.value); })
    .attr('fill', 'steelblue');
})();
