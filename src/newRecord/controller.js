class newRecordController {
    constructor(PouchService) {
        this.PouchService = PouchService;
    }

    $onInit() {
        this.name = '';
        this.guardianRelation = '';
        this.guardianName = '';
        this.gender = '';
        this.age = null;
        this.address = '';
        this.phoneNumber = null;
        this.aadharNumber = null;
        this.itemDescription = '';
        this.principle = null;
        this.roi = null;
        this.billNumber = null;
        this.img = '';
        this.PouchService.getRecords();
    }

    setGuardianRelation(relation) {
        const relationMap = {
            "S/O": 'Male',
            "D/O": 'Female',
            "W/O": 'Female'
        }

        this.guardianRelation = relation;
        this.gender = relationMap[relation];
    }
    
    setRoi(arg) {
        if(arg>20000) {
            this.roi = 2;
        }
        else{
            this.roi = 3;
        }
    }

    submit($event) {
        $event.stopPropagation();

        this.PouchService.addRecord(this)
        .then(function(res) {
            console.log(res);
        });
    }
}

newRecordController.$inject = ['PouchService']; 



export default newRecordController