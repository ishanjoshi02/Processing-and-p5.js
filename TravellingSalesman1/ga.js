function calcFitness() {
    for (var i = 0; i < population.length; i++) {
        var d = calcDistance(cities, population[i]);
        if (d < recordDist) {
            recordDist = d;
            bestEver = population[i];
        }
        fitness[i] = 1 / (d + 1);
    }

    console.log(recordDist);
}

function normalizeFitness() {
    var sum = 0;
    for (var i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }

    for (var i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;
    }
}

function nextGeneration() {
    newPopulation = [];
    for(var i = 0; i < population.length; i++) {
        var order = pickOne(population, fitness);
        mutate(order);
        newPopulation[i] = order;
    }


    population = newPopulation;

}

function pickOne(list, probablities) {
    var index = 0;
    var r = random(1);

    if (r > 0) {
        r -= probablities[index];
        index++;
    }
    index--;

    return list[index].slice();
} 

function mutate(order) {
    var indexA = floor(random(order.length));
    var indexB = floor(random(order.length));

    swap(order, indexA, indexB);
}