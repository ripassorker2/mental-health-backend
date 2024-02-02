import express from 'express';
import { JournalControler } from './journal.controler';

const router = express.Router();

router.post('/', JournalControler.createJournal);
router.get('/user/:id', JournalControler.getJournalByUser);
router.get('/', JournalControler.gelAllJournal);
router.get('/:id', JournalControler.getSingleJournal);

export const JournalRoutes = router;
