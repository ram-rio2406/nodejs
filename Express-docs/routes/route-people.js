const { Router } = require('express')
const express = require('express')
const router = express.Router()

const {
    getPeople,
    postNewPeople,
    putUpdatePeople,
    deletePeople
}  = require('../controllers/people')

/*router.get('/',getPeople)
router.post('/',postNewPeople)
router.put('/:ID',putUpdatePeople)
router.delete('/:ID',deletePeople)
*/
router.route('/').get(getPeople).post(postNewPeople)
router.route('/:ID').put(putUpdatePeople).delete(deletePeople)

module.exports = router
