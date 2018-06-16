//Interface to connect to PouchDB

import PouchDB from 'pouchdb';

class PouchService {
    constructor($q) {
        this.db = new PouchDB('inventory');
        this.$q  = $q;
    }

    addRecord(record) {
        const doc = {
            _id: new Date().toISOString(),
            name: record.name,
            guardianRelation: record.guardianRelation,
            guardianName: record.guardianName,
            gender: record.gender,
            age: record.age,
            address: record.address,
            phoneNumber: record.phoneNumber,
            aadharNumber: record.aadharNumber,
            itemDescription: record.itemDescription,
            principle: record.principle,
            roi: record.roi,
            billNumber: record.billNumber,
            img: record.img,
            guardianRelationrecord: record.guardianRelation,
            gender: record.gender
        };

        const addDoc = this.db.put(doc);

        return this.$q.when(addDoc)
        .then(function (response) {
            return response;
        }).catch(function (err) {
            console.log(err);
        });
    }

    getRecords() {
        const getAllDocs = this.db.allDocs({
            include_docs: true
        });

        return this.$q.when(getAllDocs)
        .then(function (result) {
            return result.rows;
        })
        .catch(function (err) {
            console.log(err);
        });
    }
}

PouchService.$inject = ['$q']

export default PouchService