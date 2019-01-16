import clock from 'clock';
import document from "document";

import { msToTime } from '../common/utils'


const startTime = Date.now();
const timer = document.getElementById('timer');

clock.granularity = 'seconds';

clock.ontick = (event) => {
    timer.text = msToTime(Date.now() - startTime);
}
