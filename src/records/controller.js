class recordsController {
    constructor(PouchService) {
        this.PouchService = PouchService;
    }
}

recordsController.$inject = ['PouchService'];

export default recordsController