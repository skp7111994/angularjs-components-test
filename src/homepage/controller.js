class mainController {
    constructor(PouchService) {
        this.PouchService = PouchService;
    }
    $onInit() {
        
    }
}

mainController.$inject = ['PouchService'];

export default mainController