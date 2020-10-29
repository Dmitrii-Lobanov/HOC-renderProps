import { Machine } from 'xstate';

const routeMachine = Machine({
    initial: 'App',
     states: {
        App: {
            on: {
                OPTIONS: 'Options'
            }
        },
        Header: {
            on: {
                OPTIONS: 'Options'
            }
        },
        Options: {
            on: {
             FLIGHT_SCHEDULE: 'FlightSchedule',
             SCAN_TICKET: 'ScanTicket',
             MAPS: 'Maps',
             SERVICES: 'Services'
            }
        },
        FlightSchedule: {
            type: 'final'
        },
        ScanTicket: {
             on: {
                 BOARDING_PASS: 'BoardingPass'
             }
        },
        Maps: {
            type: 'final'
        },
        Services: {
            type: 'final'
        },
        BoardingPass: {
            type: 'final'
        }
    }
});

   export default routeMachine;