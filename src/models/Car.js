export default class Car {
    marka;
    model;
    yil;
    versiyon;

    constructor(selectedMarka, selectedModel, selectedYil, selectedVersiyon ) {
        this.marka = selectedMarka;
        this.model = selectedModel;
        this.yil = selectedYil;
        this.versiyon = selectedVersiyon
      }
}
