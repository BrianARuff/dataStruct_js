export default class GraphNode {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.edges = [];
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  removeEdge(edge) {
    this.edges.splice(this.edges.indexOf(edge), 1);
  }

  getEdges() {
    return this.edges;
  }

  getId() {
    return this.id;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getNeighbors() {
    let neighbors = [];
    this.edges.forEach((edge) => {
      neighbors.push(edge.getOtherNode(this));
    });
    return neighbors;
  }

  getNeighbor(id) {
    let neighbor = null;
    this.edges.forEach((edge) => {
      if (edge.getOtherNode(this).getId() === id) {
        neighbor = edge.getOtherNode(this);
      }
    });
    return neighbor;
  }

  getNeighborWeight(id) {
    let neighbor = this.getNeighbor(id);
    let weight = 0;
    if (neighbor) {
      weight = neighbor.getData().weight;
    }
    return weight;
  }

  getNeighborWeights() {
    let weights = [];
    this.getNeighbors().forEach((neighbor) => {
      weights.push(neighbor.getData().weight);
    });
    return weights;
  }

  getNeighborWeightsSum() {
    let weights = this.getNeighborWeights();
    return weights.reduce((a, b) => a + b);
  }

  getNeighborWeightsAvg() {
    let weights = this.getNeighborWeights();
    return weights.reduce((a, b) => a + b) / weights.length;
  }

  getNeighborWeightsMax() {
    let weights = this.getNeighborWeights();
    return Math.max.apply(null, weights);
  }

  getNeighborWeightsMin() {
    let weights = this.getNeighborWeights();
    return Math.min.apply(null, weights);
  }

  getNeighborWeightsVariance() {
    let weights = this.getNeighborWeights();
    let avg = this.getNeighborWeightsAvg();
    let variance = 0;
    weights.forEach((weight) => {
      variance += Math.pow(weight - avg, 2);
    });
    return variance / weights.length;
  }

  getNeighborWeightsStandardDeviation() {
    let weights = this.getNeighborWeights();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    return Math.sqrt(variance);
  }

  getNeighborWeightsSkewness() {
    let weights = this.getNeighborWeights();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = 0;
    weights.forEach((weight) => {
      skewness += Math.pow((weight - avg) / stdDev, 3);
    });
    return skewness / weights.length;
  }

  getNeighborWeightsKurtosis() {
    let weights = this.getNeighborWeights();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let kurtosis = 0;
    weights.forEach((weight) => {
      kurtosis += Math.pow((weight - avg) / stdDev, 4);
    });
    return kurtosis / weights.length;
  }

  getNeighborWeightsMaxMinAvgVarianceStdDevSkewnessKurtosis() {
    let weights = this.getNeighborWeights();
    let max = this.getNeighborWeightsMax();
    let min = this.getNeighborWeightsMin();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = this.getNeighborWeightsSkewness();
    let kurtosis = this.getNeighborWeightsKurtosis();
    return [max, min, avg, variance, stdDev, skewness, kurtosis];
  }

  getNeighborWeightsMaxMinAvgVarianceStdDevSkewnessKurtosisPercentage() {
    let weights = this.getNeighborWeights();
    let max = this.getNeighborWeightsMax();
    let min = this.getNeighborWeightsMin();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = this.getNeighborWeightsSkewness();
    let kurtosis = this.getNeighborWeightsKurtosis();
    return [
      max / avg,
      min / avg,
      avg / avg,
      variance / avg,
      stdDev / avg,
      skewness / avg,
      kurtosis / avg,
    ];
  }

  getNeighborWeightsMaxMinAvgVarianceStdDevSkewnessKurtosisPercentageFormatted() {
    let weights = this.getNeighborWeights();
    let max = this.getNeighborWeightsMax();
    let min = this.getNeighborWeightsMin();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = this.getNeighborWeightsSkewness();
    let kurtosis = this.getNeighborWeightsKurtosis();
    return [
      max.toFixed(2) + "%",
      min.toFixed(2) + "%",
      avg.toFixed(2) + "%",
      variance.toFixed(2) + "%",
      stdDev.toFixed(2) + "%",
      skewness.toFixed(2) + "%",
      kurtosis.toFixed(2) + "%",
    ];
  }

  getNeighborWeightsMaxMinAvgVarianceStdDevSkewnessKurtosisPercentageFormattedWithLabels() {
    let weights = this.getNeighborWeights();
    let max = this.getNeighborWeightsMax();
    let min = this.getNeighborWeightsMin();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = this.getNeighborWeightsSkewness();
    let kurtosis = this.getNeighborWeightsKurtosis();
    return [
      max.toFixed(2) + "% (" + this.getLabel() + ")",
      min.toFixed(2) + "% (" + this.getLabel() + ")",
      avg.toFixed(2) + "% (" + this.getLabel() + ")",
      variance.toFixed(2) + "% (" + this.getLabel() + ")",
      stdDev.toFixed(2) + "% (" + this.getLabel() + ")",
      skewness.toFixed(2) + "% (" + this.getLabel() + ")",
      kurtosis.toFixed(2) + "% (" + this.getLabel() + ")",
    ];
  }

  getNeighborWeightsMaxMinAvgVarianceStdDevSkewnessKurtosisPercentageFormattedWithLabelsAndValues() {
    let weights = this.getNeighborWeights();
    let max = this.getNeighborWeightsMax();
    let min = this.getNeighborWeightsMin();
    let avg = this.getNeighborWeightsAvg();
    let variance = this.getNeighborWeightsVariance();
    let stdDev = this.getNeighborWeightsStandardDeviation();
    let skewness = this.getNeighborWeightsSkewness();
    let kurtosis = this.getNeighborWeightsKurtosis();
    return [
      this.getLabel() + ": " + max.toFixed(2) + "%",
      this.getLabel() + ": " + min.toFixed(2) + "%",
      this.getLabel() + ": " + avg.toFixed(2) + "%",
      this.getLabel() + ": " + variance.toFixed(2) + "%",
      this.getLabel() + ": " + stdDev.toFixed(2) + "%",
      this.getLabel() + ": " + skewness.toFixed(2) + "%",
      this.getLabel() + ": " + kurtosis.toFixed(2) + "%",
    ];
  }
}
