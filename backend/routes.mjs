import express from 'express';
import {CrewMember, Ship} from './repository.mjs';
import {getRecords, postRecord, deleteRecords, getRecord,
headRecord, putRecord, patchRecord, deleteRecord} from './service.mjs';


const router = express.Router();

router.route('/Ship')
    .get((request, response) => getRecords(Ship, request, response))
    .post((request, response) => postRecord(Ship, request, response))
    .delete((request, response) => deleteRecords(Ship, request, response))

router.route('/Ship/:id')
.get((request, response) => getRecord(Ship, request, response))
.head((request, response) => headRecord(Ship, request, response))
.put((request, response) => putRecord(Ship, request, response))
.patch((request, response) => patchRecord(Ship, request, response))
.delete((request, response) => deleteRecord(Ship, request, response))  

router.route('/CrewMember')
    .get((request, response) => getRecords(CrewMember, request, response))
    .post((request, response) => postRecord(CrewMember, request, response))
    .delete((request, response) => deleteRecords(CrewMember, request, response))

router.route('/CrewMember/:id')
.get((request, response) => getRecord(CrewMember, request, response))
.head((request, response) => headRecord(CrewMember, request, response))
.put((request, response) => putRecord(CrewMember, request, response))
.patch((request, response) => patchRecord(CrewMember, request, response))
.delete((request, response) => deleteRecord(CrewMember, request, response))




export default router;