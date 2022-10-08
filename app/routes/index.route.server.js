/*Name:Faiyaz Muhammad
Student id: 301227442
Date: october 7th 2022*/

import { Router } from 'express';
import { displayHomePage, 
    displayAboutPage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage, 
    displayExtrasPage} from '../controllers/index.controller.server.js'

const router = Router();

router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage );
router.get('/projects', displayProjectsPage );
router.get('/services', displayServicesPage );
router.get('/contact', displayContactPage );
router.get('/extra', displayExtrasPage);

export default router;